import * as React from "react";

import { cn } from "@/lib/utils";
import { Container } from "@/components/shared/container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  /** Render the inner Container automatically. Defaults to true. */
  container?: boolean;
}

/**
 * A semantic, vertically-rhythmic page section with an anchor id for scroll-spy.
 */
export function Section({
  id,
  className,
  children,
  container = true,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 py-24 sm:py-28 lg:py-32", className)}
      {...props}
    >
      {container ? <Container>{children}</Container> : children}
    </section>
  );
}
