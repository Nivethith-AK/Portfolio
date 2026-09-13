import { createClient } from "@supabase/supabase-js";

export default async function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: "Name, email, and message are required." });
    }

    const supabaseUrl =
      process.env.NEXT_PUBLIC_SUPABASE_URL ||
      process.env.SUPABASE_URL ||
      "https://cnkrxtqeyfgtmdakzuzi.supabase.co";

    const supabaseKey =
      process.env.SUPABASE_SERVICE_ROLE_KEY ||
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
      process.env.SUPABASE_ANON_KEY;

    let dbSaved = false;

    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey, {
        auth: { persistSession: false },
      });

      const { error } = await supabase.from("contact_messages").insert([
        {
          name,
          email,
          message,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) {
        console.error("Supabase insert error:", error);
      } else {
        dbSaved = true;
      }
    }

    // Optional email notification via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactTo = process.env.CONTACT_TO_EMAIL || "nivethith.16@gmail.com";
    const contactFrom = process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";
    let emailSent = false;

    if (resendApiKey) {
      try {
        const mailRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: contactFrom,
            to: [contactTo],
            reply_to: email,
            subject: `New portfolio message from ${name}`,
            html: `
              <h2>New Message from Portfolio</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <blockquote style="background:#f4f4f5;padding:12px;border-left:4px solid #8b5cf6;">${message}</blockquote>
            `,
          }),
        });
        emailSent = mailRes.ok;
      } catch (err) {
        console.error("Resend send error:", err);
      }
    }

    return res.status(200).json({
      ok: true,
      dbSaved,
      emailSent,
      message: "Message received successfully!",
    });
  } catch (error: any) {
    console.error("Contact handler error:", error);
    return res.status(500).json({ ok: false, error: error?.message || "Internal server error" });
  }
}
