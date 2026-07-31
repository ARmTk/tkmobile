import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { seoPages } from "@/content/seo-pages";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "services", "liquid-damage", "location", "about", "privacy", ...seoPages.map((page) => page.slug)];
  return ["en", "th"].flatMap((locale) =>
    pages.map((page) => ({
      url: `${site.url}/${locale}/${page ? `${page}/` : ""}`,
      lastModified: new Date("2026-07-31"),
      changeFrequency: page === "" ? "weekly" as const : "monthly" as const,
      priority: page === "" ? 1 : page === "privacy" ? .3 : .8,
      alternates: {
        languages: {
          en: `${site.url}/en/${page ? `${page}/` : ""}`,
          th: `${site.url}/th/${page ? `${page}/` : ""}`,
          "x-default": `${site.url}/en/${page ? `${page}/` : ""}`
        }
      }
    }))
  );
}
