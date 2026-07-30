import { NextResponse } from "next/server";

/** Canonical resume file in Supabase Storage (public documents bucket). */
const RESUME_SOURCE =
  process.env.RESUME_STORAGE_URL?.trim() ||
  "https://cnkrxtqeyfgtmdakzuzi.supabase.co/storage/v1/object/public/documents/Nivethith-Arasakumar-Resume.pdf";

const DOWNLOAD_NAME = "Nivethith-Arasakumar-Resume.pdf";

/**
 * Clean portfolio URL: `/resume`
 * Streams the PDF from Supabase and forces a download with a professional filename.
 */
export async function GET() {
  const upstream = await fetch(RESUME_SOURCE, {
    // Resume updates are rare; revalidate periodically.
    next: { revalidate: 3600 },
  });

  if (!upstream.ok || !upstream.body) {
    return NextResponse.json(
      { ok: false, error: "Resume is temporarily unavailable." },
      { status: 502 },
    );
  }

  const headers = new Headers();
  headers.set("Content-Type", "application/pdf");
  headers.set(
    "Content-Disposition",
    `attachment; filename="${DOWNLOAD_NAME}"; filename*=UTF-8''${encodeURIComponent(DOWNLOAD_NAME)}`,
  );
  headers.set("Cache-Control", "public, max-age=3600, s-maxage=3600");

  const length = upstream.headers.get("content-length");
  if (length) headers.set("Content-Length", length);

  return new NextResponse(upstream.body, {
    status: 200,
    headers,
  });
}
