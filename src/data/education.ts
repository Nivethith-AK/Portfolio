export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  badge: string;
  badgeType: "primary" | "emerald" | "amber";
  details: string[];
}

export const educationData: EducationItem[] = [
  {
    degree: "BSc (Hons) in Computer Science",
    institution: "University of Westminster (UK) — at IIT Colombo",
    period: "Reading · Expected 2028",
    badge: "Undergraduate Degree",
    badgeType: "primary",
    details: [
      "Rigorous curriculum in Computer Science with a strong focus on AI, Machine Learning, and Data Science",
      "Specializing in distributed systems, software architecture, algorithm design, and data engineering",
      "Hands-on production projects built in parallel with academic coursework",
      "Located in Colombo, Sri Lanka",
    ],
  },
  {
    degree: "Microsoft AI & ML Engineering Specialization",
    institution: "Coursera / Microsoft",
    period: "Professional Certification",
    badge: "Microsoft Certified",
    badgeType: "emerald",
    details: [
      "Specialized in the architecture, engineering, and deployment of applied AI and machine learning systems",
      "Hands-on expertise with cloud-based AI solutions, neural network design, and model evaluation",
      "Applied computer vision, natural language processing, and predictive analytics practices",
      "Production-oriented machine learning lifecycle and cloud AI integration",
    ],
  },
  {
    degree: "IBM Data Science Professional Certificate",
    institution: "Coursera / IBM",
    period: "Professional Certification",
    badge: "IBM Certified",
    badgeType: "amber",
    details: [
      "Comprehensive mastery of the end-to-end data science lifecycle: data gathering, cleaning, and preparation",
      "In-depth SQL queries, statistical analysis, relational data models, and Python data pipelines",
      "Machine learning models, feature engineering, predictive algorithms, and interactive visualizations",
      "Also completed the IBM Applied Data Science Specialization",
    ],
  },
];
