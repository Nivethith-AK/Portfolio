import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";
import { Marquee } from "@/components/shared/marquee";

const marqueeItems = [
  "Python",
  "C++",
  "PyTorch",
  "CUDA",
  "SQL",
  "TypeScript",
  "Machine Learning",
  "OpenAI API",
  "Azure AI",
  "PostgreSQL",
  "Node.js",
  "Firebase",
  "Data Science",
  "Figma",
  "Git",
  "Microsoft AI & ML",
  "IBM Data Science",
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="border-y border-border bg-surface/30 py-6">
        <Marquee items={marqueeItems} />
      </div>
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </>
  );
}
