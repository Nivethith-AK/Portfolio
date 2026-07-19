"use client";

import { cn } from "@/lib/utils";

/**
 * An infinitely-scrolling horizontal row. Content is duplicated inside one
 * animated track so `translateX(-50%)` loops seamlessly; hovering pauses.
 */
export function Marquee({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const chips = items.map((item, i) => (
    <MarqueeChip key={`${item}-${i}`} label={item} />
  ));

  return (
    <div
      className={cn(
        "pause-on-hover group relative flex w-full overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]",
        className,
      )}
    >
      <div className="animate-marquee flex w-max items-center">
        <div className="flex shrink-0 items-center gap-3 pr-3">{chips}</div>
        <div aria-hidden className="flex shrink-0 items-center gap-3 pr-3">
          {items.map((item, i) => (
            <MarqueeChip key={`dup-${item}-${i}`} label={item} />
          ))}
        </div>
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
