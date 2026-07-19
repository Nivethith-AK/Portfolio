"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in the viewport for nav highlighting.
 * Uses IntersectionObserver for performance (no scroll listeners).
 */
export function useActiveSection(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        // Bias the "active" zone toward the upper third of the viewport.
        rootMargin: "-40% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 1],
      },
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
