import { skillCategories } from "@/data/skills";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Stagger, StaggerItem } from "@/components/shared/reveal";

export function Skills() {
  return (
    <Section id="skills" className="border-t border-border">
      <SectionHeading
        eyebrow="Capabilities"
        title="A toolkit that spans the whole stack."
        description="From training models to shipping the interfaces around them — organised by where each tool earns its place."
      />

      <Stagger className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => {
          const Icon = category.icon;
          return (
            <StaggerItem key={category.name} className="h-full">
              <div className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-md">
                {/* Accent wash that fades in on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-0 bg-gradient-to-br from-primary/[0.07] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <div className="relative flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-lg border border-border bg-surface text-primary transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:border-primary/40">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="font-semibold tracking-tight">
                    {category.name}
                  </h3>
                </div>
                <p className="relative text-sm leading-relaxed text-muted-foreground">
                  {category.description}
                </p>
                <div className="relative mt-auto flex flex-wrap gap-1.5 pt-1">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="default"
                      className="transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
