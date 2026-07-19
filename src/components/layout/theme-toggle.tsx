"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Keep in sync with theme transition durations in globals.css */
const THEME_ANIM_MS = 300;

function prefersFinePointer() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

/**
 * One-click light/dark switch. Content stays visible.
 * Desktop: CSS custom-property crossfade.
 * Mobile: simple background/text fade (Safari @property morphs are buggy).
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
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const applyTheme = () => {
      root.classList.toggle("dark", next === "dark");
      root.style.colorScheme = next;
      setTheme(next);
    };

    if (reduced) {
      applyTheme();
      return;
    }

    busyRef.current = true;

    // Mobile / touch: avoid @property interpolation (janky/broken on iOS).
    // Fade only background + text via normal CSS transitions.
    if (!prefersFinePointer()) {
      root.classList.add("theme-animate-mobile");
      void root.offsetWidth;
      applyTheme();
      window.setTimeout(() => {
        root.classList.remove("theme-animate-mobile");
        busyRef.current = false;
      }, THEME_ANIM_MS + 40);
      return;
    }

    // Desktop: full token crossfade.
    root.classList.add("theme-animate");
    void root.offsetWidth;
    applyTheme();

    window.setTimeout(() => {
      root.classList.remove("theme-animate");
      busyRef.current = false;
    }, THEME_ANIM_MS + 40);
  }, [isDark, mounted, setTheme]);

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={toggle}
      aria-label={
        mounted
          ? `Switch to ${isDark ? "light" : "dark"} mode`
          : "Toggle theme"
      }
      className="theme-toggle relative touch-manipulation overflow-hidden border border-transparent hover:border-border"
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
