import { projects } from "@/data/projects";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Stagger, StaggerItem } from "@/components/shared/reveal";
import { ProjectCard } from "@/components/projects/project-card";

export function Projects() {
  return (
    <Section
      id="projects"
      className="relative overflow-hidden border-t border-border bg-surface/30"
    >
      {/* Soft ambient glow anchored to the section (gradient, not blur) */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-1/4 -z-0 size-[30rem]"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in srgb, var(--color-accent) 7%, transparent), transparent 70%)",
        }}
      />
      <div className="relative">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects, told as case studies."
          description="A closer look at problems worth solving — the context, the decisions, and what I learned building each one. Select a project to read the full story."
        />

        <Stagger className="mt-16 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <StaggerItem key={project.slug} className="h-full">
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
