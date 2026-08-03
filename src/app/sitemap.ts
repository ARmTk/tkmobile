import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { seoPages } from "@/content/seo-pages";
import { guides } from "@/content/guides";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "services", "liquid-damage", "location", "about", "privacy", "guides", ...seoPages.map((page) => page.slug), ...guides.map((guide) => `guides/${guide.slug}`)];
  return ["en", "th"].flatMap((locale) =>
    pages.map((page) => ({
      url: `${site.url}/${locale}/${page ? `${page}/` : ""}`,
      lastModified: new Date("2026-08-03"),
      changeFrequency: page === "" || page === "guides" ? "weekly" as const : "monthly" as const,
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
