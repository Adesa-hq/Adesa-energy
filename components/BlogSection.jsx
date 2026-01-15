"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

const BlogSection = () => {
  const blogConfig = siteConfig.blog
  const { section, posts } = blogConfig;

  return (
    <motion.section
      id={section.id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 bg-white dark:bg-charcoal-gray "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="text-burnt-orange font-semibold mb-2 font-sans uppercase tracking-wider">
              {section.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-deep-blue dark:text-white">
              {section.title}
            </h2>
          </div>

          <motion.button
            whileHover={{ x: 5 }}
            className="text-burnt-orange font-heading font-semibold hover:underline inline-flex items-center mt-4 md:mt-0 focus:outline-none focus:ring-2 focus:ring-burnt-orange focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-charcoal-gray transition-colors"
            aria-label={section.cta.ariaLabel}
          >
            {section.cta.label}
            <ArrowRight className="w-4 h-4 ml-2" />
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-dark-blue rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-charcoal-gray hover:border-burnt-orange/50 dark:hover:border-burnt-orange/30"
            >
              <div
                className={`h-48 bg-linear-to-br ${post.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-grid-pattern" />
                </div>

                <div
                  className={`w-20 h-20 rounded-2xl ${post.iconBg} flex items-center justify-center`}
                >
                  <post.icon className={`w-8 h-8 ${post.iconColor}`} />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-charcoal-gray dark:text-gray-300 mb-3 font-sans">
                  <span
                    className={`px-3 py-1 rounded-full font-medium ${post.tagStyle} font-sans`}
                  >
                    {post.tag}
                  </span>
                  <span className="text-gray-500">{post.date}</span>
                </div>

                <h3 className="text-xl font-heading font-semibold text-deep-blue dark:text-white mb-3 hover:text-burnt-orange transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 font-sans leading-relaxed">
                  {post.excerpt}
                </p>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-burnt-orange font-heading font-semibold hover:text-[#d15e15] inline-flex items-center focus:outline-none focus:ring-2 focus:ring-burnt-orange focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-dark-blue transition-colors"
                  aria-label={`Read more about ${post.title}`}
                >
                  Read more
                  <ArrowRight className="w-4 h-4 ml-1" />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default BlogSection;
