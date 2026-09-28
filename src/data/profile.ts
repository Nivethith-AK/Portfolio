export interface Profile {
  name: string;
  firstName: string;
  initials: string;
  role: string;
  subRole: string;
  headline: string;
  intro: string;
  currentFocus: string;
  location: string;
  email: string;
  availability: string;
  resumeUrl: string;
  socials: {
    label: string;
    href: string;
    handle: string;
  }[];
}

export interface Stat {
  label: string;
  value: string;
}

export const profile: Profile = {
  name: "Nivethith Arasakumar",
  firstName: "Nivethith",
  initials: "NA",
  role: "AI & Data Science Enthusiast | AI Solutions Architect — Aspiring",
  subRole: "AI Solutions Architect (Aspiring) · Data Scientist",
  headline: "Bridging intelligent algorithms with production-grade engineering.",
  intro:
    "I'm a Computer Science undergraduate, AI & Data Science enthusiast, and aspiring AI Solutions Architect. I design and build end-to-end intelligent systems — from foundational machine learning and LLM orchestration to high-performance data architectures and immersive modern applications.",
  currentFocus:
    "Architecting agentic workflows, autonomous data pipelines, and production full-stack systems with Python, PyTorch, LangGraph, FastAPI, Three.js, and modern cloud platforms.",
  location: "Colombo, Sri Lanka",
  email: "nivethith.16@gmail.com",
  availability: "Available for hire",
  resumeUrl: "https://cnkrxtqeyfgtmdakzuzi.supabase.co/storage/v1/object/public/documents/resume.pdf",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/Nivethith-AK",
      handle: "@Nivethith-AK",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/nivethith-ak",
      handle: "in/nivethith-ak",
    },
    {
      label: "Email",
      href: "mailto:nivethith.16@gmail.com",
      handle: "nivethith.16@gmail.com",
    },
  ],
};

export const stats: Stat[] = [
  { label: "Production Deployments", value: "10+" },
  { label: "Professional Certifications", value: "4" },
  { label: "Building Since", value: "2022" },
  { label: "Expected Graduation", value: "2029" },
];
