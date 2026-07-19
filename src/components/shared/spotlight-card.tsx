"use client";

import * as React from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

import { cn } from "@/lib/utils";

type SpotlightCardProps = {
  children: React.ReactNode;
  className?: string;
  /** Maximum 3D tilt in degrees. Set to 0 to disable tilt. */
  tilt?: number;
};

/**
 * A card that tilts in 3D toward the cursor and reveals a radial
 * accent "spotlight" that tracks the pointer. Pure eye candy that
 * still respects reduced-motion.
 */
export function SpotlightCard({
  children,
  className,
  tilt = 6,
}: SpotlightCardProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  // Pointer position for the spotlight gradient.
  const mx = useMotionValue(50);
  const my = useMotionValue(50);

  // Rotation driven by pointer, smoothed with springs.
  const rx = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const ry = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });

  const spotlight = useMotionTemplate`radial-gradient(240px circle at ${mx}% ${my}%, color-mix(in srgb, var(--color-accent) 16%, transparent), transparent 70%)`;

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    mx.set(px * 100);
    my.set(py * 100);
    if (!prefersReduced && tilt > 0) {
      ry.set((px - 0.5) * tilt * 2);
      rx.set((0.5 - py) * tilt * 2);
    }
  };

  const reset = () => {
    rx.set(0);
    ry.set(0);
    mx.set(50);
    my.set(50);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className={cn("group/spot relative", className)}
    >
      <motion.div
        aria-hidden
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
      />
      {children}
    </motion.div>
  );
}
