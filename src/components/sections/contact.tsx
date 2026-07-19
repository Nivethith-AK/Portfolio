import { ArrowUpRight } from "lucide-react";

import { profile } from "@/data/profile";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { ContactForm } from "@/components/contact/contact-form";

export function Contact() {
  return (
    <Section id="contact" className="border-t border-border bg-surface/30">
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something worth shipping."
            description="Have a role, a project, or an idea you want to explore? I'm always happy to talk to thoughtful people building ambitious things."
          />

          <Reveal delay={0.1}>
            <ul className="flex flex-col divide-y divide-border border-y border-border">
              {profile.socials.map((social) => {
                const Icon = social.icon;
                const isExternal = social.href.startsWith("http");
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      download={social.label === "Resume" ? true : undefined}
                      className="group flex items-center justify-between gap-4 py-4 transition-colors hover:text-primary"
                    >
                      <span className="flex items-center gap-3">
                        <span className="grid size-10 place-items-center rounded-lg border border-border bg-surface text-muted-foreground transition-colors group-hover:border-primary/30 group-hover:text-primary">
                          <Icon className="size-4" aria-hidden />
                        </span>
                        <span className="flex flex-col">
                          <span className="text-sm font-medium text-foreground">
                            {social.label}
                          </span>
                          <span className="break-all text-sm text-muted-foreground">
                            {social.handle}
                          </span>
                        </span>
                      </span>
                      <ArrowUpRight className="size-4 shrink-0 text-muted-foreground opacity-70 transition-opacity sm:opacity-0 sm:group-hover:opacity-100" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
