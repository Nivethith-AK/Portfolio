export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: string;
  year: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  gridClass: string;
  techStack: string[];
}

export const projects: Project[] = [
  {
    id: "syntrix-ai",
    title: "Syntrix AI",
    subtitle: "Autonomous multi-agent data-science platform with SHAP explanations & PDF reports",
    tagline: "Autonomous multi-agent data-science platform",
    category: "AI / ML",
    year: "2026",
    image: "/projects/syntrix.webp",
    demoUrl: "https://syntrixai-blue.vercel.app",
    githubUrl: "https://github.com/Nivethith-AK/Syntrix-AI",
    gridClass: "md:col-span-7 h-[420px]",
    techStack: ["Next.js", "Python", "FastAPI", "LangGraph", "Celery", "Redis", "Supabase", "MLflow", "SHAP"],
  },
  {
    id: "lurz-ai",
    title: "LURZ AI",
    subtitle: "Live AI market signals across crypto, stocks, forex and commodities",
    tagline: "Live AI market signals platform",
    category: "AI / FinTech",
    year: "2026",
    image: "/projects/lurz.webp",
    demoUrl: "https://lurzai.vercel.app",
    gridClass: "md:col-span-5 h-[420px]",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Real-time APIs"],
  },
  {
    id: "cvforge",
    title: "CVForge",
    subtitle: "AI-powered resume intelligence — real-time ATS scoring, skill gaps & tailored drafts",
    tagline: "AI-powered resume analyser & optimizer",
    category: "AI / ML",
    year: "2026",
    image: "/projects/cvforge.webp",
    demoUrl: "https://cvforge-lake.vercel.app",
    githubUrl: "https://github.com/Nivethith-AK/CVForge",
    gridClass: "md:col-span-5 h-[380px]",
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "Gemini AI", "Node.js", "Express", "Vite"],
  },
  {
    id: "novastack",
    title: "NovaStack AI",
    subtitle: "Product-first landing page with a dark technical visual system for an AI automation brand",
    tagline: "AI management & automation platform",
    category: "Web / SaaS",
    year: "2026",
    image: "/projects/novastack.webp",
    githubUrl: "https://github.com/Nivethith-AK/novastack",
    gridClass: "md:col-span-7 h-[380px]",
    techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Radix UI", "Zod"],
  },
  {
    id: "mind-body-soul",
    title: "Mind Body & Soul by T-Villa",
    subtitle: "Editorial website for a luxury retirement and wellness villa resort in Sri Lanka",
    tagline: "Luxury retirement & wellness villa resort",
    category: "Web Development",
    year: "2026",
    image: "/projects/mbs-villa.webp",
    demoUrl: "https://mbsbytvilla-lime.vercel.app",
    gridClass: "md:col-span-7 h-[380px]",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: "nivi-energy",
    title: "NIVI Energy Drink",
    subtitle: "Bold marketing site with 3D product motion, flavor carousel & community feed",
    tagline: "High-impact energy drink marketing experience",
    category: "Web Development",
    year: "2026",
    image: "/projects/nivi.webp",
    githubUrl: "https://github.com/Nivethith-AK/NIVI",
    gridClass: "md:col-span-5 h-[380px]",
    techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Lenis", "Framer Motion"],
  },
  {
    id: "avntae",
    title: "Avntae",
    subtitle: "Refined, editorial website for a fashion design company framing collections with restraint",
    tagline: "Fashion design company showcase",
    category: "Web Development",
    year: "2026",
    image: "/projects/avntae.webp",
    demoUrl: "https://avntae.com",
    githubUrl: "https://github.com/Nivethith-AK/avntaewebsite2",
    gridClass: "md:col-span-12 h-[380px]",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
];
