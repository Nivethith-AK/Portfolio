"use client";

import { cn } from "@/lib/utils";

/**
 * Ambient, slowly-drifting colored blobs that sit behind hero-style
 * content. Implemented as radial gradients (not blur filters) so they
 * cost almost nothing to composite. Purely decorative.
 */
export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
    >
      <div
        className="animate-aurora absolute -left-24 top-[-10%] size-[34rem] will-change-transform"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in srgb, var(--color-accent) 26%, transparent), transparent 72%)",
        }}
      />
      <div
        className="animate-aurora absolute right-[-10%] top-[10%] size-[30rem] will-change-transform"
        style={{
          animationDelay: "-6s",
          animationDuration: "22s",
          background:
            "radial-gradient(closest-side, color-mix(in srgb, var(--color-accent) 14%, transparent), transparent 72%)",
        }}
      />
      <div
        className="animate-aurora absolute bottom-[-15%] left-1/3 size-[28rem] will-change-transform"
        style={{
          animationDelay: "-12s",
          animationDuration: "26s",
          background:
            "radial-gradient(closest-side, color-mix(in srgb, var(--color-muted-foreground) 12%, transparent), transparent 72%)",
        }}
      />
    </div>
  );
}
