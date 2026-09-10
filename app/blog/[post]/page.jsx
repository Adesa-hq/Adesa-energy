import { siteConfig } from "@/config/site";
import BlogDetailClient from "./_components/BlogDetailClient";
import { notFound } from "next/navigation";
import { absoluteUrl, constructMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return siteConfig.blog.posts.map((post) => ({ post: post.slug }));
}

// Dynamic metadata per post
export async function generateMetadata({ params }) {
  const { post } = await params;
  const currentPost = siteConfig?.blog.posts.find((p) => p.slug === post);

  if (!currentPost) {
    return constructMetadata({
      title: "Post Not Found — Adesa Energy Blog",
      description: "The blog post you are looking for does not exist. Browse all CNG articles on the Adesa Energy blog.",
      path: `/blog/${post}`,
      noIndex: true,
    });
  }

  const ogImageUrl =
    currentPost.ogImage || currentPost.image || "/adesa-energy.png";
  const publishedTime = new Date(currentPost.date);

  return constructMetadata({
    title: currentPost.title,
    description: currentPost.excerpt,
    path: `/blog/${currentPost.slug}`,
    image: ogImageUrl,
    type: "article",
    datePublished: Number.isNaN(publishedTime.getTime())
      ? undefined
      : publishedTime.toISOString(),
    dateModified: Number.isNaN(publishedTime.getTime())
      ? undefined
      : publishedTime.toISOString(),
    keywords: [
      "CNG Nigeria",
      "compressed natural gas",
      "fuel savings Nigeria",
      "Adesa Energy",
      currentPost.tag,
      ...(currentPost.tags || []),
    ].filter(Boolean),
  });
}

export default async function BlogDetailPage({ params }) {
  const { post } = await params;

  const currentPost = siteConfig.blog.posts.find((p) => p.slug === post);

  if (!currentPost) {
    return notFound();
  }

  const postImageUrl = absoluteUrl(currentPost.image || "/adesa-energy.png");

  const parseDate = (dateStr) => {
    try {
      const d = new Date(dateStr);
      if (!isNaN(d.getTime())) return d.toISOString();
    } catch (e) {}
    return undefined;
  };

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${siteConfig.url}/blog/${currentPost.slug}/#article`,
    "headline": currentPost.title,
    "description": currentPost.excerpt,
    "image": {
      "@type": "ImageObject",
      "url": postImageUrl,
      "width": 1200,
      "height": 630,
    },
    "datePublished": parseDate(currentPost.date),
    "dateModified": parseDate(currentPost.date),
    "author": {
      "@type": "Organization",
      "name": "Adesa Energy",
      "url": siteConfig.url,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Adesa Energy",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.url}/adesa-energy.png`,
        "width": 400,
        "height": 400,
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${currentPost.slug}`,
    },
    "articleSection": currentPost.tag || "CNG News",
    "wordCount": [currentPost.excerpt, ...(currentPost.content || [])]
      .join(" ")
      .trim()
      .split(/\s+/)
      .filter(Boolean).length,
    "keywords": ["CNG Nigeria", "fuel savings", "Adesa Energy", currentPost.tag].filter(Boolean),
    "inLanguage": "en-NG",
    "isPartOf": {
      "@type": "Blog",
      "@id": `${siteConfig.url}/blog/#blog`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": siteConfig.url },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${siteConfig.url}/blog` },
      { "@type": "ListItem", "position": 3, "name": currentPost.title, "item": `${siteConfig.url}/blog/${currentPost.slug}` },
    ],
  };

  return (
    <>
      <BlogDetailClient currentPost={currentPost} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([blogSchema, breadcrumbSchema]) }}
      />
    </>
  );
}
