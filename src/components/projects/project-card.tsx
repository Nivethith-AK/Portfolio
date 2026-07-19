"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";

import type { Project } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

function CaseStudyBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
        {label}
      </h4>
      <div className="text-pretty text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Dialog>
      <SpotlightCard className="h-full rounded-xl">
        <DialogTrigger asChild>
          <button
            type="button"
            className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-border bg-card text-left transition-all duration-300 hover:border-foreground/20 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label={`View case study: ${project.title}`}
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface">
              <Image
                src={project.cover.src}
                alt={project.cover.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
              <div className="absolute left-4 top-4 flex gap-2">
                <Badge variant="solid" className="backdrop-blur">
                  {project.category}
                </Badge>
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-4 p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                    {project.tagline}
                  </p>
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  {project.year}
                </span>
              </div>

              <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                {project.techStack.slice(0, 4).map((tech) => (
                  <Badge key={tech} variant="default">
                    {tech}
                  </Badge>
                ))}
                {project.techStack.length > 4 && (
                  <Badge variant="default">
                    +{project.techStack.length - 4}
                  </Badge>
                )}
              </div>

              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                View case study
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </button>
        </DialogTrigger>
      </SpotlightCard>

      <DialogContent className="max-w-3xl">
        <div className="relative -mx-6 -mt-6 aspect-[16/9] overflow-hidden rounded-t-xl bg-surface sm:-mx-8 sm:-mt-8">
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover object-top"
          />
        </div>

        <DialogHeader className="mt-2">
          <div className="flex items-center gap-2">
            <Badge variant="accent">{project.category}</Badge>
            <span className="font-mono text-xs text-muted-foreground">
              {project.year}
            </span>
          </div>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription className="text-base">
            {project.tagline}
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-7 pt-2">
          <p className="text-pretty leading-relaxed text-foreground/90">
            {project.overview}
          </p>

          <div className="grid gap-7 sm:grid-cols-2">
            <CaseStudyBlock label="Problem">{project.problem}</CaseStudyBlock>
            <CaseStudyBlock label="Solution">
              {project.solution}
            </CaseStudyBlock>
          </div>

          <CaseStudyBlock label="Key features">
            <ul className="mt-1 grid gap-2 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CaseStudyBlock>

          <CaseStudyBlock label="Architecture">
            {project.architecture}
          </CaseStudyBlock>

          <div className="grid gap-7 sm:grid-cols-2">
            <CaseStudyBlock label="Challenges">
              {project.challenges}
            </CaseStudyBlock>
            <CaseStudyBlock label="Lessons learned">
              {project.lessons}
            </CaseStudyBlock>
          </div>

          <CaseStudyBlock label="Tech stack">
            <div className="mt-1 flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </CaseStudyBlock>

          {(project.links.github || project.links.demo) && (
            <div className="flex flex-wrap gap-3 border-t border-border pt-6">
              {project.links.github && (
                <Button asChild size="sm">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="size-4" />
                    View repository
                  </a>
                </Button>
              )}
              {project.links.demo && (
                <Button asChild size="sm" variant="outline">
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ArrowUpRight className="size-4" />
                    Visit site
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
