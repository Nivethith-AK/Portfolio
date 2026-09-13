import { ScrollTimeline } from "../lightswind/scroll-timeline";
import { Briefcase, Award, Layers, Globe } from "lucide-react";

export const CareerTimeline = () => {
  const careerEvents = [
    {
      year: "2024",
      title: "Started BSc (Hons) Computer Science",
      subtitle: "University of Westminster / IIT Colombo",
      description:
        "Began reading for a BSc (Hons) in Computer Science at the Informatics Institute of Technology (IIT), focusing on data structures, algorithms, systems programming, and intelligent systems.",
      icon: <Globe className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2025",
      title: "Certified in AI, ML & Data Science",
      subtitle: "Microsoft & IBM Professional Programs",
      description:
        "Earned Microsoft AI & ML Engineering and IBM Data Science Professional certifications. Mastered PyTorch, deep learning models, cloud AI solutions, and full-stack interactive applications.",
      icon: <Award className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2026",
      title: "Architecting Autonomous & Real-Time Systems",
      subtitle: "Syntrix AI · LURZ AI · CVForge",
      description:
        "Engineered production-grade platforms: Syntrix AI (multi-agent autonomous ML pipeline with SHAP explainability), LURZ AI (live financial market intelligence streaming), and CVForge (Gemini-powered ATS scoring system).",
      icon: <Layers className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "Next",
      title: "Toward AI, ML & DevOps Engineering",
      subtitle: "Future Ambitions & Impact",
      description:
        "Targeting roles as a Data Scientist, AI Engineer, Machine Learning Engineer, or DevOps Engineer — building resilient, high-throughput systems that bridge cutting-edge models with real-world users.",
      icon: <Briefcase className="h-4 w-4 mr-2 text-primary" />,
    },
  ];

  return (
    <div id="career">
      <ScrollTimeline
        events={careerEvents}
        title="Career Journey"
        subtitle="An evolving path of leadership, innovation, and impact"
        animationOrder="staggered"
        cardAlignment="alternating"
        cardVariant="elevated"
        parallaxIntensity={0.15}
        revealAnimation="fade"
        progressIndicator={true}
        lineColor="bg-primary/20"
        activeColor="bg-primary"
        progressLineWidth={3}
        progressLineCap="round"
      />
    </div>
  );
};
