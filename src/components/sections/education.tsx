import { GraduationCap, Check } from "lucide-react";

import { education } from "@/data/education";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Stagger, StaggerItem } from "@/components/shared/reveal";

export function Education() {
  return (
    <Section id="education" className="border-t border-border">
      <SectionHeading
        eyebrow="Education"
        title="Foundations & continued learning."
        description="Formal study and the certifications I've pursued to stay sharp."
      />

      <Stagger className="mt-16 grid gap-4 lg:grid-cols-3">
        {education.map((item) => (
          <StaggerItem key={item.degree} className="h-full">
            <div className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-md">
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <span className="grid size-11 place-items-center rounded-lg border border-border bg-surface text-primary transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:border-primary/40">
                <GraduationCap className="size-5" aria-hidden />
              </span>

              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs text-muted-foreground">
                  {item.period}
                </span>
                <h3 className="text-lg font-semibold leading-snug tracking-tight">
                  {item.degree}
                </h3>
                <p className="text-sm text-primary">{item.institution}</p>
                <p className="text-sm text-muted-foreground">{item.location}</p>
              </div>

              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                {item.details}
              </p>

              <ul className="mt-auto flex flex-col gap-2 border-t border-border pt-4">
                {item.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="flex items-start gap-2 text-sm text-foreground/85"
                  >
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-primary"
                      aria-hidden
                    />
                    <span className="text-pretty">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
