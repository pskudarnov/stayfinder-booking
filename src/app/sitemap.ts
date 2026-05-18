import type { MetadataRoute } from "next";
import { stays } from "@/data/stays";

const base = "http://64.188.63.171:3230";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/search`, changeFrequency: "weekly", priority: 0.9 },
    ...stays.map((stay) => ({
      url: `${base}/stays/${stay.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
