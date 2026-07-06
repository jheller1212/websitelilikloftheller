import type { MetadataRoute } from "next";

const siteUrl = "https://liliankloft.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/expert-witness`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/research`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/cv`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
