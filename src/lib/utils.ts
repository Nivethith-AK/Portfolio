import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge conditional class names and resolve Tailwind conflicts.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Smooth-scroll to an in-page section (given a "#id" href) without
 * appending a #hash to the browser's address bar.
 */
export function scrollToHash(href: string) {
  const id = href.replace(/^#/, "");
  if (!id) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}
