import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

/**
 * AI ALLOWLIST stratejisi — Akar Hurda v4 plan kararı.
 * AEO/GEO citation eligibility için tüm AI bot'lara izin verilir.
 * Domain authority ve AI Overviews görünürlüğü hedefleri.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // AI crawlers explicitly allowed
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "applebot", allow: "/" },
      { userAgent: "applebot-extended", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
