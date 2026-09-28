import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Rocket, Calendar, GraduationCap, CheckCircle2, Cpu, BarChart3, Layers, Database, Terminal } from "lucide-react";
import { skillCategories } from "../../data/skills";

const stats = [
  { icon: <Award className="w-5 h-5" />, label: "Certifications", value: "3" },
  { icon: <Rocket className="w-5 h-5" />, label: "Production Deployments", value: "10+" },
  { icon: <Calendar className="w-5 h-5" />, label: "Building Since", value: "2022" },
  { icon: <GraduationCap className="w-5 h-5" />, label: "Expected Graduation", value: "2028" },
];

const categoryIcons: Record<string, React.ReactNode> = {
  "ai-ml": <Cpu className="w-4 h-4" />,
  "data-science": <BarChart3 className="w-4 h-4" />,
  "software-engineering": <Layers className="w-4 h-4" />,
  "data-backend": <Database className="w-4 h-4" />,
  "devops-infra": <Terminal className="w-4 h-4" />,
};

export const AboutSection = () => {
  const [selectedCatId, setSelectedCatId] = useState(skillCategories[0].id);

  const activeCategory = skillCategories.find((c) => c.id === selectedCatId) || skillCategories[0];

  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24">
      {/* Top Narrative & Stats */}
      <motion.div
        className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start justify-between mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            <span>Engineering Identity</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Architecting <span className="text-gradient-primary">Intelligent Systems</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            I am a Computer Science undergraduate, AI &amp; Data Science enthusiast, and aspiring AI Solutions Architect. I bridge foundational machine learning, multi-agent LLM systems, and high-performance data architectures with resilient, production-ready user interfaces.
          </p>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            From deploying autonomous data-science pipelines with SHAP explainability (Syntrix AI) to crafting 3D immersive web environments with Three.js (Dolphin Beach Villa) and accessible enterprise platforms (ADW Trust, Table Linens), I focus on the entire system lifecycle — ensuring every algorithm translates into tangible real-world impact.
          </p>
        </div>

        {/* 2x2 Stats Grid */}
        <div className="w-full lg:w-auto lg:min-w-[420px] grid grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="glass-panel p-5 md:p-6 rounded-2xl border border-foreground/10 hover:border-primary/50 transition-colors group relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="absolute -right-6 -top-6 w-20 h-20 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
              <div className="text-primary mb-3 p-2.5 bg-primary/10 w-max rounded-xl">
                {stat.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-1">{stat.value}</h3>
              <p className="text-xs md:text-sm font-medium text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Evidence-Backed Technical Competencies Matrix */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="glass-panel rounded-3xl p-6 md:p-10 border border-foreground/10 relative overflow-hidden shadow-xl"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
              Technical Competencies &amp; Verification
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Evidence-backed skill architecture proven across real-world client platforms and production systems.
            </p>
          </div>
        </div>

        {/* Category Selection Tabs (Animate UI sliding pill pattern) */}
        <div className="flex flex-wrap gap-2 mb-8 p-1.5 bg-foreground/[0.03] dark:bg-foreground/[0.05] rounded-2xl border border-foreground/10">
          {skillCategories.map((category) => {
            const isSelected = selectedCatId === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCatId(category.id)}
                className={`relative px-4 py-2.5 rounded-xl text-xs md:text-sm font-medium transition-colors flex items-center gap-2 cursor-pointer select-none ${
                  isSelected
                    ? "text-primary-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-primary rounded-xl shadow-md"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{categoryIcons[category.id]}</span>
                <span className="relative z-10">{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Skill Matrix */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Category Evidence Callout */}
            <div className="p-4 rounded-xl bg-primary/[0.06] border border-primary/20 flex flex-col sm:flex-row sm:items-center gap-2 text-xs md:text-sm">
              <span className="font-semibold text-primary uppercase tracking-wider text-[11px] shrink-0">
                Production Evidence:
              </span>
              <span className="text-muted-foreground font-medium">
                {activeCategory.evidence}
              </span>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {activeCategory.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl border border-foreground/10 bg-background/60 hover:border-primary/40 transition-all flex flex-col justify-between gap-3 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      {skill.name}
                    </span>
                    <span className="text-xs font-mono font-bold text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  
                  {/* Subtle Level Bar */}
                  <div className="w-full h-1.5 bg-foreground/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, delay: idx * 0.05, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-violet-500 to-sky-400 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
