import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useLenis } from "lenis/react";
import { profile } from "../../data/profile";
import { PortfonButton } from "../PortfonUI";
import { scrollToSection } from "../../lib/smoothScroll";

export const HeroSection = () => {
  const lenis = useLenis();

  const handleDownloadResume = async () => {
    try {
      const response = await fetch(profile.resumeUrl);
      if (!response.ok) throw new Error("Fetch failed");
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "Nivethith_Arasakumar_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch {
      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.download = "Nivethith_Arasakumar_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-[var(--hero-bg)] pt-28 md:pt-32 pb-12 md:pb-16 min-h-[820px] flex flex-col justify-between transition-colors duration-300"
    >
      {/* Top atmospheric backdrop & Giant Background Typography */}
      <div className="relative max-w-[1140px] w-full mx-auto px-5 md:px-6 flex-1 flex flex-col items-center justify-end">
        {/* Giant Background Wordmark behind Arch */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
          className="pointer-events-none select-none w-full text-center absolute top-4 md:top-8 left-0 right-0 z-0 overflow-hidden"
        >
          <span
            className="block font-extrabold uppercase tracking-[-0.04em] leading-none text-[clamp(4.25rem,14.5vw,11.5rem)] bg-gradient-to-b from-white/80 via-white/30 to-transparent dark:from-white/15 dark:via-white/5 dark:to-transparent bg-clip-text text-transparent"
          >
            ARCHITECT
          </span>
        </motion.div>

        {/* Centered Royal-Blue Arch + Portrait + Floating Discipline Pills */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 mt-10 md:mt-14 flex items-end justify-center w-full"
        >
          {/* Floating Angled Tag Left */}
          <motion.div
            initial={{ opacity: 0, x: -20, rotate: -22 }}
            animate={{ opacity: 1, x: 0, rotate: -18 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="hidden sm:inline-flex items-center px-4 py-1.5 rounded-full bg-white/95 dark:bg-[#1a2033]/95 text-[#101010] dark:text-white text-xs font-medium shadow-md border border-black/5 dark:border-white/10 absolute left-[8%] md:left-[22%] top-[36%] z-20"
          >
            AI Solutions
          </motion.div>

          {/* Floating Angled Tag Right */}
          <motion.div
            initial={{ opacity: 0, x: 20, rotate: 20 }}
            animate={{ opacity: 1, x: 0, rotate: 15 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden sm:inline-flex items-center px-4 py-1.5 rounded-full bg-white/95 dark:bg-[#1a2033]/95 text-[#101010] dark:text-white text-xs font-medium shadow-md border border-black/5 dark:border-white/10 absolute right-[8%] md:right-[22%] top-[28%] z-20"
          >
            Full-Stack &amp; ML
          </motion.div>

          {/* Arch Backdrop */}
          <div className="relative w-[280px] sm:w-[340px] md:w-[390px] h-[350px] sm:h-[410px] md:h-[450px] rounded-t-full overflow-hidden shadow-[0_-20px_80px_rgba(52,88,255,0.22)]">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, #3458ff 0%, #6f89ff 58%, rgba(233,236,243,0) 100%)",
              }}
            />

            {/* Portrait Avatar smoothly feathered into cobalt arch */}
            <div className="relative w-full h-full flex items-end justify-center pt-10 px-4">
              <div
                className="w-[245px] sm:w-[285px] md:w-[320px] h-[290px] sm:h-[330px] md:h-[365px] rounded-t-full overflow-hidden"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(ellipse 78% 82% at 50% 45%, rgba(0,0,0,1) 48%, rgba(0,0,0,0.85) 68%, rgba(0,0,0,0) 96%)",
                  maskImage:
                    "radial-gradient(ellipse 78% 82% at 50% 45%, rgba(0,0,0,1) 48%, rgba(0,0,0,0.85) 68%, rgba(0,0,0,0) 96%)",
                }}
              >
                <img
                  src="/logo.jpg"
                  alt="Nivethith Arasakumar"
                  className="w-full h-full object-cover object-center scale-[1.04]"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Editorial Lockup Row (Title Left + Glass Counters Right) */}
        <div className="relative z-20 w-full -mt-14 md:-mt-20 flex flex-col md:flex-row md:items-end justify-between gap-8 pt-6">
          {/* Left Identity + Headline + Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 mb-3 text-sm font-medium text-foreground/80">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Hey, I’m {profile.firstName}</span>
            </div>

            <h1 className="text-[2.35rem] sm:text-[3.25rem] md:text-[4.15rem] font-semibold tracking-[-0.04em] leading-[1.05] text-foreground mb-6">
              AI Solutions, Systems &amp; Full-Stack Design
            </h1>

            <div className="flex flex-wrap items-center gap-3">
              <PortfonButton onClick={() => scrollToSection("#projects", lenis)} size="md">
                Explore Work
              </PortfonButton>

              <button
                type="button"
                onClick={handleDownloadResume}
                className="h-11 px-5 rounded-full bg-white/85 dark:bg-white/10 backdrop-blur-md border border-[var(--border)] text-foreground text-[14px] font-medium inline-flex items-center gap-2 hover:bg-white dark:hover:bg-white/15 hover:-translate-y-0.5 transition-all shadow-sm"
              >
                <Download className="w-4 h-4 text-[#3458ff]" />
                <span>Resume</span>
              </button>
            </div>
          </motion.div>

          {/* Right Translucent Metric Counters (matching Portfon Counter Wrapper) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row md:flex-col items-stretch sm:items-center md:items-end gap-3"
          >
            <div className="glass-panel rounded-2xl px-5 py-3.5 shadow-sm flex items-center justify-between gap-6 min-w-[240px]">
              <span className="text-xs font-medium text-muted-foreground leading-tight">
                Production Platforms
                <br />
                Deployed Live
              </span>
              <span className="text-2xl font-semibold tracking-[-0.03em] text-foreground">
                10+
              </span>
            </div>

            <div className="glass-panel rounded-2xl px-5 py-3.5 shadow-sm flex items-center justify-between gap-6 min-w-[240px]">
              <span className="text-xs font-medium text-muted-foreground leading-tight">
                Microsoft &amp; IBM
                <br />
                Verified Credentials
              </span>
              <span className="text-2xl font-semibold tracking-[-0.03em] text-foreground">
                4+
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade Seam Overlay into #e9ecf3 / #090c14 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-background via-background/60 to-transparent z-10"
      />
    </section>
  );
};
