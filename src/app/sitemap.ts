import type { MetadataRoute } from "next";

const siteUrl = "https://liliankloft.com";

// The site is statically generated, so build time is the closest honest proxy
// for when the content last changed. Without lastModified the sitemap gives
// crawlers no recrawl signal at all.
const buildDate = new Date().toISOString().slice(0, 10);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/expert-witness`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/research`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/cv`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
