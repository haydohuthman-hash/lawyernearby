import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/removalists-brisbane-to-gold-coast",
    "/moving-brisbane",
    "/moving-gold-coast",
    "/services/removalists",
    "/services/rubbish-removal",
  ];

  const priorityFor = (route: string) => {
    if (route === "") return 1;
    if (route === "/removalists-brisbane-to-gold-coast") return 0.9;
    return 0.8;
  };

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: priorityFor(route),
  }));
}
