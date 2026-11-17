import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionEyebrow } from "../PortfonUI";

const testimonials = [
  {
    name: "Dolphin Beach Villa",
    role: "Luxury Beachfront Sanctuary · Sri Lanka",
    content:
      "Nivethith elevated our resort's digital presence with a stunning 3D interactive web sanctuary. The smooth 60fps animations, Three.js visual environment, and bespoke booking flows captured our luxury identity effortlessly.",
    image: "/projects/dolphin-beach-villa.webp",
  },
  {
    name: "ADW Trust Board",
    role: "Humanitarian Relief Organization",
    content:
      "ADW Trust needed a transparent, highly accessible humanitarian platform to connect donors with charitable missions across Sri Lanka. Nivethith delivered an impactful, responsive experience our community relies on.",
    image: "/projects/adw-trust.webp",
  },
  {
    name: "Table Linens Executive Team",
    role: "Hospitality Linens Manufacturer",
    content:
      "From custom embroidery inquiry workflows to the high-performance Supabase catalog, Nivethith engineered an exquisite digital storefront tailored to international luxury hospitality clients.",
    image: "/projects/tablelinens.webp",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () =>
    setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () =>
    setActiveIndex((i) => (i + 1) % testimonials.length);

  const current = testimonials[activeIndex];

  return (
    <section id="testimonials" className="scroll-mt-20 relative pt-14 pb-24 md:pb-32">
      <div className="max-w-[1140px] mx-auto px-5 md:px-6 relative z-10">
        {/* Top Row: Left-Aligned Heading + Prev/Next Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <SectionEyebrow label="Client Feedback" light />
            <h2 className="mt-3 text-[2.25rem] sm:text-[2.75rem] md:text-[3rem] font-medium tracking-[-0.04em] leading-[1.08] text-white max-w-lg">
              Trusted by ambitious teams worldwide
            </h2>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full bg-white/15 border border-white/25 text-white flex items-center justify-center hover:bg-white hover:text-[#101010] transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full bg-white/15 border border-white/25 text-white flex items-center justify-center hover:bg-white hover:text-[#101010] transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Portfon Clean White Customer Story Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="rounded-[28px] bg-card text-card-foreground border border-[var(--border)] p-6 sm:p-8 md:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#101010] dark:bg-white text-white dark:text-[#101010] text-xs font-medium">
                Customer Stories · 0{activeIndex + 1} / 0{testimonials.length}
              </span>

              <p className="text-lg sm:text-xl leading-relaxed text-foreground font-normal">
                “{current.content}”
              </p>

              <div className="pt-2">
                <p className="text-base font-semibold text-foreground">
                  {current.name}
                </p>
                <p className="text-sm text-muted-foreground">{current.role}</p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-[var(--border)] aspect-[16/10] bg-[var(--surface-soft)]">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TestimonialsSection;
