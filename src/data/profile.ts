import { Github, Linkedin, Mail, FileText } from "lucide-react";
import type { Profile, Stat, TimelineEntry } from "@/types";

export const profile: Profile = {
  name: "Nivethith Arasakumar",
  firstName: "Nivethith",
  role: "Aspiring AI, ML & Data Science Engineer",
  headline: "I build systems, not just models.",
  intro:
    "I'm a Computer Science undergraduate and AI & ML Engineer focused on high-performance ML and data architecture. I care about the whole system around a model — from C++ and Python internals to the data pipelines and interfaces that make it useful.",
  currentFocus:
    "I'm working toward a career as a Data Scientist, AI Engineer, Machine Learning Engineer or DevOps Engineer — going deep on Python, C++, PyTorch, CUDA, cloud AI and scalable data systems along the way.",
  location: "Colombo, Sri Lanka",
  email: "nivethith.16@gmail.com",
  availability: "Available for hire",
  resumeUrl: "/resume.pdf",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/Nivethith-AK",
      icon: Github,
      handle: "@Nivethith-AK",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/nivethith-ak",
      icon: Linkedin,
      handle: "in/nivethith-ak",
    },
    {
      label: "Email",
      href: "mailto:nivethith.16@gmail.com",
      icon: Mail,
      handle: "nivethith.16@gmail.com",
    },
    {
      label: "Resume",
      href: "/resume.pdf",
      icon: FileText,
      handle: "Download PDF",
    },
  ],
};

export const stats: Stat[] = [
  { label: "Professional certifications", value: "3" },
  { label: "Public repositories", value: "5" },
  { label: "Building since", value: "2022" },
  { label: "Expected graduation", value: "2028" },
];

export const aboutTimeline: TimelineEntry[] = [
  {
    year: "2024",
    title: "Started my CS degree",
    description:
      "Began a BSc (Hons) in Computer Science with the University of Westminster at IIT Colombo, and quickly gravitated toward data and intelligent systems.",
  },
  {
    year: "2025",
    title: "Certified in AI & Data Science",
    description:
      "Earned the Microsoft AI & ML Engineering and IBM Data Science Professional certifications, and built a 3D interactive portfolio end to end.",
  },
  {
    year: "2026",
    title: "Building real data systems",
    description:
      "Designing and implementing a relational database for an e-commerce platform — schema design, scalability and backend integration.",
  },
  {
    year: "Next",
    title: "Toward AI & DevOps engineering",
    description:
      "Focused on landing a role as a Data Scientist, AI/ML Engineer or DevOps Engineer, and shipping intelligent software that reaches real users.",
  },
];
