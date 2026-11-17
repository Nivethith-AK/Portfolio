import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, ChevronDown, ChevronUp } from "lucide-react";
import { useLenis } from "lenis/react";
import { projects, type Project } from "../../data/projects";
import { PortfonButton, SectionEyebrow } from "../PortfonUI";

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
  const [showAllInAll, setShowAllInAll] = useState(false);
  const lenis = useLenis();

  const categoryFiltered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const displayedProjects =
    activeCategory === "All" && !showAllInAll
      ? categoryFiltered.slice(0, 6)
      : categoryFiltered;

  useEffect(() => {
    const timer = window.setTimeout(() => {
      lenis?.resize();
    }, 150);
    return () => window.clearTimeout(timer);
  }, [activeCategory, showAllInAll, lenis]);

  return (
    <section id="projects" className="scroll-mt-20 w-full bg-background pt-20 md:pt-28 pb-24 md:pb-32">
      <div className="max-w-[1140px] mx-auto px-5 md:px-6">
        {/* Centered Header (matching Portfon Portfolio Header) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10 md:mb-12"
        >
          <SectionEyebrow label="My Portfolio" centered />
          <h2 className="mt-3 text-[2.25rem] sm:text-[2.75rem] md:text-[3.1rem] font-medium tracking-[-0.04em] leading-[1.08] text-foreground">
            Projects That Delivered Real Impact
          </h2>
        </motion.div>

        {/* Clean Portfon Pill Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                  active
                    ? "text-white"
                    : "text-muted-foreground hover:text-foreground bg-card border border-[var(--border)]"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="portfonProjectFilter"
                    transition={{ type: "spring", stiffness: 360, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-[#3458ff] shadow-sm"
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Portfon Large Showcase Project Cards */}
        <div className="space-y-8">
          {displayedProjects.map((project: Project, index: number) => {
            const primaryHref = project.demoUrl || project.githubUrl || "#";
            const numLabel = String(index + 1).padStart(2, "0");

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{ duration: 0.45 }}
                className="portfon-card p-6 sm:p-8 md:p-10 shadow-[0_8px_30px_rgba(16,16,16,0.03)] hover:shadow-[0_16px_44px_rgba(52,88,255,0.08)] transition-shadow duration-300"
              >
                {/* Top Title + Large Number Index */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#3458ff]/10 text-[#3458ff]">
                        {project.badge || project.category}
                      </span>
                      <span className="text-xs font-medium text-muted-foreground">
                        {project.year}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-[2rem] font-medium tracking-[-0.03em] text-foreground">
                      {project.title}
                    </h3>
                  </div>

                  <span className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-0.04em] text-foreground/15 select-none leading-none">
                    {numLabel}
                  </span>
                </div>

                {/* Description & Actions Row */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-7">
                  <div className="max-w-xl space-y-4">
                    <p className="text-sm sm:text-[15px] leading-relaxed text-muted-foreground">
                      {project.description || project.subtitle}
                    </p>

                    {/* Clean Tech Pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-[var(--surface-soft)] border border-[var(--border)] text-foreground/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 shrink-0">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} on GitHub`}
                        className="w-11 h-11 rounded-full bg-[var(--surface-soft)] border border-[var(--border)] flex items-center justify-center text-foreground hover:border-[#3458ff] hover:text-[#3458ff] transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}

                    <PortfonButton
                      href={primaryHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="md"
                    >
                      {project.demoUrl ? "Explore Project" : "View Source"}
                    </PortfonButton>
                  </div>
                </div>

                {/* Rounded Full-Width Project Image Container */}
                <a
                  href={primaryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative rounded-2xl overflow-hidden bg-[var(--surface-soft)] border border-[var(--border)] aspect-[16/9] md:aspect-[16/7.8]"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    decoding="async"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </a>
              </motion.article>
            );
          })}
        </div>

        {/* Expand/Collapse for Remaining Projects in All View */}
        {activeCategory === "All" && projects.length > 6 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllInAll((prev) => !prev)}
              className="px-6 py-3 rounded-full bg-card border border-[var(--border)] text-sm font-medium text-foreground inline-flex items-center gap-2 hover:border-[#3458ff] hover:text-[#3458ff] transition-colors shadow-sm"
            >
              <span>
                {showAllInAll
                  ? "Show Featured Projects (6)"
                  : `View All Projects (${projects.length})`}
              </span>
              {showAllInAll ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
