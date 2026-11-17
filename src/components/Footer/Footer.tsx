import { Home, Briefcase, User, Mail, Github, Linkedin, Twitter, ArrowUp } from "lucide-react";
import { useLenis } from "lenis/react";
import { PortfonButton } from "../PortfonUI";
import { scrollToSection } from "../../lib/smoothScroll";

const quickTiles = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "Services", href: "#services", icon: Briefcase },
  { name: "About", href: "#about", icon: User },
  { name: "Contact", href: "#contact", icon: Mail },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/Nivethith-AK", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/nivethith-ak", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/Nivethith_AK", label: "Twitter" },
  { icon: Mail, href: "mailto:nivethith.16@gmail.com", label: "Email" },
];

export const Footer = () => {
  const lenis = useLenis();

  return (
    <footer className="relative w-full overflow-hidden bg-[var(--navy-deep)] text-white pt-20 pb-12">
      {/* Top Soft Blend Seam from Page Background into Royal Navy */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-background via-background/60 to-transparent z-0"
      />

      {/* Ambient Cobalt Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[10%] w-[520px] h-[320px] rounded-full blur-[120px] bg-[#3458ff]/35"
      />

      <div className="max-w-[1140px] mx-auto px-5 md:px-6 relative z-10">
        {/* Heading + Actions Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-[2.1rem] sm:text-[2.75rem] md:text-[3.1rem] font-medium tracking-[-0.04em] leading-[1.06] text-white max-w-md mb-6">
              Ready To Start Something Great?
            </h2>

            <PortfonButton
              onClick={() => scrollToSection("#contact", lenis)}
              variant="light"
              size="md"
            >
              Get In Touch
            </PortfonButton>
          </div>

          <button
            type="button"
            onClick={() => scrollToSection("top", lenis)}
            className="self-start md:self-auto px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-white inline-flex items-center gap-2 hover:bg-white hover:text-[#101010] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Portfon Glass Navigation Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 max-w-2xl mb-14">
          {quickTiles.map((tile) => {
            const Icon = tile.icon;
            return (
              <a
                key={tile.name}
                href={tile.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(tile.href, lenis);
                }}
                className="group rounded-2xl p-4 sm:p-5 bg-white/[0.04] border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all cursor-pointer flex flex-col justify-between min-h-[104px]"
              >
                <span className="w-7 h-7 rounded-lg bg-white text-[#03236d] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Icon className="w-3.5 h-3.5" />
                </span>
                <span className="text-lg font-medium tracking-[-0.02em] text-white mt-5">
                  {tile.name}
                </span>
              </a>
            );
          })}
        </div>

        {/* Bottom Divider & Legal + Social Circles */}
        <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs sm:text-sm text-white/75 text-center sm:text-left">
            © {new Date().getFullYear()} Nivethith Arasakumar · AI Solutions Architect &amp; Full-Stack Engineer
          </p>

          <div className="flex items-center gap-2.5">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white text-[#101010] flex items-center justify-center hover:scale-110 hover:bg-[#3458ff] hover:text-white transition-all shadow-sm"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
