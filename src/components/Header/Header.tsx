import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLenis } from "lenis/react";
import { ThemeToggle } from "../lightswind/theme-toggle";
import { PortfonButton } from "../PortfonUI";
import { scrollToSection } from "../../lib/smoothScroll";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Journey", href: "#journey" },
  { name: "FAQ", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    scrollToSection(href, lenis);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 glass-panel border-b border-[var(--border)] shadow-sm"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-[1140px] mx-auto px-5 md:px-6 flex items-center justify-between gap-4">
          {/* Left: Brand + Inline Nav */}
          <div className="flex items-center gap-8 lg:gap-10">
            <a
              onClick={() => handleNav("#hero")}
              className="flex items-center gap-2.5 cursor-pointer group select-none"
            >
              <div className="w-9 h-9 rounded-xl bg-[#3458ff] p-[2px] flex items-center justify-center shadow-sm overflow-hidden group-hover:scale-105 transition-transform">
                <img
                  src="/logo.jpg"
                  alt="Nivethith AK"
                  className="w-full h-full object-cover rounded-[10px]"
                />
              </div>
              <span className="font-semibold text-[17px] tracking-[-0.03em] text-foreground">
                Nivethith AK
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  onClick={() => handleNav(item.href)}
                  className="text-[14.5px] font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Right: ThemeToggle + Get In Touch CTA */}
          <div className="flex items-center gap-2.5">
            <ThemeToggle
              animationType="random"
              duration={480}
              className="!bg-card/85 !border-[var(--border)] !shadow-sm hover:!border-[#3458ff]/50"
            />

            <div className="hidden sm:block">
              <PortfonButton onClick={() => handleNav("#contact")} size="md">
                Get In Touch
              </PortfonButton>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="md:hidden w-10 h-10 rounded-full bg-card border border-[var(--border)] flex items-center justify-center text-foreground hover:border-[#3458ff]/50 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl md:hidden flex flex-col justify-between p-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#3458ff] p-[2px] overflow-hidden">
                  <img src="/logo.jpg" alt="Nivethith AK" className="w-full h-full object-cover rounded-[10px]" />
                </div>
                <span className="font-semibold text-lg tracking-tight text-foreground">
                  Nivethith AK
                </span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close navigation menu"
                className="w-10 h-10 rounded-full bg-card border border-[var(--border)] flex items-center justify-center text-foreground"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-5 my-auto">
              {[...navItems, { name: "Contact", href: "#contact" }].map((item, idx) => (
                <motion.a
                  key={item.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * idx }}
                  onClick={() => handleNav(item.href)}
                  className="text-3xl font-semibold tracking-[-0.03em] text-foreground hover:text-[#3458ff] transition-colors cursor-pointer"
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>

            <div className="flex items-center justify-between pt-6 border-t border-[var(--border)]">
              <PortfonButton onClick={() => handleNav("#contact")} size="lg" fullWidth>
                Get In Touch
              </PortfonButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
