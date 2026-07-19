"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type TextRotateProps = {
  words: string[];
  interval?: number;
  className?: string;
};

/**
 * Cycles through a list of words with a springy vertical swap.
 * Used to showcase the roles I'm working toward.
 */
export function TextRotate({
  words,
  interval = 2200,
  className,
}: TextRotateProps) {
  const [index, setIndex] = React.useState(0);
  const prefersReduced = useReducedMotion();

  React.useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      interval,
    );
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span
      className={
        "relative inline-flex overflow-hidden align-bottom " + (className ?? "")
      }
    >
      {/* Reserve width for the longest word so layout never jumps. */}
      <span className="invisible" aria-hidden>
        {words.reduce((a, b) => (a.length >= b.length ? a : b), "")}
      </span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          initial={prefersReduced ? { opacity: 0 } : { y: "100%", opacity: 0 }}
          animate={prefersReduced ? { opacity: 1 } : { y: "0%", opacity: 1 }}
          exit={prefersReduced ? { opacity: 0 } : { y: "-100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 30 }}
          className="text-gradient-accent absolute inset-0 whitespace-nowrap"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
