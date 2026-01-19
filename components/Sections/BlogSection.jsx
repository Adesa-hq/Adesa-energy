"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { usePathname, useRouter } from "next/navigation";
import { useState, useMemo } from "react";
import Image from "next/image";

const POSTS_PER_PAGE = 8;

const BlogSection = () => {
  const pathname = usePathname();
  const router = useRouter();
  const isBlogPage = pathname === "/blog";
  const isHome = !isBlogPage;

  const { section, posts } = siteConfig.blog;

  const featuredPost = isBlogPage ? posts[0] : null;
  const restPosts = isBlogPage ? posts.slice(1) : posts;

  const tags = useMemo(
    () => ["All", ...new Set(posts.map((p) => p.tag))],
    [posts],
  );

  const [activeTag, setActiveTag] = useState("All");
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const filteredPosts = useMemo(() => {
    if (activeTag === "All") return restPosts;
    return restPosts.filter((p) => p.tag === activeTag);
  }, [activeTag, restPosts]);

  const visiblePosts = isBlogPage
    ? filteredPosts.slice(0, visibleCount)
    : posts;

  const renderPostImage = (post) => {
    if (post.image) {
      return (
        <Image
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
          width={400}
          height={300}
          priority={true}
        />
      );
    } else if (post.icon) {
      const Icon = siteConfig.icons[post.icon] || (() => null);
      return <Icon className={`w-10 h-10 ${post.iconColor}`} />;
    }
    return null;
  };

  return (
    <motion.section
      id={section.id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`bg-white dark:bg-charcoal-gray ${isBlogPage ? "py-24 min-h-screen" : "py-20"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`flex flex-col gap-4 ${
            isBlogPage
              ? "mb-16 max-w-3xl"
              : "md:flex-row md:items-end md:justify-between mb-12"
          }`}
        >
          <div>
            <p className="text-burnt-orange font-semibold mb-2 font-sans uppercase tracking-wider">
              {section.eyebrow}
            </p>
            <h2
              className={`font-heading font-bold text-deep-blue dark:text-white ${
                isBlogPage
                  ? "text-4xl md:text-5xl leading-tight"
                  : "text-3xl md:text-4xl"
              }`}
            >
              {section.title}
            </h2>
          </div>

          {isHome && (
            <motion.button
              whileHover={{ x: 5 }}
              onClick={() => router.push("/blog")}
              className="text-burnt-orange font-heading font-semibold hover:underline inline-flex items-center mt-4 md:mt-0"
            >
              {section.cta.label}
              <ArrowRight className="w-4 h-4 ml-2" />
            </motion.button>
          )}
        </div>

        {/* Featured post */}
        {isBlogPage && featuredPost && (
          <motion.article
            whileHover={{ y: -4 }}
            onClick={() => router.push(`/blog/${featuredPost.slug}`)}
            className="cursor-pointer mb-20 grid md:grid-cols-2 gap-8 rounded-2xl border border-gray-200 dark:border-charcoal-gray overflow-hidden hover:shadow-xl"
          >
            <div
              className={`min-h-65 bg-linear-to-br ${featuredPost.gradient} flex items-center justify-center`}
            >
              {renderPostImage(featuredPost)}
            </div>

            <div className="p-8 flex flex-col justify-center">
              <span
                className={`inline-block w-fit px-3 py-1 rounded-full text-sm font-medium mb-4 ${featuredPost.tagStyle}`}
              >
                {featuredPost.tag}
              </span>

              <h3 className="text-2xl font-heading font-bold text-deep-blue dark:text-white mb-4">
                {featuredPost.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <span
                onClick={() => router.push(`/blog/${featuredPost.slug}`)}
                className="text-burnt-orange font-heading font-semibold inline-flex items-center"
              >
                Read article
                <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            </div>
          </motion.article>
        )}

        {/* Tag filter */}
        {isBlogPage && (
          <div className="flex flex-wrap gap-3 mb-12">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setActiveTag(tag);
                  setVisibleCount(POSTS_PER_PAGE);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  activeTag === tag
                    ? "bg-burnt-orange text-white border-burnt-orange"
                    : "border-gray-300 dark:border-charcoal-gray text-deep-blue dark:text-gray-300 hover:border-burnt-orange"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {/* Grid */}
        <div
          className={`grid gap-8 ${isBlogPage ? "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3"}`}
        >
          {visiblePosts.map((post, index) => (
            <motion.article
              key={index}
              whileHover={{ y: -4 }}
              onClick={() => router.push(`/blog/${post.slug}`)}
              className={`bg-white dark:bg-dark-blue rounded-2xl overflow-hidden border border-gray-200 dark:border-charcoal-gray transition-all ${
                isBlogPage ? "cursor-pointer" : ""
              }`}
            >
              <div
                className={`h-48 bg-linear-to-br ${post.gradient} flex items-center justify-center`}
              >
                {renderPostImage(post)}
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm mb-3">
                  <span
                    className={`px-3 py-1 rounded-full font-medium ${post.tagStyle}`}
                  >
                    {post.tag}
                  </span>
                  <span className="text-burnt-orange">{post.date}</span>
                </div>

                <h3 className="text-xl font-heading font-semibold text-deep-blue dark:text-white mb-3">
                  {post.title}
                </h3>

                <p
                  className={`text-gray-600 dark:text-gray-300 leading-relaxed ${isBlogPage ? "mb-4" : "mb-4 line-clamp-3"}`}
                >
                  {post.excerpt}
                </p>

                {isHome && (
                  <span
                    onClick={() => router.push(`/blog/${post.slug}`)}
                    className="text-burnt-orange font-heading font-semibold inline-flex items-center"
                  >
                    Read more
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load more */}
        {isBlogPage && visibleCount < filteredPosts.length && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setVisibleCount((v) => v + POSTS_PER_PAGE)}
              className="px-8 py-3 rounded-full bg-burnt-orange text-white font-heading font-semibold hover:opacity-90 transition-opacity"
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default BlogSection;
