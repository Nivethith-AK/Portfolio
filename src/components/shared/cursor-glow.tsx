"use client";

import * as React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

/**
 * A soft accent glow that trails the cursor across the entire page,
 * adding a subtle, premium sense of depth. Hidden on touch / reduced-motion.
 */
export function CursorGlow() {
  const prefersReduced = useReducedMotion();
  const [enabled, setEnabled] = React.useState(false);

  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 120, damping: 20, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 120, damping: 20, mass: 0.4 });

  React.useEffect(() => {
    // Only enable on devices with a fine pointer (mouse), and not for
    // users who prefer reduced motion.
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine || prefersReduced) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [prefersReduced, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[45] hidden will-change-transform md:block"
    >
      {/* Radial gradient instead of a blur filter — same soft halo, a
          fraction of the GPU cost. */}
      <div
        className="size-[26rem] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in srgb, var(--color-accent) 13%, transparent), transparent 70%)",
        }}
      />
    </motion.div>
  );
}
