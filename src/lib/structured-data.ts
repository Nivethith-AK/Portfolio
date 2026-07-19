import { siteConfig } from "@/lib/site";
import { profile } from "@/data/profile";
import { skillCategories } from "@/data/skills";
import { education } from "@/data/education";
import { projects } from "@/data/projects";

const socialUrls = profile.socials
  .filter((s) => s.href.startsWith("http"))
  .map((s) => s.href);

/** Flattened, de-duplicated list of skills for `knowsAbout`. */
const knowsAbout = Array.from(
  new Set(
    skillCategories.flatMap((c) => c.skills).concat([
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science",
      "DevOps",
      "High-Performance Computing",
      "Data Architecture",
    ]),
  ),
);

/**
 * Schema.org Person JSON-LD — the primary entity for rich search results.
 */
export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: profile.name,
    alternateName: ["Nivethith-AK", "Nivethith"],
    url: siteConfig.url,
    image: `${siteConfig.url}/opengraph-image`,
    jobTitle: profile.role,
    description: siteConfig.description,
    email: profile.email,
    telephone: "+94778444997",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Colombo",
      addressCountry: "LK",
    },
    nationality: { "@type": "Country", name: "Sri Lanka" },
    knowsAbout,
    knowsLanguage: [
      { "@type": "Language", name: "English", alternateName: "en" },
      { "@type": "Language", name: "Tamil", alternateName: "ta" },
    ],
    alumniOf: education.map((e) => ({
      "@type": "CollegeOrUniversity",
      name: e.institution,
      address: {
        "@type": "PostalAddress",
        addressLocality: e.location,
      },
    })),
    hasCredential: education
      .filter((e) => e.period.toLowerCase().includes("certification"))
      .map((e) => ({
        "@type": "EducationalOccupationalCredential",
        name: e.degree,
        credentialCategory: "certificate",
        recognizedBy: { "@type": "Organization", name: e.institution },
      })),
    sameAs: [
      ...socialUrls,
      "https://github.com/Nivethith-AK",
      "https://linkedin.com/in/nivethith-ak",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Open to opportunities",
    },
  };
}

/**
 * WebSite JSON-LD, linked to the Person as author/publisher.
 */
export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    alternateName: siteConfig.title,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-US",
    author: { "@id": `${siteConfig.url}/#person` },
    publisher: { "@id": `${siteConfig.url}/#person` },
    copyrightHolder: { "@id": `${siteConfig.url}/#person` },
    copyrightYear: new Date().getFullYear(),
  };
}

/**
 * ProfilePage JSON-LD describing this page as the person's profile,
 * with their projects listed as authored creative works.
 */
export function getProfilePageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteConfig.url}/#profilepage`,
    url: siteConfig.url,
    name: siteConfig.title,
    description: siteConfig.description,
    inLanguage: "en-US",
    dateModified: new Date().toISOString().split("T")[0],
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#person` },
    mainEntity: { "@id": `${siteConfig.url}/#person` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/opengraph-image`,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.url,
        },
      ],
    },
  };
}

/**
 * ItemList of portfolio projects for richer project discovery in search.
 */
export function getProjectsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${siteConfig.url}/#projects`,
    name: "Selected projects by Nivethith Arasakumar",
    description:
      "Portfolio projects including CVForge, NovaStack AI, NIVI Energy Drink and Avntae.",
    numberOfItems: projects.length,
    itemListElement: projects.map((p, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareSourceCode",
        name: p.title,
        description: p.overview,
        abstract: p.tagline,
        dateCreated: p.year,
        programmingLanguage: p.techStack,
        codeRepository: p.links.github,
        url: p.links.github ?? siteConfig.url,
        image: p.cover.src.startsWith("http")
          ? p.cover.src
          : `${siteConfig.url}${p.cover.src}`,
        author: { "@id": `${siteConfig.url}/#person` },
        keywords: p.techStack.join(", "),
      },
    })),
  };
}
