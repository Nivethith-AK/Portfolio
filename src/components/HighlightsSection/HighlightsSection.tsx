import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionEyebrow } from "../PortfonUI";

const highlights = [
  {
    title: "AutoZure DAG Engine",
    tag: "Featured",
    image: "/projects/autozure.webp",
    href: "https://github.com/Nivethith-AK/autozure",
  },
  {
    title: "Syntrix AI Platform",
    tag: "Production AI",
    image: "/projects/syntrix.webp",
    href: "https://syntrixai-blue.vercel.app",
  },
  {
    title: "Cooki UI Registry",
    tag: "Open Source",
    image: "/projects/cooki-ui.webp",
    href: "https://cooki-ui.vercel.app",
  },
];

export const HighlightsSection = () => {
  return (
    <section id="highlights" className="scroll-mt-20 w-full bg-background pt-14 pb-20">
      <div className="max-w-[1140px] mx-auto px-5 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <SectionEyebrow label="Featured Spotlight" centered />
          <h2 className="mt-3 text-[2.15rem] sm:text-[2.65rem] md:text-[3rem] font-medium tracking-[-0.04em] leading-[1.08] text-foreground">
            Where engineering meets intelligence
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {highlights.map((item, idx) => (
            <motion.a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group portfon-card p-3.5 rounded-[22px] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg block"
            >
              <div className="relative rounded-[16px] overflow-hidden aspect-[16/11] bg-[var(--surface-soft)] mb-3.5">
                <img
                  src={item.image}
                  alt={item.title}
                  decoding="async"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/70 text-white text-[11px] font-medium backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1">
                  View <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>

              <div className="flex items-center justify-between gap-2 px-1.5 pb-1">
                <h4 className="text-[15px] font-medium tracking-[-0.01em] text-foreground">
                  {item.title}
                </h4>
                <span className="px-3 py-1 rounded-full bg-[var(--surface-soft)] border border-[var(--border)] text-[11px] font-medium text-muted-foreground shrink-0">
                  {item.tag}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
