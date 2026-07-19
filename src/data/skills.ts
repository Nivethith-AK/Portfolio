import {
  Braces,
  Server,
  Brain,
  LineChart,
  Database,
  Cloud,
  Palette,
  Users,
} from "lucide-react";
import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages & Frameworks",
    icon: Braces,
    description: "The core tools I reach for to build and analyse.",
    skills: ["Python", "C++", "TypeScript", "JavaScript", "SQL", "Node.js"],
  },
  {
    name: "AI & Machine Learning",
    icon: Brain,
    description: "High-performance ML and intelligent systems.",
    skills: [
      "PyTorch",
      "CUDA",
      "Machine Learning",
      "OpenAI API",
      "Azure AI",
      "Microsoft AI & ML",
    ],
  },
  {
    name: "Data Science",
    icon: LineChart,
    description: "Turning raw data into insight and decisions.",
    skills: [
      "Data Analysis",
      "Data Science Techniques",
      "IBM Data Science",
      "SQL",
    ],
  },
  {
    name: "Backend & Databases",
    icon: Database,
    description: "Designing scalable data and backend services.",
    skills: ["PostgreSQL", "SQL", "Firebase", "REST APIs"],
  },
  {
    name: "Cloud & DevOps",
    icon: Cloud,
    description: "Building and shipping software on the cloud.",
    skills: ["Azure AI", "Cloud AI Solutions", "Git", "Agile Development"],
  },
  {
    name: "Design & Tools",
    icon: Palette,
    description: "The craft and workflow around the code.",
    skills: ["Figma", "GetX", "Git", "UI/UX"],
  },
  {
    name: "Backend Runtime",
    icon: Server,
    description: "Powering dynamic content and services.",
    skills: ["Node.js", "REST APIs", "Firebase"],
  },
  {
    name: "Soft Skills",
    icon: Users,
    description: "How I work with people and problems.",
    skills: [
      "Problem Solving",
      "Team Collaboration",
      "Communication",
      "Critical Thinking",
      "Design Thinking",
    ],
  },
];
