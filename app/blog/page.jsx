import BlogSection from "@/components/Sections/BlogSection";
import LiveNewsSection from "@/components/Sections/LiveNewsSection";
import { siteConfig } from "@/config/site";
import { adesaPressArticles } from "@/lib/press";
import { getNigeriaEnergyNews } from "@/lib/news";

const pressPosts = adesaPressArticles.map((article) => ({
  slug: article.id,
  title: article.title,
  url: article.url,
  source: article.source,
  excerpt: `Read ${article.source}'s coverage of Adesa Energy and its work towards cleaner mobility in Nigeria.`,
  tag: "Company news",
  tagStyle: "bg-burnt-orange/10 text-burnt-orange",
  date: article.publishedAt
    ? new Intl.DateTimeFormat("en-NG", { day: "numeric", month: "short", year: "numeric", timeZone: "Africa/Lagos" }).format(new Date(article.publishedAt))
    : article.source,
  image: article.image,
}));

export default async function BlogPage({ searchParams }) {
  const params = await searchParams;
  const liveNews = await getNigeriaEnergyNews({ limit: 9 });

  return (
    <div className="min-w-0">
      <h1 className="sr-only">Adesa Energy Blog — CNG Insights, News &amp; Guides</h1>
      <LiveNewsSection articles={[...liveNews.articles, ...adesaPressArticles]} unavailable={liveNews.unavailable} variant="page" />
      <BlogSection
        editorialPosts={[...siteConfig.blog.posts, ...pressPosts]}
        initialTag={params?.tag}
        variant="page"
      />
    </div>
  );
}
