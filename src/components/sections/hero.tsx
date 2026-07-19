"use client";

import * as React from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";

import { profile, stats } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { scrollToHash } from "@/lib/utils";
import { AuroraBackground } from "@/components/shared/aurora-background";
import { TextRotate } from "@/components/shared/text-rotate";
import { Magnetic } from "@/components/shared/magnetic";
import { CountUp } from "@/components/shared/count-up";
import { SplitText } from "@/components/shared/split-text";

const easing = [0.22, 1, 0.36, 1] as const;

const roles = [
  "Data Scientist",
  "AI Engineer",
  "ML Engineer",
  "DevOps Engineer",
];

/** Split a stat value like "1.4k" or "2028" into number + suffix. */
function parseStat(value: string) {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  const numeric = match?.[1];
  if (!numeric) return { num: null as number | null, suffix: value };
  return { num: parseFloat(numeric), suffix: match?.[2] ?? "" };
}

export function Hero() {
  const prefersReduced = useReducedMotion();

  // Cursor-tracking spotlight: a fixed-size gradient circle moved with
  // transforms (compositor-only) instead of repainting a full-viewport
  // gradient on every mouse move.
  const mx = useMotionValue(-900);
  const my = useMotionValue(-900);
  const spotX = useSpring(mx, { stiffness: 160, damping: 26, mass: 0.5 });
  const spotY = useSpring(my, { stiffness: 160, damping: 26, mass: 0.5 });

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    if (prefersReduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.09, delayChildren: 0.05 },
    },
  };

  const item = {
    hidden: prefersReduced ? { opacity: 0 } : { opacity: 0, y: 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: easing },
    },
  };

  const scrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    scrollToHash(href);
  };

  return (
    <section
      id="home"
      onMouseMove={handleMove}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16"
    >
      <AuroraBackground />

      {/* Slowly rotating conic beam, masked to a soft circle up top */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-20rem] -z-10 size-[46rem] -translate-x-1/2 [mask-image:radial-gradient(circle,#000_20%,transparent_65%)]"
      >
        <div className="conic-beam animate-spin-slow size-full opacity-[0.15]" />
      </div>

      {/* Drifting hairline grid, faded toward the top. The mask lives on the
          static wrapper; the oversized child drifts via transform only. */}
      <div
        aria-hidden
        className="mask-radial-faded pointer-events-none absolute inset-0 -z-10 opacity-50"
      >
        <div className="bg-grid animate-grid-drift absolute -inset-16" />
      </div>
      {/* Cursor spotlight */}
      <motion.div
        aria-hidden
        style={{ x: spotX, y: spotY }}
        className="pointer-events-none absolute left-0 top-0 -z-10 will-change-transform"
      >
        <div
          className="size-[50rem] -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in srgb, var(--color-accent) 10%, transparent), transparent 62%)",
          }}
        />
      </motion.div>

      <Container className="py-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex max-w-4xl flex-col"
        >
          <motion.div variants={item}>
            <span className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              {profile.availability}
              <Sparkles className="size-3.5 text-primary" aria-hidden />
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <SplitText
              text={profile.headline}
              trigger="mount"
              delay={0.35}
              stagger={0.06}
              wordClassName="text-gradient"
            />
          </motion.h1>

          {/* Rotating aspiration line */}
          <motion.div
            variants={item}
            className="mt-5 flex flex-wrap items-center gap-x-2 text-xl font-medium tracking-tight sm:text-2xl"
          >
            <span className="text-muted-foreground">Aspiring</span>
            <TextRotate words={roles} className="font-semibold" />
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-4 flex items-start gap-2.5 text-sm text-muted-foreground"
          >
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
            <p className="max-w-xl text-pretty">{profile.currentFocus}</p>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <Magnetic>
              <Button asChild size="lg">
                <a href="#projects" onClick={(e) => scrollTo(e, "#projects")}>
                  View projects
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
              </Button>
            </Magnetic>
            <Magnetic strength={0.25}>
              <Button asChild variant="secondary" size="lg">
                <a href={profile.resumeUrl} download>
                  <Download className="size-4" />
                  Download resume
                </a>
              </Button>
            </Magnetic>
            <Magnetic strength={0.25}>
              <Button asChild variant="ghost" size="lg">
                <a href="#contact" onClick={(e) => scrollTo(e, "#contact")}>
                  <Mail className="size-4" />
                  Contact me
                </a>
              </Button>
            </Magnetic>
          </motion.div>

          <motion.dl
            variants={item}
            className="mt-16 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-border pt-10 sm:grid-cols-4"
          >
            {stats.map((stat) => {
              const { num, suffix } = parseStat(stat.value);
              return (
                <div key={stat.label} className="group flex flex-col gap-1">
                  <dt className="order-2 text-sm text-muted-foreground">
                    {stat.label}
                  </dt>
                  <dd className="order-1 text-3xl font-semibold tracking-tight transition-colors group-hover:text-primary">
                    {num !== null ? (
                      <CountUp value={num} suffix={suffix} />
                    ) : (
                      stat.value
                    )}
                  </dd>
                </div>
              );
            })}
          </motion.dl>
        </motion.div>
      </Container>

      {/* Scroll cue */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-border p-1">
          <motion.span
            animate={prefersReduced ? {} : { y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="size-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
