import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Centers content and applies consistent horizontal padding across breakpoints,
 * with a max width that stays readable on ultra-wide displays.
 */
export function Container({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
