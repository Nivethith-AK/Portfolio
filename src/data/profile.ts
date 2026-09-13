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
  role: "Aspiring AI, ML & Data Science Engineer",
  subRole: "AI & ML Engineer · Data Scientist",
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
  { label: "Professional Certifications", value: "3" },
  { label: "Production Projects", value: "7+" },
  { label: "Building Since", value: "2022" },
  { label: "Expected Graduation", value: "2028" },
];
