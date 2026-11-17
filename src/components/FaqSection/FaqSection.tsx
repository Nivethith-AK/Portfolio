import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useLenis } from "lenis/react";
import { PortfonButton, SectionEyebrow } from "../PortfonUI";
import { scrollToSection } from "../../lib/smoothScroll";

const faqs = [
  {
    q: "What AI & engineering systems do you specialize in?",
    a: "I focus on end-to-end AI architectures — autonomous multi-agent workflows (LangGraph, Multi-LLM orchestration), explainable machine learning (PyTorch, SHAP), and scalable full-stack platforms using Next.js, TypeScript, FastAPI, PostgreSQL, and BullMQ.",
  },
  {
    q: "How do you take a project from idea to production?",
    a: "Every system starts with clear data flow and topology design, followed by rapid interactive prototyping, modular backend services (Supabase, Redis, Docker), and automated quality checks before cloud deployment.",
  },
  {
    q: "Are you open to internships, consulting, or full-time engineering roles?",
    a: "Yes — I am actively looking for opportunities in AI Solutions Architecture, AI/ML Engineering, Data Science, and Full-Stack Systems Engineering as well as high-impact client software builds.",
  },
  {
    q: "What stack powers platforms like AutoZure and Syntrix AI?",
    a: "AutoZure combines Next.js 14, React Flow, Drizzle ORM, PostgreSQL, Redis, and BullMQ DAG workers; Syntrix AI integrates FastAPI, LangGraph, Celery, MLflow, and SHAP explainability for automated data science.",
  },
];

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const lenis = useLenis();

  return (
    <section id="faq" className="scroll-mt-20 w-full bg-background pt-20 md:pt-28 pb-16">
      <div className="max-w-[1140px] mx-auto px-5 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Blue Glow CTA Card (matching Portfon FAQ Card) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5 rounded-[24px] p-8 sm:p-10 text-center flex flex-col items-center justify-center relative overflow-hidden min-h-[340px] border border-[var(--border)] bg-card"
          >
            {/* Electric Blue Center Ambient Mesh Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 w-[360px] h-[280px] rounded-full blur-[55px] opacity-80"
              style={{
                background:
                  "radial-gradient(circle, #3458ff 0%, #7d96ff 55%, transparent 100%)",
              }}
            />

            <div className="relative z-10 flex flex-col items-center">
              <SectionEyebrow label="FAQ Questions" light centered />

              <h2 className="mt-4 mb-7 text-2xl sm:text-[1.95rem] font-medium tracking-[-0.03em] leading-[1.14] text-white drop-shadow-sm max-w-xs">
                Got questions about working together?
              </h2>

              <PortfonButton
                onClick={() => scrollToSection("#contact", lenis)}
                variant="dark"
                size="md"
              >
                Get In Touch
              </PortfonButton>
            </div>
          </motion.div>

          {/* Right Individual Accordion Cards */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            {faqs.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={item.q}
                  className="portfon-card rounded-[18px] px-6 py-5 transition-colors hover:border-[#3458ff]/35"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="w-full flex items-center justify-between gap-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[15.5px] sm:text-base font-medium tracking-[-0.01em] text-foreground">
                      {item.q}
                    </span>
                    <span className="w-7 h-7 rounded-full flex items-center justify-center text-foreground/80 shrink-0">
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pt-3.5 text-sm leading-relaxed text-muted-foreground">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
