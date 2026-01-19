"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const BlogDetailClient = ({ currentPost }) => {
  const router = useRouter();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white dark:bg-charcoal-gray py-24 min-h-screen"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-500 dark:text-gray-400">
          <span
            className="cursor-pointer hover:underline"
            onClick={() => router.push("/blog")}
          >
            Blog
          </span>
          <span> / </span>
          <span className="text-gray-700 dark:text-burnt-orange font-semibold">
            {currentPost.title}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-heading font-bold text-4xl md:text-5xl text-deep-blue dark:text-light-blue mb-6">
          {currentPost.title}
        </h1>

        {/* Meta info */}
        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-12">
          <span className={`px-3 py-1 rounded-full ${currentPost.tagStyle}`}>
            {currentPost.tag}
          </span>
          <span>{currentPost.date}</span>
        </div>

        {/* Featured image / icon */}
        <div
          className={`h-64 bg-linear-to-br ${currentPost.gradient} flex items-center justify-center rounded-2xl mb-12`}
        >
          <currentPost.icon className={`w-16 h-16 ${currentPost.iconColor}`} />
        </div>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 mb-16">
          <p>{currentPost.excerpt}</p>
          {currentPost.content &&
            currentPost.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
        </div>

        {/* Back button */}
        <button
          onClick={() => router.push("/blog")}
          className="inline-flex items-center px-6 py-3 rounded-full bg-burnt-orange text-white font-heading font-semibold hover:opacity-90 transition-opacity"
        >
          Back to Blog
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </motion.section>
  );
};

export default BlogDetailClient;
