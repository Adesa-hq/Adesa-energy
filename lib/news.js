import "server-only";

import { createHash } from "node:crypto";
import { z } from "zod";

const NEWS_REVALIDATE_SECONDS = 15 * 60;
const NEWS_REQUEST_TIMEOUT_MS = 5000;

const GOOGLE_NEWS_ENDPOINT = "https://news.google.com/rss/search";
const BING_NEWS_ENDPOINT = "https://www.bing.com/news/search";

const rssItemSchema = z.object({
  title: z.string().min(12),
  link: z.string().min(1),
  publishedAt: z.string().min(1),
  source: z.string().min(1),
});

const liveNewsArticleSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(12),
  url: z.string().url().startsWith("https://"),
  source: z.string().min(1),
  publishedAt: z.string().datetime(),
  topic: z.enum(["CNG & gas", "Fuel market", "Transport", "Energy"]),
});

function decodeXml(value = "") {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/&#x([0-9a-f]+);/gi, (_, code) =>
      String.fromCodePoint(Number.parseInt(code, 16)),
    )
    .replace(/&#(\d+);/g, (_, code) =>
      String.fromCodePoint(Number.parseInt(code, 10)),
    )
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function readXmlTag(block, tagName) {
  const match = block.match(
    new RegExp(`<${tagName}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tagName}>`, "i"),
  );

  return match ? decodeXml(match[1]) : "";
}

function getTopic(title) {
  const normalizedTitle = title.toLowerCase();

  if (
    normalizedTitle.includes("cng") ||
    normalizedTitle.includes("compressed natural gas") ||
    normalizedTitle.includes("natural gas")
  ) {
    return "CNG & gas";
  }

  if (
    normalizedTitle.includes("petrol") ||
    normalizedTitle.includes("diesel") ||
    normalizedTitle.includes("fuel")
  ) {
    return "Fuel market";
  }

  if (
    normalizedTitle.includes("transport") ||
    normalizedTitle.includes("vehicle") ||
    normalizedTitle.includes("mobility")
  ) {
    return "Transport";
  }

  return "Energy";
}

function getCanonicalUrl(link) {
  let parsedUrl;

  try {
    parsedUrl = new URL(link);
  } catch {
    return null;
  }

  if (parsedUrl.hostname.endsWith("bing.com")) {
    const publisherUrl = parsedUrl.searchParams.get("url");
    if (publisherUrl) {
      try {
        parsedUrl = new URL(publisherUrl);
      } catch {
        return null;
      }
    }
  }

  return parsedUrl.protocol === "https:" ? parsedUrl.href : null;
}

function normalizeRssItem(item) {
  const parsedItem = rssItemSchema.safeParse(item);
  if (!parsedItem.success) return null;

  const url = getCanonicalUrl(parsedItem.data.link);
  if (!url) return null;

  const date = new Date(parsedItem.data.publishedAt);
  if (Number.isNaN(date.getTime())) return null;

  const source = parsedItem.data.source.replace(/^www\./, "").trim();
  const sourceSuffix = ` - ${source}`;
  const title = parsedItem.data.title.endsWith(sourceSuffix)
    ? parsedItem.data.title.slice(0, -sourceSuffix.length).trim()
    : parsedItem.data.title;

  return liveNewsArticleSchema.parse({
    id: createHash("sha256").update(url).digest("hex").slice(0, 16),
    title,
    url,
    source,
    publishedAt: date.toISOString(),
    topic: getTopic(title),
  });
}

function parseRssFeed(xml, sourceTag) {
  const itemBlocks = xml.match(/<item(?:\s[^>]*)?>[\s\S]*?<\/item>/gi) || [];

  return itemBlocks
    .map((block) =>
      normalizeRssItem({
        title: readXmlTag(block, "title"),
        link: readXmlTag(block, "link"),
        publishedAt: readXmlTag(block, "pubDate"),
        source: readXmlTag(block, sourceTag),
      }),
    )
    .filter(Boolean);
}

async function fetchRssFeed(url, sourceTag) {
  const response = await fetch(url, {
    headers: {
      Accept: "application/rss+xml, application/xml;q=0.9, text/xml;q=0.8",
      "User-Agent": "AdesaEnergyNews/1.0 (+https://www.adesaenergy.com)",
    },
    next: { revalidate: NEWS_REVALIDATE_SECONDS },
    signal: AbortSignal.timeout(NEWS_REQUEST_TIMEOUT_MS),
  });

  if (!response.ok) {
    throw new Error(`News feed request failed with status ${response.status}`);
  }

  return parseRssFeed(await response.text(), sourceTag);
}

function getGoogleNewsUrl() {
  const params = new URLSearchParams({
    q: '("Nigeria CNG" OR "Nigeria natural gas" OR "Nigeria clean energy" OR "Nigeria fuel")',
    hl: "en-NG",
    gl: "NG",
    ceid: "NG:en",
  });

  return `${GOOGLE_NEWS_ENDPOINT}?${params.toString()}`;
}

function getBingNewsUrl() {
  const params = new URLSearchParams({
    q: "Nigeria CNG energy",
    format: "rss",
    count: "30",
  });

  return `${BING_NEWS_ENDPOINT}?${params.toString()}`;
}

export async function getNigeriaEnergyNews({ limit = 9 } = {}) {
  const safeLimit = Math.min(Math.max(Number(limit) || 9, 1), 24);
  const providerResults = await Promise.allSettled([
    fetchRssFeed(getGoogleNewsUrl(), "source"),
    fetchRssFeed(getBingNewsUrl(), "News:Source"),
  ]);

  const seenUrls = new Set();
  const articles = providerResults
    .filter((result) => result.status === "fulfilled")
    .flatMap((result) => result.value)
    .filter((article) => {
      if (seenUrls.has(article.url)) return false;
      seenUrls.add(article.url);
      return true;
    })
    .sort(
      (first, second) =>
        new Date(second.publishedAt).getTime() -
        new Date(first.publishedAt).getTime(),
    )
    .slice(0, safeLimit);

  if (articles.length === 0) {
    console.warn(
      "Nigeria energy news providers are temporarily unavailable; showing fallback content.",
    );
  }

  return { articles, unavailable: articles.length === 0 };
}
