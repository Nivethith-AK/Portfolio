"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { cn } from "@/lib/utils";

type SplitTextProps = {
  text: string;
  className?: string;
  /**
   * Class applied to each animated word. Use this (not `className`) for
   * `background-clip: text` gradients — clipping on the container breaks
   * when descendants animate transforms/filters and get their own layers.
   */
  wordClassName?: string;
  /** Stagger between each word, in seconds. */
  stagger?: number;
  /** Delay before the whole animation begins. */
  delay?: number;
  /** Animate on scroll into view (default) or immediately on mount. */
  trigger?: "inView" | "mount";
  as?: "span" | "h1" | "h2" | "p";
};

/**
 * Reveals text word-by-word with a springy blur-and-rise. Each word is a
 * separate motion element so the effect reads as characters "assembling".
 */
export function SplitText({
  text,
  className,
  wordClassName,
  stagger = 0.045,
  delay = 0,
  trigger = "inView",
  as = "span",
}: SplitTextProps) {
  const prefersReduced = useReducedMotion();
  const words = text.split(" ");

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const word: Variants = prefersReduced
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: "0.5em", filter: "blur(8px)" },
        show: {
          opacity: 1,
          y: "0em",
          filter: "none",
          transition: { type: "spring", stiffness: 220, damping: 24 },
        },
      };

  const MotionTag = motion[as];
  const triggerProps =
    trigger === "inView"
      ? {
          initial: "hidden" as const,
          whileInView: "show" as const,
          viewport: { once: true, margin: "-60px" },
        }
      : {
          initial: "hidden" as const,
          animate: "show" as const,
        };

  return (
    <MotionTag
      variants={container}
      {...triggerProps}
      className={cn("inline-flex flex-wrap", className)}
    >
      {words.map((w, i) => (
        <span key={`${w}-${i}`} className="inline-block overflow-hidden">
          <motion.span
            variants={word}
            className={cn("inline-block", wordClassName)}
          >
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
