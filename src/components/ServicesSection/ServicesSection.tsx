import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { PortfonButton, SectionEyebrow } from "../PortfonUI";
import { scrollToSection } from "../../lib/smoothScroll";

const aiChips = [
  { label: "LangGraph Agents", rotate: "rotate-6 translate-y-1" },
  { label: "PyTorch", rotate: "-rotate-6" },
  { label: "SHAP Explainability", rotate: "rotate-2" },
  { label: "CUDA", rotate: "-rotate-3" },
  { label: "Multi-LLM Routing", rotate: "rotate-3" },
  { label: "MLflow", rotate: "-rotate-6" },
  { label: "RAG Pipelines", rotate: "rotate-1" },
];

const orbitIcons = [
  {
    name: "Python",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    pos: "left-[8%] bottom-[22%]",
  },
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    pos: "left-[24%] bottom-[48%]",
  },
  {
    name: "Next.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    pos: "left-1/2 -translate-x-1/2 bottom-[58%]",
    invert: true,
  },
  {
    name: "Docker",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    pos: "right-[24%] bottom-[48%]",
  },
  {
    name: "PostgreSQL",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    pos: "right-[8%] bottom-[22%]",
  },
];

export const ServicesSection = () => {
  const lenis = useLenis();

  return (
    <section id="services" className="scroll-mt-20 relative pt-24 md:pt-28 pb-16">
      <div className="max-w-[1140px] mx-auto px-5 md:px-6 relative z-10">
        {/* Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <SectionEyebrow label="Core Services" light centered />
          <h2 className="mt-3 text-[2.25rem] sm:text-[2.75rem] md:text-[3.1rem] font-medium tracking-[-0.04em] leading-[1.08] text-white">
            Systems Built For Scale &amp; Intelligence
          </h2>
        </motion.div>

        {/* Outer Glass Container framing the 3-column Portfon Bento Grid */}
        <div className="rounded-[28px] p-4 sm:p-5 bg-white/[0.06] border border-white/10 backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Column 1 */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              {/* Top Gradient Card: AI & Multi-Agent */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-[20px] p-6 flex flex-col justify-between min-h-[290px] overflow-hidden relative"
                style={{
                  background:
                    "linear-gradient(155deg, #4b6bff 0%, #98abff 58%, #e2e7fb 100%)",
                }}
              >
                <div>
                  <h3 className="text-2xl font-medium tracking-[-0.03em] text-white mb-2">
                    AI &amp; Multi-Agent
                  </h3>
                  <p className="text-sm text-white/90 leading-relaxed">
                    Autonomous LLM orchestration, DAG workflows &amp; explainable ML systems.
                  </p>
                </div>

                {/* Scattered White Capability Pills */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {aiChips.map((chip) => (
                    <span
                      key={chip.label}
                      className={`px-3 py-1.5 rounded-full bg-white/95 text-[#101010] text-xs font-medium shadow-sm ${chip.rotate}`}
                    >
                      {chip.label}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Bottom Gradient Card: Data & Backend */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="rounded-[20px] p-6 flex flex-col justify-between min-h-[260px] overflow-hidden"
                style={{
                  background:
                    "linear-gradient(155deg, #4d6eff 0%, #9cb0ff 56%, #e4e8fc 100%)",
                }}
              >
                <div>
                  <h3 className="text-2xl font-medium tracking-[-0.03em] text-white mb-2">
                    Data &amp; Backend
                  </h3>
                  <p className="text-sm text-white/90 leading-relaxed">
                    High-throughput APIs, distributed BullMQ queues &amp; Postgres architectures.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2.5 mt-6">
                  {[
                    { title: "FastAPI", sub: "Async" },
                    { title: "Supabase", sub: "Postgres" },
                    { title: "BullMQ", sub: "Redis" },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl bg-white/95 p-3 shadow-sm border border-black/5"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#3458ff] mb-2" />
                      <p className="text-xs font-semibold text-[#101010]">{item.title}</p>
                      <p className="text-[10px] text-[#474747]">{item.sub}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Column 2 */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              {/* Top Surface Card: Full-Stack Engineering */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-[20px] p-6 bg-card text-card-foreground border border-[var(--border)] flex flex-col justify-between min-h-[260px] overflow-hidden"
              >
                <div>
                  <h3 className="text-2xl font-medium tracking-[-0.03em] text-foreground mb-2">
                    Full-Stack &amp; UI Systems
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    React 19, Next.js, TypeScript &amp; interactive 3D motion experiences.
                  </p>
                </div>

                <div className="mt-5 rounded-xl overflow-hidden border border-[var(--border)] aspect-[16/8.5] bg-[var(--surface-soft)]">
                  <img
                    src="/projects/autozure.webp"
                    alt="Full-Stack Workflow Engine"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </motion.div>

              {/* Bottom Surface Card: Development / Orbital Tech Ring (matching Portfon Development Bento) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.14 }}
                className="rounded-[20px] p-6 bg-card text-card-foreground border border-[var(--border)] flex flex-col justify-between min-h-[290px] overflow-hidden relative"
              >
                <div className="relative z-10">
                  <h3 className="text-2xl font-medium tracking-[-0.03em] text-foreground mb-2">
                    Cloud &amp; MLOps
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Dockerized deployments, Redis caching &amp; reliable CI pipelines.
                  </p>
                </div>

                {/* Concentric Blue Orbital Rings + Circular Tech Icons */}
                <div className="relative h-36 w-full mt-4 overflow-hidden">
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-24 w-64 h-64 rounded-full bg-[#3458ff]/12" />
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-20 w-44 h-44 rounded-full bg-[#3458ff]/18" />
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-16 w-28 h-28 rounded-full bg-[#3458ff]/25" />

                  {orbitIcons.map((ico) => (
                    <div
                      key={ico.name}
                      title={ico.name}
                      className={`absolute ${ico.pos} w-10 h-10 rounded-full bg-[#101010] border border-white/20 shadow-md flex items-center justify-center p-2`}
                    >
                      <img
                        src={ico.src}
                        alt={ico.name}
                        className={`w-full h-full object-contain ${ico.invert ? "invert" : ""}`}
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Column 3: Tall Impact CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="lg:col-span-4 rounded-[20px] bg-card text-card-foreground border border-[var(--border)] p-6 flex flex-col justify-between min-h-[480px] overflow-hidden relative"
            >
              {/* Atmospheric Blue Aura Visual Header */}
              <div className="relative h-64 rounded-2xl overflow-hidden bg-[#f1f4ff] dark:bg-[#0e1734] flex items-center justify-center mb-6">
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-52 h-52 rounded-full blur-[46px] opacity-85"
                    style={{
                      background:
                        "radial-gradient(circle, #3458ff 0%, #8aa2ff 60%, transparent 100%)",
                    }}
                  />
                </div>
                <div className="relative z-10 text-center px-6">
                  <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-[#141c33]/90 text-[#101010] dark:text-white text-xs font-medium shadow-sm mb-3">
                    End-to-End Architecture
                  </span>
                  <p className="text-lg font-semibold tracking-[-0.02em] text-[#101010] dark:text-white">
                    Prototype to Production
                  </p>
                </div>
              </div>

              {/* Bottom Divider + Content + CTA */}
              <div className="pt-4 border-t border-[var(--border)] space-y-4">
                <span className="inline-block px-3.5 py-1 rounded-full bg-[var(--surface-soft)] border border-[var(--border)] text-xs font-medium text-muted-foreground">
                  Microsoft &amp; IBM Certified
                </span>

                <div>
                  <h3 className="text-2xl font-medium tracking-[-0.03em] text-foreground mb-2">
                    Let’s Create Impact
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Building resilient AI systems, data engines, and production web products.
                  </p>
                </div>

                <PortfonButton onClick={() => scrollToSection("#contact", lenis)} size="md">
                  Start A Project
                </PortfonButton>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
