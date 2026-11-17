import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLenis } from "lenis/react";
import { ThemeToggle } from "../lightswind/theme-toggle";
import { PortfonButton } from "../PortfonUI";
import { scrollToSection } from "../../lib/smoothScroll";

const navItems = [
  { name: "About", href: "#about", id: "about" },
  { name: "Portfolio", href: "#projects", id: "projects" },
  { name: "Services", href: "#services", id: "services" },
  { name: "Journey", href: "#journey", id: "journey" },
  { name: "FAQ", href: "#faq", id: "faq" },
];

const trackedSections = ["hero", "about", "projects", "services", "journey", "faq", "contact"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lenis = useLenis();

  const updateScrolled = useCallback((scrollY: number) => {
    const next = scrollY > 20;
    setScrolled((prev) => (prev === next ? prev : next));
  }, []);

  // Sync navbar glass backdrop directly with Lenis scroll frames
  useLenis(
    ({ scroll }) => {
      updateScrolled(scroll);
    },
    [updateScrolled]
  );

  // Sync on mount and native scroll fallback
  useEffect(() => {
    const syncNative = () =>
      updateScrolled(window.scrollY || document.documentElement.scrollTop || 0);
    syncNative();
    window.addEventListener("scroll", syncNative, { passive: true });
    return () => window.removeEventListener("scroll", syncNative);
  }, [updateScrolled]);

  // Track active section smoothly without polling getBoundingClientRect every frame
  useEffect(() => {
    const elements = trackedSections
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const visibleRatios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibleRatios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }

        if ((window.scrollY || document.documentElement.scrollTop) < 80) {
          setActiveSection("hero");
          return;
        }

        let bestId = "";
        let bestRatio = 0;
        for (const id of trackedSections) {
          const ratio = visibleRatios.get(id) || 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }
        if (bestId) {
          setActiveSection(bestId);
        }
      },
      {
        rootMargin: "-18% 0px -55% 0px",
        threshold: [0, 0.15, 0.35, 0.6],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Auto-close drawer on Escape key or desktop breakpoint resize
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    const mql = window.matchMedia("(min-width: 1024px)");
    const onBpChange = (e: MediaQueryListEvent) => {
      if (e.matches) setIsMobileMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    mql.addEventListener("change", onBpChange);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      mql.removeEventListener("change", onBpChange);
    };
  }, [isMobileMenuOpen]);

  const handleNav = (href: string) => {
    const targetId = href.replace("#", "");
    if (trackedSections.includes(targetId)) {
      setActiveSection(targetId);
    }

    setIsMobileMenuOpen(false);
    scrollToSection(href, lenis);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[68px] flex items-center border-b transition-[background-color,border-color,box-shadow] duration-200 ${
          scrolled
            ? "glass-panel border-[var(--border)] shadow-[0_4px_24px_rgba(16,16,16,0.06)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.35)]"
            : "bg-transparent border-transparent shadow-none"
        }`}
      >
        <div className="max-w-[1140px] w-full mx-auto px-5 md:px-6 flex items-center justify-between gap-4">
          {/* Left: Brand + Inline Nav */}
          <div className="flex items-center gap-8 xl:gap-10 min-w-0">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNav("#hero");
              }}
              className="flex items-center gap-2.5 cursor-pointer group select-none shrink-0 whitespace-nowrap"
            >
              <div className="w-9 h-9 rounded-xl bg-[#3458ff] p-[2px] flex items-center justify-center shadow-sm overflow-hidden group-hover:scale-105 transition-transform">
                <img
                  src="/logo.jpg"
                  alt="Nivethith AK"
                  className="w-full h-full object-cover rounded-[10px]"
                />
              </div>
              <span className="font-semibold text-[16.5px] sm:text-[17px] tracking-[-0.03em] text-foreground">
                Nivethith AK
              </span>
            </a>

            <nav className="hidden lg:flex items-center gap-6 xl:gap-7" aria-label="Main navigation">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(item.href);
                    }}
                    className={`relative py-1 text-[14.5px] font-medium whitespace-nowrap transition-colors cursor-pointer ${
                      isActive
                        ? "text-[#3458ff]"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.span
                        layoutId="navActiveUnderline"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        className="absolute left-0 right-0 -bottom-0.5 h-[2px] rounded-full bg-[#3458ff]"
                      />
                    )}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Right: ThemeToggle + Get In Touch CTA + Mobile Drawer Trigger */}
          <div className="flex items-center gap-2.5 shrink-0">
            <ThemeToggle
              animationType="random"
              duration={480}
              className="w-11 h-11 p-0 !bg-card/90 !border-[var(--border)] !shadow-sm hover:!border-[#3458ff]/50"
            />

            <div className="hidden sm:block shrink-0">
              <PortfonButton onClick={() => handleNav("#contact")} size="md">
                Get In Touch
              </PortfonButton>
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="lg:hidden w-11 h-11 rounded-full bg-card border border-[var(--border)] flex items-center justify-center text-foreground hover:border-[#3458ff]/50 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Drawer */}
      <div
        role="dialog"
        aria-modal={isMobileMenuOpen}
        aria-hidden={!isMobileMenuOpen}
        data-lenis-prevent
        className={`fixed inset-0 z-[60] bg-background/98 backdrop-blur-xl lg:hidden flex flex-col justify-between p-6 transition-[opacity,transform,visibility] duration-200 ease-out ${
          isMobileMenuOpen
            ? "opacity-100 visible pointer-events-auto translate-y-0"
            : "opacity-0 invisible pointer-events-none -translate-y-2"
        }`}
      >
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            tabIndex={isMobileMenuOpen ? 0 : -1}
            onClick={(e) => {
              e.preventDefault();
              handleNav("#hero");
            }}
            className="flex items-center gap-2.5"
          >
            <div className="w-9 h-9 rounded-xl bg-[#3458ff] p-[2px] overflow-hidden">
              <img
                src="/logo.jpg"
                alt="Nivethith AK"
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            <span className="font-semibold text-lg tracking-tight text-foreground">
              Nivethith AK
            </span>
          </a>

          <div className="flex items-center gap-2.5">
            <ThemeToggle
              animationType="random"
              duration={480}
              tabIndex={isMobileMenuOpen ? 0 : -1}
              className="w-11 h-11 p-0 !bg-card !border-[var(--border)] !shadow-sm"
            />
            <button
              type="button"
              tabIndex={isMobileMenuOpen ? 0 : -1}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close navigation menu"
              className="w-11 h-11 rounded-full bg-card border border-[var(--border)] flex items-center justify-center text-foreground"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <nav className="flex flex-col gap-5 my-auto" aria-label="Mobile navigation">
          {[...navItems, { name: "Contact", href: "#contact", id: "contact" }].map(
            (item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(item.href);
                  }}
                  className={`text-3xl font-semibold tracking-[-0.03em] transition-colors cursor-pointer ${
                    isActive
                      ? "text-[#3458ff]"
                      : "text-foreground hover:text-[#3458ff]"
                  }`}
                >
                  {item.name}
                </a>
              );
            }
          )}
        </nav>

        <div className="flex items-center justify-between pt-6 border-t border-[var(--border)]">
          <PortfonButton onClick={() => handleNav("#contact")} size="lg" fullWidth>
            Get In Touch
          </PortfonButton>
        </div>
      </div>
    </>
  );
}
