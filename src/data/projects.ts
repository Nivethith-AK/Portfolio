import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "cvforge",
    title: "CVForge",
    tagline:
      "AI-powered resume intelligence — real-time ATS scoring, skill gaps, and tailored drafts.",
    year: "2026",
    category: "AI / ML",
    featured: true,
    cover: {
      src: "/projects/cvforge.webp",
      alt: "CVForge homepage — AI-powered resume analyser",
    },
    overview:
      "CVForge is a production-grade resume analyser that uses Google Gemini AI to deliver real-time ATS scoring, skill-gap analysis, recommended roles, and AI-generated tailored resume drafts — so candidates stop guessing and start tailoring.",
    problem:
      "Most people never get honest, structured feedback on their resume. They guess what recruiters and ATS systems want, then submit CVs that quietly hold them back.",
    solution:
      "I built an end-to-end platform: PDF upload with dual-path text extraction, streaming Gemini analysis via OpenRouter (SSE), dual-layer response normalisation, and an editable ATS-optimised resume draft with copy-to-clipboard.",
    features: [
      "Real-time ATS score (0–100) with animated visualisation",
      "Semantic analysis — strengths, weaknesses, skill gaps, executive summary",
      "AI-recommended roles matched to experience and skills",
      "AI-tailored, ATS-optimised resume draft you can edit and copy",
      "Smart PDF upload with drag-and-drop and progress tracking",
      "Privacy-first — resumes processed in-memory, never stored",
    ],
    techStack: [
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Framer Motion",
      "Node.js / Express",
      "Gemini AI",
      "OpenRouter",
      "Vite",
      "Vercel",
    ],
    architecture:
      "A React 19 front-end handles upload and the analysis dashboard. An Express API parses PDFs (pdfjs-dist with pdf-parse fallback), streams Gemini analysis over SSE, normalises the model output, and generates a tailored resume draft. Deployed serverless on Vercel.",
    challenges:
      "Keeping ATS scores consistent across model variance required dual-layer normalisation on both backend and frontend. Streaming analysis and serverless PDF parsing also needed careful error handling and fallbacks.",
    lessons:
      "The value of an AI product is in shaping and presenting the output — normalisation, streaming progress, and editable drafts matter as much as the model itself.",
    links: {
      github: "https://github.com/Nivethith-AK/CVForge",
    },
  },
  {
    slug: "novastack",
    title: "NovaStack AI",
    tagline:
      "A polished, product-first landing page for an AI management & automation brand.",
    year: "2026",
    category: "Web / SaaS",
    featured: true,
    cover: {
      src: "/projects/novastack.webp",
      alt: "NovaStack AI homepage — dark technical SaaS landing page",
    },
    overview:
      "NovaStack AI is a product-first landing page with a dark, technical visual system and neon accents. Built for an AI management and automation agency, it presents a premium SaaS feel across hero, features, workflow, infrastructure, metrics, integrations, security, and conversion.",
    problem:
      "An AI automation brand needs a web presence that feels as modern and capable as the services it offers — clear hierarchy, trust signals, and a path to convert visitors into leads.",
    solution:
      "I designed and built a full marketing site with the Next.js App Router: bold hero positioning, feature storytelling, step-by-step product explanation, infrastructure proof, metrics, integrations, security, developer messaging, and a final CTA — all responsive and conversion-focused.",
    features: [
      "Strong hero with clear product positioning",
      "Feature cards that communicate value quickly",
      "Step-by-step product workflow section",
      "Infrastructure, metrics, integrations & security blocks",
      "Developer-focused messaging and final conversion CTA",
      "Responsive layout tuned for desktop and mobile",
    ],
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Radix UI",
      "React Hook Form",
      "Zod",
      "Vercel",
    ],
    architecture:
      "Next.js App Router landing page with sectioned components under `components/landing/`, shared UI primitives, design tokens in global CSS, and Vercel Analytics. Structured so branding and copy updates stay inside section components.",
    challenges:
      "Making an AI agency feel credible and distinctive through design — dark technical aesthetics with neon accents without looking generic or noisy.",
    lessons:
      "For a services SaaS brand, section hierarchy and clarity convert better than flash — every block should earn its place on the page.",
    links: {
      github: "https://github.com/Nivethith-AK/novastack",
    },
  },
  {
    slug: "nivi-energy",
    title: "NIVI Energy Drink",
    tagline:
      "A bold, modern landing page with motion, product carousel, and community feed.",
    year: "2026",
    category: "Web Development",
    featured: true,
    cover: {
      src: "/projects/nivi.webp",
      alt: "NIVI Energy Drink full website preview",
    },
    overview:
      "NIVI is a bold marketing site for an energy drink brand — deep charcoal base, vibrant pink accents, smooth motion, and a premium product-first layout. It includes an animated hero, product carousel, bento feature grid, community feed, and social CTA.",
    problem:
      "An energy drink brand lives and dies by how bold and memorable it feels. A generic website would undersell the product and kill the vibe.",
    solution:
      "I built a high-impact Next.js landing page with a floating hero product shot, flavour/variant carousel, bento-style feature grid with hover motion, Instagram-style community sections, and Lenis smooth scrolling — opinionated and production-shaped for easy rebranding.",
    features: [
      "Animated hero with floating product shot",
      "Product carousel for flavour / variant storytelling",
      "Bento-style feature grid with motion and hover states",
      "Community and Instagram-style visual feed sections",
      "Smooth scrolling and subtle interaction effects",
      "Fully responsive for desktop and mobile",
    ],
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Framer Motion",
      "Lenis",
      "Vercel",
    ],
    architecture:
      "Next.js App Router marketing site with section components (hero, flavour carousel, lifestyle, social), design tokens in globals.css, and static product/lifestyle assets in `public/`. Tuned for fast branding swaps without restructuring the shell.",
    challenges:
      "Balancing bold, energetic visuals and motion with performance — large lifestyle imagery and smooth scroll had to stay snappy on mobile.",
    lessons:
      "For consumer brands, the interface has to sell the feeling of the product. Motion and imagery lead; copy supports.",
    links: {
      github: "https://github.com/Nivethith-AK/NIVI",
    },
  },
  {
    slug: "avntae",
    title: "Avntae",
    tagline:
      "An elegant, image-forward website for a fashion design company.",
    year: "2026",
    category: "Web Development",
    featured: true,
    cover: {
      src: "/projects/avntae.webp",
      alt: "Screenshot of the Avntae fashion design company website homepage",
    },
    overview:
      "Avntae is the website for a fashion design company (avntae.com) — an elegant, visual-first experience that reflects the brand's aesthetic and showcases its work with a clean, editorial feel.",
    problem:
      "A fashion brand needs a site that feels as considered and stylish as its designs, where imagery leads and the layout gets out of the way.",
    solution:
      "I designed and built a refined, image-driven website with editorial typography and spacing so collections take centre stage across devices.",
    features: [
      "Elegant, editorial visual design",
      "Image-forward layouts for collections",
      "Responsive across all devices",
      "Refined typography and spacing",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    architecture:
      "A responsive, image-first front-end designed to present a fashion brand's work with a clean, editorial layout.",
    challenges:
      "Achieving a premium, editorial feel while keeping large imagery fast and responsive.",
    lessons:
      "In fashion, restraint is the design — the interface should frame the work, never compete with it.",
    links: {
      demo: "https://avntae.com",
    },
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);
