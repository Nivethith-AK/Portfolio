"use client";

import * as React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

import { cn } from "@/lib/utils";

type ParallaxProps = {
  children: React.ReactNode;
  /** Positive moves slower (up), negative moves faster. Pixels of travel. */
  offset?: number;
  className?: string;
};

/**
 * Translates its children vertically as the element scrolls through the
 * viewport, creating depth. Disabled under reduced-motion.
 */
export function Parallax({ children, offset = 60, className }: ParallaxProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReduced ? [0, 0] : [offset, -offset],
  ) as MotionValue<number>;

  return (
    <div ref={ref} className={cn(className)}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
