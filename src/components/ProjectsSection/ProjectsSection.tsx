import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Sparkles } from "lucide-react";
import { projects, type Project } from "../../data/projects";

type CategoryFilter = "All" | "AI & ML" | "Client Work" | "3D & Interactive" | "Web Systems";

const categories: CategoryFilter[] = [
  "All",
  "AI & ML",
  "Client Work",
  "3D & Interactive",
  "Web Systems",
];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-6 py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
      >
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engineered Systems</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-3">
            Selected <span className="text-gradient-primary">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base md:text-lg">
            A portfolio of production AI platforms, client applications, and 3D interactive web experiences built with modern architecture.
          </p>
        </div>

        {/* Category Filter Tabs with Sliding Active Pill (Animate UI pattern) */}
        <div className="flex flex-wrap gap-1.5 p-1.5 bg-foreground/[0.04] dark:bg-foreground/[0.06] rounded-2xl border border-foreground/10 self-start md:self-auto">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-colors cursor-pointer select-none ${
                  isActive
                    ? "text-primary-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-primary rounded-xl shadow-md"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Bento Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project: Project, i: number) => {
            const primaryLink = project.demoUrl || project.githubUrl || "#";
            const gridSpan = activeCategory === "All" 
              ? (project.gridClass || "md:col-span-6 h-[400px]")
              : "md:col-span-6 h-[400px]";

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`group relative overflow-hidden rounded-[2rem] block shadow-xl border border-foreground/10 bg-neutral-950 ${gridSpan}`}
              >
                {/* Background Image Container */}
                <div className="absolute inset-0 bg-neutral-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-75 group-hover:opacity-90 transform-gpu"
                  />
                  {/* Subtle Dark Gradient Overlay for Maximum Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20 pointer-events-none" />
                </div>

                {/* Top Badges */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-20 pointer-events-none">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-black/60 backdrop-blur-md border border-white/15 text-white/90 shadow-sm">
                    {project.badge || project.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-black/50 backdrop-blur-md border border-white/10 text-white/70">
                    {project.year}
                  </span>
                </div>

                {/* Bottom Content Area */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-20">
                  <div className="flex items-end justify-between gap-4">
                    <div className="max-w-xl">
                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-3 opacity-90 group-hover:opacity-100 transition-opacity">
                        {project.techStack.slice(0, 4).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-0.5 rounded-md text-[10px] md:text-[11px] font-mono bg-white/10 backdrop-blur-md border border-white/15 text-white/90"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/10 backdrop-blur-md border border-white/10 text-white/60">
                            +{project.techStack.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Project Title */}
                      <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-tight drop-shadow-md">
                        {project.title}
                      </h3>

                      {/* Subtitle / Description */}
                      <p className="text-xs md:text-sm text-neutral-300 line-clamp-2 leading-relaxed font-normal">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-2 shrink-0">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} source code on GitHub`}
                          className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all shadow-md hover:scale-105 cursor-pointer"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      <a
                        href={primaryLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title}`}
                        className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-all shadow-lg hover:scale-105 cursor-pointer"
                      >
                        {project.demoUrl ? (
                          <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                        ) : (
                          <ExternalLink className="w-4 h-4" />
                        )}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
