"use client";

import { motion } from "framer-motion";

import { profile, aboutTimeline } from "@/data/profile";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";

export function About() {
  return (
    <Section id="about" className="border-t border-border">
      <SectionHeading
        eyebrow="About"
        title="An aspiring engineer, learning by building."
        description="I care about the whole path a good idea travels — from the data and the model to the system around it and the moment it finally lands in someone's hands."
      />

      <div className="mt-16 grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div className="flex flex-col gap-6">
          <Reveal className="text-pretty text-lg leading-relaxed text-foreground/90">
            I&apos;m a Computer Science undergraduate and an AI &amp; ML
            Engineer with a simple philosophy:{" "}
            <span className="text-foreground">
              build systems, not just models
            </span>
            . I&apos;m drawn to high-performance ML and data architecture — the
            C++, Python and PyTorch internals as much as the ideas on top.
          </Reveal>
          <Reveal
            delay={0.05}
            className="text-pretty leading-relaxed text-muted-foreground"
          >
            As a Certified Microsoft AI &amp; ML Engineer and IBM Data Science
            Professional, I&apos;ve designed scalable databases and built the
            beginnings of intelligent systems. I like to leverage data-driven
            insight to solve complex problems, and I learn fastest by shipping
            real projects rather than just reading about them.
          </Reveal>
          <Reveal
            delay={0.1}
            className="text-pretty leading-relaxed text-muted-foreground"
          >
            My goal is clear: I&apos;m working toward a career as a{" "}
            <span className="text-foreground">Data Scientist</span>,{" "}
            <span className="text-foreground">AI Engineer</span>,{" "}
            <span className="text-foreground">Machine Learning Engineer</span>{" "}
            or <span className="text-foreground">DevOps Engineer</span>. Every
            project, certification and line of code is a step toward building
            intelligent software that&apos;s dependable and genuinely useful.
          </Reveal>

          <Reveal delay={0.15} className="mt-2">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-4 border-t border-border pt-6 sm:grid-cols-2">
              <div>
                <dt className="text-sm text-muted-foreground">Based in</dt>
                <dd className="mt-1 font-medium">{profile.location}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Focus</dt>
                <dd className="mt-1 font-medium">
                  AI · ML · Data Science · DevOps
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        {/* Timeline */}
        <Stagger className="relative">
          {/* Animated line that draws itself as the timeline enters view */}
          <motion.span
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-1 h-full w-px origin-top bg-gradient-to-b from-primary via-border to-transparent"
          />
          <ol className="relative flex flex-col gap-8 pl-8">
            {aboutTimeline.map((entry) => (
              /* <li> wrapper keeps the DOM valid (motion divs can't be direct
                 children of <ol>), which otherwise triggers hydration errors. */
              <li key={entry.year} className="relative">
                <StaggerItem>
                  <span
                    aria-hidden
                    className="group absolute -left-[2.15rem] top-1 grid size-4 place-items-center rounded-full border border-border bg-background"
                  >
                    <span className="absolute size-4 animate-ping rounded-full bg-primary/30 [animation-duration:3s]" />
                    <span className="relative size-1.5 rounded-full bg-primary" />
                  </span>
                  <p className="font-mono text-sm text-primary">{entry.year}</p>
                  <h3 className="mt-1 font-semibold tracking-tight">
                    {entry.title}
                  </h3>
                  <p className="mt-1.5 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {entry.description}
                  </p>
                </StaggerItem>
              </li>
            ))}
          </ol>
        </Stagger>
      </div>
    </Section>
  );
}
