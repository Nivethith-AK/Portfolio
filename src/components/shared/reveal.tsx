"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";

import { cn } from "@/lib/utils";

type RevealDirection = "up" | "down" | "left" | "right" | "none";

type RevealProps = HTMLMotionProps<"div"> & {
  /** Delay before the animation starts, in seconds. */
  delay?: number;
  /** Vertical offset to animate from, in pixels (used for up/down). */
  y?: number;
  /** Direction the element travels from as it reveals. */
  direction?: RevealDirection;
  /** Distance travelled, in pixels. Overrides `y` when set. */
  distance?: number;
  /** Add a subtle blur-in for a more cinematic feel. */
  blur?: boolean;
  /** Start slightly scaled down and settle to 1. */
  scale?: boolean;
  duration?: number;
};

function offsetFor(direction: RevealDirection, distance: number) {
  switch (direction) {
    case "up":
      return { x: 0, y: distance };
    case "down":
      return { x: 0, y: -distance };
    case "left":
      return { x: distance, y: 0 };
    case "right":
      return { x: -distance, y: 0 };
    default:
      return { x: 0, y: 0 };
  }
}

/**
 * Fade + travel into view once, respecting reduced-motion preferences.
 * Supports direction, blur-in and scale for richer, layered motion.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 16,
  direction = "up",
  distance,
  blur = false,
  scale = false,
  duration = 0.6,
  ...props
}: RevealProps) {
  const prefersReduced = useReducedMotion();
  const dist = distance ?? y;
  const { x: ox, y: oy } = offsetFor(direction, dist);

  const hidden = prefersReduced
    ? { opacity: 0 }
    : {
        opacity: 0,
        x: ox,
        y: oy,
        ...(blur ? { filter: "blur(10px)" } : {}),
        ...(scale ? { scale: 0.94 } : {}),
      };

  const shown = prefersReduced
    ? { opacity: 1 }
    : {
        opacity: 1,
        x: 0,
        y: 0,
        ...(blur ? { filter: "none" } : {}),
        ...(scale ? { scale: 1 } : {}),
      };

  return (
    <motion.div
      className={cn(className)}
      initial={hidden}
      whileInView={shown}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Wrap a group of `StaggerItem`s to reveal them in sequence on scroll.
 */
export function Stagger({
  children,
  className,
  ...props
}: HTMLMotionProps<"div">) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  ...props
}: HTMLMotionProps<"div">) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={
        prefersReduced
          ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
          : staggerItem
      }
      {...props}
    >
      {children}
    </motion.div>
  );
}
