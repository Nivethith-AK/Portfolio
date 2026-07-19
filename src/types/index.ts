import type { LucideIcon } from "lucide-react";

export interface NavItem {
  /** Section id used for in-page anchor + scroll-spy. */
  id: string;
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
  handle?: string;
}

export interface Profile {
  name: string;
  firstName: string;
  role: string;
  headline: string;
  intro: string;
  currentFocus: string;
  location: string;
  email: string;
  availability: string;
  resumeUrl: string;
  socials: SocialLink[];
}

export interface Stat {
  label: string;
  value: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  category: string;
  cover: {
    src: string;
    alt: string;
  };
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  architecture: string;
  challenges: string;
  lessons: string;
  links: {
    github?: string;
    demo?: string;
  };
  featured?: boolean;
}

export interface SkillCategory {
  name: string;
  icon: LucideIcon;
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details: string;
  achievements: string[];
}
