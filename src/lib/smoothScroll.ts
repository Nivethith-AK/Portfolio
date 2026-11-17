import type Lenis from "lenis";

export function scrollToSection(id: string, lenis?: Lenis | null, offset = -72) {
  const cleanId = id.startsWith("#") ? id.slice(1) : id;
  if (cleanId === "top" || cleanId === "hero") {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.15 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return;
  }

  const el = document.getElementById(cleanId);
  if (!el) return;

  if (lenis) {
    lenis.scrollTo(el, { offset, duration: 1.15 });
  } else {
    const top = el.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}
