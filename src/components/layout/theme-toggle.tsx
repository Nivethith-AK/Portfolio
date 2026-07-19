"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Keep in sync with `html.theme-animate` duration in globals.css */
const THEME_ANIM_MS = 280;

/**
 * One-click light/dark switch. Content stays visible; theme colours
 * crossfade via CSS custom properties (no covering overlay).
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const busyRef = React.useRef(false);

  React.useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  const toggle = React.useCallback(() => {
    if (busyRef.current || !mounted) return;

    const next = isDark ? "light" : "dark";
    const root = document.documentElement;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      setTheme(next);
      return;
    }

    busyRef.current = true;
    root.classList.add("theme-animate");
    // Let the browser register transitions, then flip via next-themes only
    // (avoid also mutating `.dark` manually — that double-applies and stutters).
    requestAnimationFrame(() => {
      setTheme(next);
    });

    window.setTimeout(() => {
      root.classList.remove("theme-animate");
      busyRef.current = false;
    }, THEME_ANIM_MS + 40);
  }, [isDark, mounted, setTheme]);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      aria-label={
        mounted
          ? `Switch to ${isDark ? "light" : "dark"} mode`
          : "Toggle theme"
      }
      className="relative overflow-hidden border border-transparent hover:border-border"
    >
      <Sun
        className={cn(
          "size-[1.1rem] transition-[transform,opacity] duration-200 ease-out",
          isDark
            ? "scale-0 rotate-90 opacity-0"
            : "scale-100 rotate-0 opacity-100",
        )}
      />
      <Moon
        className={cn(
          "absolute size-[1.1rem] transition-[transform,opacity] duration-200 ease-out",
          isDark
            ? "scale-100 rotate-0 opacity-100"
            : "scale-0 -rotate-90 opacity-0",
        )}
      />
    </Button>
  );
}
