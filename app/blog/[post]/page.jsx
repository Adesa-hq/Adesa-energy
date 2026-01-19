import { siteConfig } from "@/config/site";
import BlogDetailClient from "./_components/BlogDetailClient";
import { notFound } from "next/navigation";

// Dynamic metadata per post
export async function generateMetadata({ params }) {
  const { post } = params;
  const currentPost = siteConfig.blog.posts.find((p) => p.slug === post);

  if (!currentPost) {
    return {
      title: "Post Not Found - Adesa Energy Blog",
      description: "The post you are looking for does not exist.",
      alternates: {
        canonical: "https://www.adesaenergy.com/blog",
      },
    };
  }

  const ogImageUrl =
    currentPost.ogImage || currentPost.image || "/images/default-og.jpg";

  return {
    title: currentPost.title,
    description: currentPost.excerpt,
    alternates: {
      canonical: `https://www.adesaenergy.com/blog/${currentPost.slug}`,
    },
    openGraph: {
      title: currentPost.title,
      description: currentPost.excerpt,
      url: `https://www.adesaenergy.com/blog/${currentPost.slug}`,
      type: "article",
      images: [ogImageUrl],
    },
    twitter: {
      card: "summary_large_image",
      title: currentPost.title,
      description: currentPost.excerpt,
      images: [ogImageUrl],
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { post } = await params;

  const currentPost = siteConfig.blog.posts.find((p) => p.slug === post);

  if (!currentPost) {
    return notFound();
  }

  return <BlogDetailClient currentPost={currentPost} />;
}
