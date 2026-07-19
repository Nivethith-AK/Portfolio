/**
 * Central site configuration. Update these values to rebrand the site.
 * Set `NEXT_PUBLIC_SITE_URL` in production (Vercel) for correct SEO metadata.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");

  // Vercel preview / production fallback when the public URL env isn't set yet.
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const host = vercel.replace(/^https?:\/\//, "").replace(/\/$/, "");
    return `https://${host}`;
  }

  return "https://nivethith.dev";
}

export const siteConfig = {
  name: "Nivethith Arasakumar",
  shortName: "Nive",
  title: "Nive - Portfolio",
  description:
    "Portfolio of Nivethith Arasakumar — Computer Science undergraduate and aspiring Data Scientist, AI Engineer, Machine Learning Engineer and DevOps Engineer from Colombo, Sri Lanka. Certified Microsoft AI & ML Engineer and IBM Data Science Professional. Projects include CVForge, NovaStack AI, NIVI and Avntae.",
  url: resolveSiteUrl(),
  locale: "en_US",
  themeColor: {
    light: "#ffffff",
    dark: "#0a0a0a",
  },
  keywords: [
    "Nivethith Arasakumar",
    "Nivethith-AK",
    "AI Engineer",
    "Machine Learning Engineer",
    "Data Scientist",
    "DevOps Engineer",
    "Data Science portfolio",
    "AI portfolio",
    "Python developer",
    "C++",
    "PyTorch",
    "CUDA",
    "SQL",
    "TypeScript",
    "Next.js",
    "React",
    "CVForge",
    "NovaStack AI",
    "NIVI Energy Drink",
    "Avntae",
    "Microsoft AI & ML Engineer",
    "IBM Data Science Professional",
    "University of Westminster",
    "IIT Colombo",
    "Sri Lanka",
    "Colombo",
    "Software Engineer portfolio",
  ],
  author: "Nivethith Arasakumar",
  creator: "@Nivethith-AK",
  twitter: "@Nivethith-AK",
  /** Search Console / Bing verification tokens (set via env in production). */
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
    bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ?? "",
  },
};

export type SiteConfig = typeof siteConfig;
