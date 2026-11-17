import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";
import { useLenis } from "lenis/react";
import { careerEvents } from "../../data/career";
import { skillCategories } from "../../data/skills";
import { profile } from "../../data/profile";
import { PortfonButton, PortfonSparkIcon, SectionEyebrow } from "../PortfonUI";
import { scrollToSection } from "../../lib/smoothScroll";

export const CareerTimeline = () => {
  const lenis = useLenis();
  const [selectedCatId, setSelectedCatId] = useState(skillCategories[0].id);

  const activeCategory =
    skillCategories.find((c) => c.id === selectedCatId) || skillCategories[0];

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
    <section id="journey" className="scroll-mt-20 relative py-20 md:py-24">
      <div className="max-w-[1140px] mx-auto px-5 md:px-6 relative z-10">
        {/* Centered Header (matching Portfon Pricing Plans header) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <SectionEyebrow label="Background & Credentials" light centered />
          <h2 className="mt-3 text-[2.25rem] sm:text-[2.75rem] md:text-[3.1rem] font-medium tracking-[-0.04em] leading-[1.08] text-white">
            Academic foundation &amp; engineering trajectory
          </h2>
        </motion.div>

        {/* Portfon 2-Column Featured Comparison Layout (Deep Glass Left Card + Elevated Solid White Right Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {/* Left Card: Navy Translucent Glass Card — Academic & Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-[24px] p-4 sm:p-5 bg-white/[0.08] border border-white/15 backdrop-blur-md flex flex-col justify-between"
          >
            <div>
              {/* Inner Highlight Box */}
              <div className="rounded-[18px] p-6 bg-white/[0.08] border border-white/10 mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-white/85">
                    Education &amp; Certifications
                  </span>
                  <PortfonSparkIcon className="w-4 h-4" light />
                </div>

                <div className="flex items-baseline gap-2 mb-3">
                  <h3 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-white">
                    BSc (Hons)
                  </h3>
                  <span className="text-sm text-white/75">Computer Science</span>
                </div>

                <p className="text-sm text-white/80 leading-relaxed">
                  University of Westminster (UK) delivered at IIT Colombo — specialized in AI, distributed architectures &amp; applied machine learning.
                </p>
              </div>

              <p className="px-2 text-xs font-semibold uppercase tracking-wider text-white/75 mb-4">
                Verified Credentials:
              </p>

              <ul className="px-2 space-y-3 text-sm text-white/90 mb-8">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5b7cff] mt-2 shrink-0" />
                  <span>BSc (Hons) Computer Science · Reading (Expected 2028)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5b7cff] mt-2 shrink-0" />
                  <span>Microsoft AI &amp; ML Engineering Specialization (Certified 2025)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5b7cff] mt-2 shrink-0" />
                  <span>IBM Data Science Professional Certificate (Certified 2025)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5b7cff] mt-2 shrink-0" />
                  <span>IBM Applied Data Science Specialization &amp; SQL Pipelines</span>
                </li>
              </ul>
            </div>

            <div className="px-2 pb-1">
              <PortfonButton
                onClick={handleDownloadResume}
                variant="glass"
                size="lg"
                icon={<Download className="w-4 h-4" />}
                fullWidth
              >
                Download Resume
              </PortfonButton>
            </div>
          </motion.div>

          {/* Right Card: Solid White Card — Career Milestones & Focus */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-[24px] p-4 sm:p-5 bg-card text-card-foreground border border-[var(--border)] shadow-xl flex flex-col justify-between"
          >
            <div>
              {/* Soft Highlight Header Box */}
              <div className="rounded-[18px] p-6 bg-[var(--surface-soft)] border border-[var(--border)] mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-muted-foreground">
                    Career Trajectory
                  </span>
                  <PortfonSparkIcon className="w-4 h-4" />
                </div>

                <div className="flex items-baseline gap-2 mb-3">
                  <h3 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-foreground">
                    2022–Now
                  </h3>
                  <span className="text-sm text-muted-foreground">/ Building</span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  From foundational systems programming to shipping autonomous AI platforms and client production software.
                </p>
              </div>

              <p className="px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Key Milestones:
              </p>

              <ul className="px-2 space-y-3 text-sm text-foreground/90 mb-8">
                {careerEvents.map((ev) => (
                  <li key={ev.year + ev.title} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3458ff] mt-2 shrink-0" />
                    <span>
                      <strong className="font-semibold text-foreground">{ev.year}:</strong>{" "}
                      {ev.title} — <span className="text-muted-foreground">{ev.subtitle}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="px-2 pb-1">
              <PortfonButton
                onClick={() => scrollToSection("#contact", lenis)}
                variant="dark"
                size="lg"
                fullWidth
              >
                Work With Me
              </PortfonButton>
            </div>
          </motion.div>
        </div>

        {/* Clean Interactive Skills Matrix Panel */}
        <div
          id="skills"
          className="rounded-[24px] p-6 sm:p-8 bg-white/[0.08] border border-white/15 backdrop-blur-md text-white"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-medium tracking-[-0.02em]">
                Verified Technical Stack
              </h3>
              <p className="text-sm text-white/75 mt-1">
                {activeCategory.evidence}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {skillCategories.map((cat) => {
                const active = cat.id === selectedCatId;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCatId(cat.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                      active
                        ? "bg-white text-[#101010] shadow-sm"
                        : "bg-white/10 text-white/80 hover:bg-white/20"
                    }`}
                  >
                    {cat.title}
                  </button>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5"
            >
              {activeCategory.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="rounded-2xl p-4 bg-white/[0.08] border border-white/12 flex flex-col justify-between gap-2.5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-medium text-white">
                      {skill.name}
                    </span>
                    <span className="text-xs font-medium text-white/75">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/15 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#5b7cff] to-white"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
