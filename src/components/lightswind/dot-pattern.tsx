import React, { useId } from "react";
import { cn } from "../lib/utils";

export interface DotPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  cx?: number;
  cy?: number;
  cr?: number;
  className?: string;
  glow?: boolean;
}

export function DotPattern({
  width = 24,
  height = 24,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  glow = true,
  ...props
}: DotPatternProps) {
  const id = useId();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <svg
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 h-full w-full fill-foreground/35 dark:fill-white/35 [mask-image:radial-gradient(ellipse_at_center,white_55%,transparent_90%)]",
          className
        )}
        {...props}
      >
        <defs>
          <pattern
            id={id}
            width={width}
            height={height}
            patternUnits="userSpaceOnUse"
            patternTransform={`translate(${x} ${y})`}
          >
            <circle cx={cx} cy={cy} r={cr} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      </svg>
      {glow && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-primary/25 dark:bg-primary/35 blur-[120px] rounded-full pointer-events-none" />
      )}
    </div>
  );
}

export default DotPattern;
