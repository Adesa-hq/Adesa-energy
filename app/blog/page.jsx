import BlogSection from "@/components/Sections/BlogSection";
import { getPosts } from "@/lib/posts";

export const metadata = {
  title: "Adesa Energy Blog",
  description:
    "Insights on CNG conversion, fuel savings, and transport efficiency.",
  alternates: {
    canonical: "https://www.adesaenergy.com/blog",
  },
};

export default async function BlogPage({ searchParams }) {
  const page = Number(searchParams.page || 1);
  const tag = searchParams.tag || null;

  const { posts, totalPages } = await getPosts({ page, tag });

  return (
    <div className="mt-10">
      <BlogSection
        serverPosts={posts}
        totalPages={totalPages}
        currentPage={page}
      />
    </div>
  );
}
