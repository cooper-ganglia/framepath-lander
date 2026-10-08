export const dynamic = "force-static";
import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "resources"].map((path) => ({
    url: `https://framepath.ai/${path}`,
    changeFrequency: "monthly",
    priority: path ? 0.7 : 1,
  }));
}
