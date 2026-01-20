"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CtaSection({ cta }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative py-24 px-6 text-center bg-burnt-orange text-white font-heading"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          {cta.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl mb-8 max-w-3xl mx-auto"
        >
          {cta.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
        >
          <a
            href={cta.primaryCTA.href}
            className="px-8 py-4 rounded-full bg-white text-burnt-orange font-semibold border-2 border-white hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-burnt-orange/25"
          >
            {cta.primaryCTA.label}
          </a>
          <Link
            href={cta.secondaryCTA.href}
            className="px-8 py-4 rounded-full bg-transparent text-white font-semibold border-2 border-white hover:bg-white/10 transition-all duration-300"
          >
            {cta.secondaryCTA.label}
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
