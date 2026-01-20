"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection({ hero }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative py-24 px-6 text-center bg-deep-blue text-white font-heading"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          {hero.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl mb-8 max-w-3xl mx-auto"
        >
          {hero.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
        >
          <Link
            href={hero.primaryCTA.href}
            className="px-8 py-4 rounded-full bg-burnt-orange text-white font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-burnt-orange/25"
          >
            {hero.primaryCTA.label}
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
