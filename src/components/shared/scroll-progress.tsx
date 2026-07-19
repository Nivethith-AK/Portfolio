"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Slim gradient bar pinned to the top of the viewport that fills
 * in proportion to how far the page has been scrolled.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-40 h-0.5 origin-left bg-gradient-to-r from-primary via-primary/70 to-primary/40"
    />
  );
}
