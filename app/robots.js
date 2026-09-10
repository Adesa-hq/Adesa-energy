import { siteConfig } from "@/config/site";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/_next/static/",  // Allow Next.js static assets (JS, CSS, fonts, images)
          "/_next/image/",   // Allow Next.js image optimization URLs
        ],
        disallow: [
          "/api/",
          "/_next/data/",                  // Server-side data payloads — not useful to index
          "/*_buildManifest.js$",          // Internal Next.js build manifests
          "/*_middlewareManifest.js$",
          "/*_ssgManifest.js$",
          "/favicon.ico?*",               // Block query-string favicon variants (fixes GSC "crawled not indexed" noise)
        ],
      },
      {
        userAgent: "Googlebot",
        allow: ["/", "/_next/static/", "/_next/image/"],
        disallow: ["/api/", "/_next/data/", "/favicon.ico?*"],
      },
      {
        userAgent: "Bingbot",
        allow: ["/", "/_next/static/", "/_next/image/"],
        disallow: ["/api/", "/_next/data/", "/favicon.ico?*"],
      },
      {
        userAgent: "Applebot",
        allow: ["/", "/_next/static/", "/_next/image/"],
        disallow: ["/api/", "/_next/data/"],
      },
      {
        userAgent: "DuckDuckBot",
        allow: ["/", "/_next/static/", "/_next/image/"],
        disallow: ["/api/", "/_next/data/"],
      },
      {
        userAgent: "OAI-SearchBot",
        allow: ["/", "/_next/static/", "/_next/image/"],
        disallow: ["/api/", "/_next/data/"],
      },
      {
        userAgent: "PerplexityBot",
        allow: ["/", "/_next/static/", "/_next/image/"],
        disallow: ["/api/", "/_next/data/"],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
