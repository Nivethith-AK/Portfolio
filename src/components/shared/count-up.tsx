"use client";

import * as React from "react";
import {
  animate,
  useInView,
  useReducedMotion,
} from "framer-motion";

type CountUpProps = {
  /** Numeric part to count toward, e.g. 30 for "30+". */
  value: number;
  /** Text rendered before the number (e.g. a currency symbol). */
  prefix?: string;
  /** Text rendered after the number (e.g. "+", "k"). */
  suffix?: string;
  duration?: number;
  className?: string;
};

/**
 * Counts from 0 up to `value` the first time it scrolls into view.
 */
export function CountUp({
  value,
  prefix = "",
  suffix = "",
  duration = 1.6,
  className,
}: CountUpProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const prefersReduced = useReducedMotion();
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;
    if (prefersReduced) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, value, duration, prefersReduced]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {Math.round(display)}
      {suffix}
    </span>
  );
}
