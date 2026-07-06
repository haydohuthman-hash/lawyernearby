import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { POSTS } from "@/content/posts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/removalists-brisbane-to-gold-coast",
    "/moving-brisbane",
    "/moving-gold-coast",
    "/services/removalists",
    "/services/rubbish-removal",
    "/blog",
  ];

  const priorityFor = (route: string) => {
    if (route === "") return 1;
    if (route === "/removalists-brisbane-to-gold-coast") return 0.9;
    return 0.8;
  };

  const staticEntries = routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: priorityFor(route),
  }));

  const postEntries = POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updated + "T00:00:00"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...postEntries];
}
