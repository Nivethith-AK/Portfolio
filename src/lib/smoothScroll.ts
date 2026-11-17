import type Lenis from "lenis";

export function scrollToSection(id: string, lenis?: Lenis | null, offset = -84) {
  const cleanId = id.startsWith("#") ? id.slice(1) : id;

  if (lenis) {
    if (lenis.isStopped) {
      lenis.start();
    }
    lenis.resize();

    if (cleanId === "top" || cleanId === "hero") {
      lenis.scrollTo(0, { duration: 1.05, force: true });
      return;
    }

    const el = document.getElementById(cleanId);
    if (!el) return;
    lenis.scrollTo(el, { offset, duration: 1.05, force: true });
    return;
  }

  if (cleanId === "top" || cleanId === "hero") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const el = document.getElementById(cleanId);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ top, behavior: "smooth" });
}
