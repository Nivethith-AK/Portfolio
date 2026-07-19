"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

import { contactSchema, type ContactInput } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const [sent, setSent] = React.useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
    defaultValues: { name: "", email: "", message: "", company: "" },
  });

  const onSubmit = async (data: ContactInput) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const payload = (await res.json().catch(() => null)) as {
        ok?: boolean;
        emailed?: boolean;
        error?: string;
      } | null;

      if (!res.ok || !payload?.ok) {
        throw new Error(payload?.error || "Request failed");
      }

      if (payload.emailed === false) {
        toast.success("Message received", {
          description:
            "Thanks — your note was saved. If you don't hear back, email me directly.",
        });
      } else {
        toast.success("Message sent", {
          description: "Thanks for reaching out — I'll reply soon.",
        });
      }
      reset();
      setSent(true);
      window.setTimeout(() => setSent(false), 4000);
    } catch (error) {
      toast.error("Something went wrong", {
        description:
          error instanceof Error && error.message
            ? error.message
            : "Please try again, or email me directly.",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="relative flex flex-col gap-5"
    >
      {/* Honeypot: hidden from humans, catches bots. */}
      <div
        className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0"
        aria-hidden
      >
        <label htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("company")}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" error={errors.name?.message}>
          <Input
            id="name"
            placeholder="Ada Lovelace"
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="transition-shadow focus-visible:shadow-[0_0_0_4px_color-mix(in_srgb,var(--color-accent)_14%,transparent)]"
            {...register("name")}
          />
        </Field>

        <Field label="Email" htmlFor="email" error={errors.email?.message}>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="transition-shadow focus-visible:shadow-[0_0_0_4px_color-mix(in_srgb,var(--color-accent)_14%,transparent)]"
            {...register("email")}
          />
        </Field>
      </div>

      <Field label="Message" htmlFor="message" error={errors.message?.message}>
        <Textarea
          id="message"
          placeholder="Tell me about your project, role, or idea…"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="transition-shadow focus-visible:shadow-[0_0_0_4px_color-mix(in_srgb,var(--color-accent)_14%,transparent)]"
          {...register("message")}
        />
      </Field>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting || sent}
        className="group relative w-full overflow-hidden sm:w-auto"
      >
        <AnimatePresence mode="wait" initial={false}>
          {sent ? (
            <motion.span
              key="sent"
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              className="inline-flex items-center gap-2"
            >
              <CheckCircle2 className="size-4" />
              Sent!
            </motion.span>
          ) : isSubmitting ? (
            <motion.span
              key="sending"
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              className="inline-flex items-center gap-2"
            >
              <Loader2 className="size-4 animate-spin" />
              Sending…
            </motion.span>
          ) : (
            <motion.span
              key="idle"
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              className="inline-flex items-center gap-2"
            >
              <Send className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              Send message
            </motion.span>
          )}
        </AnimatePresence>
      </Button>
    </form>
  );
}

/** A labelled field with an animated, accessible error message. */
function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            id={`${htmlFor}-error`}
            role="alert"
            initial={{ opacity: 0, height: 0, y: -4 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="text-sm text-red-500"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
