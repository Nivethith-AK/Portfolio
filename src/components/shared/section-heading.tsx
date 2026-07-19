"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { Reveal } from "@/components/shared/reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * Consistent section header: a small animated eyebrow label, a strong title
 * with a growing accent underline, and an optional supporting line — the
 * backbone of the page's visual rhythm.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      blur
      className={cn(
        "flex max-w-2xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <motion.span
          aria-hidden
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="h-px w-8 origin-left bg-gradient-to-r from-primary to-transparent"
        />
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </span>
      </div>
      <h2 className="relative w-fit text-pretty text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
        <motion.span
          aria-hidden
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "absolute -bottom-1 left-0 h-0.5 w-full origin-left rounded-full bg-gradient-to-r from-primary via-primary/50 to-transparent",
            align === "center" && "left-1/2 -translate-x-1/2 origin-center",
          )}
        />
      </h2>
      {description ? (
        <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
