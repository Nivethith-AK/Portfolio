import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";
import { supabase } from "../../lib/supabase";
import { PortfonButton, SectionEyebrow } from "../PortfonUI";

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setStatusMessage("Please fill in all fields.");
      return;
    }

    setStatus("loading");
    setStatusMessage("");

    try {
      let sent = false;

      // 1. Try Vercel Serverless Function first (handles Supabase storage & Resend email)
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (res.ok) {
          const data = await res.json();
          if (data.ok) {
            sent = true;
          }
        }
      } catch {
        // Fall back to direct Supabase client if serverless endpoint is not hosted locally
      }

      // 2. Direct client-side Supabase insert fallback if /api/contact didn't respond
      if (!sent && supabase) {
        const { error } = await supabase.from("contact_messages").insert([
          {
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim(),
            created_at: new Date().toISOString(),
          },
        ]);
        if (!error) {
          sent = true;
        } else {
          console.error("Supabase direct insert error:", error);
        }
      }

      if (sent) {
        setStatus("success");
        setStatusMessage("Thank you! Your message has been sent successfully.");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setStatus("idle");
          setStatusMessage("");
        }, 6000);
      } else {
        setStatus("error");
        setStatusMessage("Could not send directly. Opening your email client instead...");
        window.location.href = `mailto:nivethith.16@gmail.com?subject=Contact from ${encodeURIComponent(
          formData.name
        )}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${encodeURIComponent(formData.email)}`;
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setStatusMessage("An unexpected error occurred. Please email nivethith.16@gmail.com directly.");
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 w-full bg-background pt-12 pb-24 md:pb-32">
      <div className="max-w-[1140px] mx-auto px-5 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Info Column (matching Portfon /contact-us "Let's Talk") */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5 space-y-6 pt-2"
          >
            <div>
              <SectionEyebrow label="Contact" />
              <h2 className="mt-3 text-3xl sm:text-4xl font-medium tracking-[-0.03em] text-foreground">
                Let’s Talk
              </h2>
              <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-muted-foreground max-w-sm">
                Have an AI architecture challenge, platform build, or opportunity in mind? Reach out and let’s start the conversation.
              </p>
            </div>

            <div className="w-full h-px bg-[var(--border)] max-w-xs" />

            <div className="space-y-4">
              <a
                href="tel:+94785997150"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                +94 78 599 7150
              </a>

              <a
                href="mailto:nivethith.16@gmail.com"
                className="block text-xl sm:text-2xl font-medium tracking-[-0.02em] text-foreground hover:text-[#3458ff] transition-colors"
              >
                nivethith.16@gmail.com
              </a>

              <a
                href="https://linkedin.com/in/nivethith-ak"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-muted-foreground hover:text-[#3458ff] transition-colors"
              >
                linkedin.com/in/nivethith-ak
              </a>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Colombo,
                <br />
                Sri Lanka
              </p>
            </div>
          </motion.div>

          {/* Right Form Card (matching Portfon "Drop Us a Message") */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="lg:col-span-7 portfon-card p-6 sm:p-8 md:p-10 shadow-sm"
          >
            <div className="mb-8">
              <h3 className="text-2xl sm:text-3xl font-medium tracking-[-0.03em] text-foreground">
                Drop a Message
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Tell me what you’re building and I’ll get back to you shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                  className="w-full pb-3 pt-1 bg-transparent border-b border-[var(--border)] text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-[#3458ff] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email address"
                  className="w-full pb-3 pt-1 bg-transparent border-b border-[var(--border)] text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-[#3458ff] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project or role..."
                  className="w-full pb-3 pt-1 bg-transparent border-b border-[var(--border)] text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-[#3458ff] transition-colors resize-none"
                />
              </div>

              <AnimatePresence>
                {statusMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className={`flex items-center gap-2 p-3.5 rounded-xl text-sm ${
                      status === "success"
                        ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25"
                        : "bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/25"
                    }`}
                  >
                    {status === "success" ? (
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                    ) : (
                      <AlertCircle className="w-4 h-4 shrink-0" />
                    )}
                    <span>{statusMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="pt-2">
                <PortfonButton
                  type="submit"
                  disabled={status === "loading"}
                  size="lg"
                  fullWidth
                  icon={
                    status === "loading" ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )
                  }
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </PortfonButton>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
