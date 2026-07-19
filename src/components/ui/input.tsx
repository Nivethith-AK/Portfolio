import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-md border border-input bg-background px-3.5 py-2 text-sm text-foreground shadow-sm transition-colors",
        "placeholder:text-muted-foreground/70",
        "focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-[invalid=true]:border-red-500 aria-[invalid=true]:focus-visible:ring-red-500/30",
        className,
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
