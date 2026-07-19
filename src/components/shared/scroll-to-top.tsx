"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";
import * as React from "react";

/**
 * Floating button that appears after scrolling down, with a circular
 * progress ring that tracks reading progress. Click to smooth-scroll up.
 */
export function ScrollToTop() {
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    return scrollYProgress.on("change", (v) => setVisible(v > 0.08));
  }, [scrollYProgress]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.6, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 12 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="fixed z-50 grid size-12 place-items-center rounded-full border border-border bg-background/90 text-foreground shadow-md backdrop-blur-xl transition-colors hover:border-primary/40 hover:text-primary bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-[max(1.5rem,env(safe-area-inset-right))]"
        >
          <svg
            className="absolute inset-0 -rotate-90"
            viewBox="0 0 48 48"
            aria-hidden
          >
            <motion.circle
              cx="24"
              cy="24"
              r="21"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary"
              style={{ pathLength }}
            />
          </svg>
          <ArrowUp className="size-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
