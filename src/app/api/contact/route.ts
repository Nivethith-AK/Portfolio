import { NextResponse } from "next/server";

import { contactSchema } from "@/lib/validations";
import { getSupabaseServerClient } from "@/lib/supabase/server";

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

/** Best-effort per-instance limit (Vercel may cold-start / scale out). */
const hits = new Map<string, { count: number; resetAt: number }>();

/** Inbox that receives portfolio contact notifications. */
const CONTACT_TO =
  process.env.CONTACT_TO_EMAIL?.trim() || "nivethith.16@gmail.com";

function memoryRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);

  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }

  if (entry.count >= MAX_REQUESTS) return false;
  entry.count += 1;
  return true;
}

/**
 * Shared rate limit via Supabase when the service role key is configured
 * (anon RLS blocks SELECT, so this only works with SUPABASE_SERVICE_ROLE_KEY).
 */
async function dbRateLimited(ip: string): Promise<boolean> {
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) return false;

  try {
    const supabase = getSupabaseServerClient();
    const since = new Date(Date.now() - WINDOW_MS).toISOString();
    const { count, error } = await supabase
      .from("contact_messages")
      .select("id", { count: "exact", head: true })
      .eq("ip", ip)
      .gte("created_at", since);

    if (error) {
      console.warn("[contact] DB rate-limit check failed:", error.message);
      return false;
    }

    return (count ?? 0) >= MAX_REQUESTS;
  } catch {
    return false;
  }
}

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

async function sendContactEmail(input: {
  name: string;
  email: string;
  message: string;
}): Promise<{ ok: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      ok: false,
      error: "RESEND_API_KEY is not set — message saved but email not sent.",
    };
  }

  const from =
    process.env.CONTACT_FROM_EMAIL?.trim() ||
    "Portfolio <onboarding@resend.dev>";

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from,
      to: [CONTACT_TO],
      reply_to: input.email,
      subject: `New portfolio message from ${input.name}`,
      html: `
        <div style="font-family:system-ui,sans-serif;line-height:1.5;color:#111">
          <h2 style="margin:0 0 12px">New contact form message</h2>
          <p style="margin:0 0 8px"><strong>Name:</strong> ${escapeHtml(input.name)}</p>
          <p style="margin:0 0 8px"><strong>Email:</strong> ${escapeHtml(input.email)}</p>
          <p style="margin:16px 0 8px"><strong>Message:</strong></p>
          <pre style="white-space:pre-wrap;background:#f4f4f5;padding:12px;border-radius:8px;font-family:inherit">${escapeHtml(input.message)}</pre>
        </div>
      `,
      text: `New message from ${input.name} <${input.email}>\n\n${input.message}`,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    return { ok: false, error: `Resend error ${res.status}: ${body}` };
  }

  return { ok: true };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function POST(request: Request) {
  const ip = getClientIp(request);

  if (!memoryRateLimit(ip) || (await dbRateLimited(ip))) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again shortly." },
      { status: 429, headers: { "Retry-After": "60" } },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Validation failed.", issues: parsed.error.issues },
      { status: 422 },
    );
  }

  // Honeypot tripped: pretend success so bots don't learn anything.
  if (parsed.data.company?.trim()) {
    return NextResponse.json({ ok: true, emailed: true });
  }

  const { name, email, message } = parsed.data;
  const userAgent = request.headers.get("user-agent") ?? undefined;

  // Send email first so we can store the accurate `emailed` flag on insert.
  // (Anon RLS allows INSERT but denies SELECT/UPDATE — so we cannot
  // `.select()` after insert or patch the row afterward without a service role.)
  const mail = await sendContactEmail({ name, email, message });
  if (!mail.ok) {
    console.warn("[contact] Email not sent:", mail.error);
  }

  try {
    const supabase = getSupabaseServerClient();
    const { error } = await supabase.from("contact_messages").insert({
      name,
      email,
      message,
      ip,
      user_agent: userAgent,
      emailed: mail.ok,
    });

    if (error) {
      console.error("[contact] Supabase insert failed:", error.message);
      // If email already went out, still report success to the user.
      if (mail.ok) {
        return NextResponse.json({ ok: true, emailed: true });
      }
      return NextResponse.json(
        { ok: false, error: "Could not save your message. Please try again." },
        { status: 500 },
      );
    }
  } catch (error) {
    console.error("[contact] Supabase unavailable:", error);
    if (mail.ok) {
      return NextResponse.json({ ok: true, emailed: true });
    }
    return NextResponse.json(
      {
        ok: false,
        error:
          "Contact service is not configured yet. Please email me directly.",
      },
      { status: 503 },
    );
  }

  return NextResponse.json({
    ok: true,
    emailed: mail.ok,
  });
}
