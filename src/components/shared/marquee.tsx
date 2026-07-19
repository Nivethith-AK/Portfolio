"use client";

import { cn } from "@/lib/utils";

/**
 * An infinitely-scrolling horizontal row. The content is duplicated so
 * the loop is seamless; hovering pauses the motion.
 */
export function Marquee({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "pause-on-hover group relative flex w-full overflow-hidden",
        // Fade the edges so items appear/disappear gracefully.
        "[mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]",
        className,
      )}
    >
      <div className="animate-marquee flex shrink-0 items-center gap-3 pr-3">
        {items.map((item, i) => (
          <MarqueeChip key={`a-${item}-${i}`} label={item} />
        ))}
      </div>
      <div
        aria-hidden
        className="animate-marquee flex shrink-0 items-center gap-3 pr-3"
      >
        {items.map((item, i) => (
          <MarqueeChip key={`b-${item}-${i}`} label={item} />
        ))}
      </div>
    </div>
  );
}

function MarqueeChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground">
      <span className="size-1.5 rounded-full bg-primary/70" />
      {label}
    </span>
  );
}
