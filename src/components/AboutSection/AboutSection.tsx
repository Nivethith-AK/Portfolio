import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Star, Twitter } from "lucide-react";
import { useLenis } from "lenis/react";
import { PortfonButton, SectionEyebrow } from "../PortfonUI";
import { scrollToSection } from "../../lib/smoothScroll";
import TechStackSection from "../TechStackSection/TechStackSection";

const disciplinePills = [
  "Multi-Agent AI",
  "LangGraph & LLMs",
  "Full-Stack Next.js",
];

const clientAvatars = [
  "/projects/autozure.webp",
  "/projects/syntrix.webp",
  "/projects/dolphin-beach-villa.webp",
  "/projects/adw-trust.webp",
];

export const AboutSection = () => {
  const lenis = useLenis();
  const [selectedPill, setSelectedPill] = useState<string>("Multi-Agent AI");

  const socialLinks = [
    { icon: Github, href: "https://github.com/Nivethith-AK", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/nivethith-ak", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/Nivethith_AK", label: "X" },
    { icon: Mail, href: "mailto:nivethith.16@gmail.com", label: "Email" },
  ];

  return (
    <section id="about" className="scroll-mt-20 w-full bg-background pt-16 md:pt-24 pb-12">
      <div className="max-w-[1140px] mx-auto px-5 md:px-6">
        {/* Top Row: Eyebrow Left + Statement Right */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-14 md:mb-16"
        >
          <div className="lg:col-span-4 pt-2">
            <SectionEyebrow label="About Me" />
          </div>

          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-medium tracking-[-0.03em] leading-[1.1] text-foreground">
              I architect intelligent systems that connect autonomous AI, data pipelines, and visual clarity.
            </h2>

            <p className="text-[15.5px] md:text-[16.5px] leading-relaxed text-muted-foreground max-w-2xl">
              Computer Science undergraduate at IIT Colombo (University of Westminster) and Microsoft &amp; IBM certified AI practitioner — building AutoZure, Syntrix AI, and production digital platforms since 2022.
            </p>

            <div>
              <PortfonButton onClick={() => scrollToSection("#contact", lenis)} size="md">
                Get In Touch
              </PortfonButton>
            </div>
          </div>
        </motion.div>

        {/* Bottom 3-Card Asymmetric Grid (matching Portfon About Bottom Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Card 1: Portrait Identity Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="md:col-span-4 portfon-card p-5 flex flex-col justify-between overflow-hidden min-h-[300px]"
          >
            <div className="relative rounded-2xl overflow-hidden bg-[#1e40af]/10 aspect-[4/3.6] mb-4">
              <img
                src="/logo.jpg"
                alt="Nivethith Arasakumar"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 dark:bg-[#0e1320]/90 text-[11px] font-medium text-foreground shadow-sm">
                <MapPin className="w-3 h-3 text-[#3458ff]" />
                <span>Colombo, Sri Lanka</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <div>
                <p className="text-sm font-semibold text-foreground">Nivethith Arasakumar</p>
                <p className="text-xs text-muted-foreground">AI Solutions Architect (Aspiring)</p>
              </div>
              <div className="flex items-center gap-1.5">
                {socialLinks.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-8 h-8 rounded-full bg-[var(--surface-soft)] border border-[var(--border)] flex items-center justify-center text-muted-foreground hover:text-[#3458ff] hover:border-[#3458ff]/40 transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Card 2: Counter + Project Avatars + Gold Rating Badge (matching "120+ Client Satisfaction Score ★ 4.8") */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="md:col-span-4 portfon-card p-6 flex flex-col justify-between min-h-[300px]"
          >
            <div>
              <h4 className="text-4xl md:text-[2.6rem] font-semibold tracking-[-0.04em] text-foreground leading-none mb-2">
                10+
              </h4>
              <p className="text-sm text-muted-foreground">
                Production AI &amp; Web Platforms Delivered
              </p>
            </div>

            <div className="flex items-end justify-between gap-4 mt-8">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--surface-soft)] border border-[var(--border)]">
                <Star className="w-4 h-4 fill-[#ffc036] text-[#ffc036]" />
                <span className="text-sm font-semibold text-foreground">4.9</span>
                <span className="text-xs text-muted-foreground">Impact</span>
              </div>

              {/* Scattered Project Avatars */}
              <div className="flex -space-x-2.5">
                {clientAvatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-card shadow-sm"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 3: "Systems Thinking, Clean Execution." + Interactive Scattered Pills */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="md:col-span-4 portfon-card p-6 flex flex-col justify-between min-h-[300px] overflow-hidden relative"
          >
            <div>
              <h4 className="text-xl md:text-[1.35rem] font-medium tracking-[-0.02em] leading-snug text-foreground">
                Systems Thinking,
                <br />
                Clean Execution.
              </h4>
              <p className="text-xs text-muted-foreground mt-2">
                {selectedPill === "Multi-Agent AI" &&
                  "Autonomous DAG orchestration, LangGraph agents & SHAP explainability."}
                {selectedPill === "LangGraph & LLMs" &&
                  "Multi-LLM routing across Gemini, OpenAI, Claude & local Ollama."}
                {selectedPill === "Full-Stack Next.js" &&
                  "Type-safe React 19, FastAPI, PostgreSQL, Supabase & BullMQ queues."}
                {selectedPill === "PyTorch & ML" &&
                  "Neural networks, CUDA acceleration & end-to-end MLflow pipelines."}
              </p>
            </div>

            <div className="relative flex flex-col items-start gap-2.5 mt-6 pr-12">
              {disciplinePills.map((pill) => {
                const active = selectedPill === pill;
                return (
                  <button
                    key={pill}
                    type="button"
                    onClick={() => setSelectedPill(pill)}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all border ${
                      active
                        ? "bg-[#3458ff] text-white border-[#3458ff] shadow-sm"
                        : "bg-[var(--surface-soft)] text-foreground/80 border-[var(--border)] hover:border-[#3458ff]/40"
                    }`}
                  >
                    {pill}
                  </button>
                );
              })}

              {/* Signature Portfon Tilted Pill */}
              <button
                type="button"
                onClick={() => setSelectedPill("PyTorch & ML")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all border absolute right-2 bottom-8 -rotate-[42deg] origin-center whitespace-nowrap ${
                  selectedPill === "PyTorch & ML"
                    ? "bg-[#3458ff] text-white border-[#3458ff] shadow-sm"
                    : "bg-[var(--surface-soft)] text-foreground/80 border-[var(--border)] hover:border-[#3458ff]/40"
                }`}
              >
                PyTorch &amp; ML
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Minimalist Tech Stack Marquee */}
      <div className="mt-12 md:mt-16">
        <TechStackSection />
      </div>
    </section>
  );
};
