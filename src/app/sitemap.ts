import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

/**
 * Canonical sitemap. Hash fragments (#projects) are omitted — search engines
 * don't treat them as separate indexable URLs for a single-page portfolio.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
