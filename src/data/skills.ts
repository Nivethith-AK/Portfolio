export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  evidence: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    subtitle: "Deep Learning, Autonomous Multi-Agent Pipelines & Explainable AI",
    evidence: "Syntrix AI (LangGraph multi-agent pipeline, SHAP explainability) · LURZ AI · Microsoft AI & ML Specialization",
    skills: [
      { name: "PyTorch & Deep Learning", level: 92 },
      { name: "LangGraph & Agentic Workflows", level: 94 },
      { name: "SHAP & Model Explainability", level: 90 },
      { name: "Scikit-Learn & Predictive Modeling", level: 92 },
      { name: "CUDA & Hardware Acceleration", level: 86 },
      { name: "LLM Orchestration & Prompt Architecture", level: 95 },
    ],
  },
  {
    id: "data-science",
    title: "Data Science & Analytics",
    subtitle: "Exploratory Data Analysis, Statistical Inference & Feature Pipelines",
    evidence: "IBM Data Science Professional Certificate · IBM Applied Data Science · Automated EDA in Syntrix AI",
    skills: [
      { name: "Python (NumPy, Pandas, SciPy)", level: 95 },
      { name: "Exploratory Data Analysis (EDA)", level: 94 },
      { name: "Statistical Modeling & Hypothesis Testing", level: 88 },
      { name: "Feature Engineering & Dimensionality Reduction", level: 90 },
      { name: "Data Visualization (Matplotlib, Seaborn)", level: 92 },
      { name: "Automated Report Generation", level: 90 },
    ],
  },
  {
    id: "software-engineering",
    title: "Software Engineering",
    subtitle: "High-Performance Full-Stack Systems, Clean Architecture & 3D Web",
    evidence: "Dolphin Beach Villa (Three.js, R3F, GSAP) · CVForge (React 19) · NovaStack AI · Avntae",
    skills: [
      { name: "TypeScript & Modern JavaScript", level: 94 },
      { name: "React 19 & Next.js (App Router)", level: 95 },
      { name: "C++ & System-Level Programming", level: 86 },
      { name: "Three.js & React Three Fiber (R3F)", level: 88 },
      { name: "GSAP & Fluid Motion Architecture", level: 92 },
      { name: "Tailwind CSS & Design Systems", level: 96 },
    ],
  },
  {
    id: "data-backend",
    title: "Data & Backend Architecture",
    subtitle: "Distributed Queues, Relational Schemas & Microservices",
    evidence: "Syntrix AI (FastAPI + Celery + Redis) · Table Linens (Supabase) · ADW Trust",
    skills: [
      { name: "FastAPI & Python Web Services", level: 92 },
      { name: "Node.js & Express APIs", level: 90 },
      { name: "PostgreSQL & Relational Data Modeling", level: 90 },
      { name: "Supabase & Realtime Subscriptions", level: 94 },
      { name: "Redis In-Memory Caching", level: 88 },
      { name: "Celery Distributed Task Queue", level: 88 },
    ],
  },
  {
    id: "devops-infra",
    title: "DevOps & Infrastructure",
    subtitle: "Continuous Integration, Cloud Platforms & Experiment Tracking",
    evidence: "10+ Live Production Deployments · MLflow Experiment Tracking · Dockerized Services",
    skills: [
      { name: "Docker & Containerization", level: 88 },
      { name: "Git & Collaborative GitHub Workflows", level: 94 },
      { name: "Vercel Edge & Cloud Hosting", level: 95 },
      { name: "MLflow Experiment Tracking", level: 86 },
      { name: "Linux Administration & Bash Scripting", level: 88 },
      { name: "API Security & Environment Management", level: 90 },
    ],
  },
];

export const marqueeTechnologies = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "Three.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
  { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
  { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
];
