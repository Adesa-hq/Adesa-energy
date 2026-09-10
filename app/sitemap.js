import { siteConfig } from "@/config/site";

export default async function sitemap() {
  const baseUrl = siteConfig.url;

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-05-15"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified: new Date("2026-05-20"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/convert`,
      lastModified: new Date("2026-08-29"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-08-29"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/calculator`,
      lastModified: new Date("2026-05-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date("2026-05-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: new Date("2026-04-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date("2026-08-21"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/investors`,
      lastModified: new Date("2026-08-21"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date("2026-08-14"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date("2026-08-14"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: new Date("2026-08-14"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/accessibility`,
      lastModified: new Date("2026-08-14"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const blogPosts = siteConfig.blog.posts.map((post) => {
    const parsedDate = new Date(post.date);

    return {
      url: `${baseUrl}/blog/${post.slug}`,
      ...(Number.isNaN(parsedDate.getTime())
        ? {}
        : { lastModified: parsedDate }),
      changeFrequency: "monthly",
      priority: 0.7,
      images: post.image ? [new URL(post.image, baseUrl).toString()] : undefined,
    };
  });

  return [...staticPages, ...blogPosts];
}
