"use client";

import * as React from "react";

/**
 * Accessible "skip to content" link. Moves focus to the main region and
 * scrolls it into view without appending a #hash to the URL.
 */
export function SkipLink() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const main = document.getElementById("main");
    if (!main) return;
    // Make <main> focusable so screen readers land inside the content.
    main.setAttribute("tabindex", "-1");
    main.focus({ preventScroll: true });
    main.scrollIntoView({ behavior: "smooth", block: "start" });
    const cleanup = () => {
      main.removeAttribute("tabindex");
      main.removeEventListener("blur", cleanup);
    };
    main.addEventListener("blur", cleanup);
  };

  return (
    <a
      href="#main"
      onClick={handleClick}
      className="sr-only rounded-md bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100]"
    >
      Skip to content
    </a>
  );
}
