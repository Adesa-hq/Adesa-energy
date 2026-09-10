"use client";

import { ArrowRight, BookOpen, Calendar } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { siteConfig } from "@/config/site";

const POSTS_PER_PAGE = 8;

export default function BlogSection({
  editorialPosts = siteConfig.blog.posts,
  variant = "page",
}) {
  const isBlogPage = variant === "page";
  const reduceMotion = useReducedMotion();
  const featuredPost = isBlogPage ? editorialPosts[0] : null;
  const restPosts = isBlogPage ? editorialPosts.slice(1) : editorialPosts;
  const tags = useMemo(
    () => ["All", ...new Set(editorialPosts.map((post) => post.tag))],
    [editorialPosts],
  );
  const [activeTag, setActiveTag] = useState("All");
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const filteredPosts = useMemo(() => {
    if (activeTag === "All") return restPosts;
    return restPosts.filter((post) => post.tag === activeTag);
  }, [activeTag, restPosts]);

  const visiblePosts = isBlogPage
    ? filteredPosts.slice(0, visibleCount)
    : editorialPosts.slice(0, 3);

  return (
    <section
      id={siteConfig.blog.section.id}
      aria-labelledby={`editorial-title-${variant}`}
      className={`relative overflow-hidden bg-white transition-colors dark:bg-[#081126] ${
        isBlogPage ? "py-16 sm:py-20 lg:py-24" : "py-16 sm:py-20"
      }`}
    >
      <div className="site-container">
        <header className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-burnt-orange/20 bg-burnt-orange/10 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-burnt-orange">
              <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
              Insights from Adesa
            </div>
            <h2
              id={`editorial-title-${variant}`}
              className="text-balance font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl"
            >
              Practical guidance for a cleaner, lower-cost journey
            </h2>
          </div>

          {!isBlogPage && (
            <Link
              href="/blog"
              className="touch-target inline-flex items-center gap-2 self-start font-heading text-sm font-bold text-burnt-orange transition-colors hover:text-[#d15e15] md:self-auto"
            >
              View all insights
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
        </header>

        {isBlogPage && featuredPost && (
          <Link href={`/blog/${featuredPost.slug}`} className="group mb-12 block md:mb-16">
            <motion.article
              initial={
                reduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, transform: "translateY(20px)" }
              }
              animate={{ opacity: 1, transform: "translateY(0)" }}
              transition={{ duration: 0.5 }}
              className="grid overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-50 shadow-sm transition-[box-shadow,border-color] duration-300 hover:border-burnt-orange/30 hover:shadow-2xl dark:border-white/10 dark:bg-[#0E1A38] md:grid-cols-2"
            >
              <div className="relative min-h-64 overflow-hidden bg-slate-900 sm:min-h-72">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/55 via-transparent to-transparent" />
              </div>

              <div className="flex flex-col justify-center space-y-4 p-6 sm:p-8 lg:p-10">
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className={`rounded-full px-3 py-1 font-semibold ${featuredPost.tagStyle}`}>
                    {featuredPost.tag}
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                    <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                    {featuredPost.date}
                  </span>
                </div>
                <h3 className="text-pretty font-heading text-2xl font-bold leading-tight text-slate-900 transition-colors group-hover:text-burnt-orange dark:text-white sm:text-3xl">
                  {featuredPost.title}
                </h3>
                <p className="text-pretty text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
                  {featuredPost.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 pt-2 font-heading text-sm font-bold text-burnt-orange">
                  Read Adesa insight
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </motion.article>
          </Link>
        )}

        {isBlogPage && (
          <div className="mb-10 flex max-w-full gap-2.5 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible">
            {tags.map((tag) => {
              const isActive = activeTag === tag;
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => {
                    setActiveTag(tag);
                    setVisibleCount(POSTS_PER_PAGE);
                  }}
                  className={`touch-target shrink-0 rounded-xl px-4 py-2 text-xs font-semibold transition-[background-color,color,border-color,box-shadow] sm:text-sm ${
                    isActive
                      ? "bg-burnt-orange text-white shadow-md shadow-orange-500/20"
                      : "border border-slate-200/80 bg-slate-100 text-slate-700 hover:bg-slate-200 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {visiblePosts.map((post, index) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group min-w-0">
              <motion.article
                initial={
                  reduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, transform: "translateY(18px)" }
                }
                whileInView={{ opacity: 1, transform: "translateY(0)" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-50 shadow-sm transition-[box-shadow,border-color] duration-300 group-hover:border-burnt-orange/30 group-hover:shadow-xl dark:border-white/10 dark:bg-[#0E1A38]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/45 via-transparent to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className={`rounded-full px-2.5 py-1 font-semibold ${post.tagStyle}`}>
                      {post.tag}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400">{post.date}</span>
                  </div>
                  <h3 className="text-pretty font-heading text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-burnt-orange dark:text-white sm:text-xl">
                    {post.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {post.excerpt}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 font-heading text-sm font-bold text-burnt-orange">
                    Read article
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>

        {isBlogPage && visibleCount < filteredPosts.length && (
          <div className="mt-12 flex justify-center sm:mt-16">
            <button
              type="button"
              onClick={() => setVisibleCount((count) => count + POSTS_PER_PAGE)}
              className="touch-target rounded-xl bg-burnt-orange px-8 py-3.5 font-heading text-sm font-bold text-white shadow-md transition-[background-color,transform] hover:bg-[#d15e15] active:scale-[0.98]"
            >
              Load more insights
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
