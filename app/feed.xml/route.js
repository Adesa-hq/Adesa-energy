import { siteConfig } from "@/config/site";

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function toRfc822(date) {
  const parsedDate = new Date(date);
  return Number.isNaN(parsedDate.getTime())
    ? new Date("2025-01-01T00:00:00.000Z").toUTCString()
    : parsedDate.toUTCString();
}

export function GET() {
  const items = siteConfig.blog.posts
    .map((post) => {
      const url = `${siteConfig.url}/blog/${post.slug}`;
      const content = [post.excerpt, ...(post.content || [])]
        .map((paragraph) => `<p>${escapeXml(paragraph)}</p>`)
        .join("");

      return `
        <item>
          <title>${escapeXml(post.title)}</title>
          <link>${url}</link>
          <guid isPermaLink="true">${url}</guid>
          <pubDate>${toRfc822(post.date)}</pubDate>
          <category>${escapeXml(post.tag || "CNG")}</category>
          <description>${escapeXml(post.excerpt)}</description>
          <content:encoded><![CDATA[${content}]]></content:encoded>
        </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0"
      xmlns:atom="http://www.w3.org/2005/Atom"
      xmlns:content="http://purl.org/rss/1.0/modules/content/">
      <channel>
        <title>${escapeXml(siteConfig.name)} Blog</title>
        <link>${siteConfig.url}/blog</link>
        <description>${escapeXml(siteConfig.description)}</description>
        <language>en-NG</language>
        <atom:link href="${siteConfig.url}/feed.xml" rel="self" type="application/rss+xml" />
        ${items}
      </channel>
    </rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
