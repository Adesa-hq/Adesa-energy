"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function JobsSection({ jobs }) {
  const sectionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 * i, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <motion.section
      id="jobs"
      variants={sectionVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="py-24 px-6 bg-light-blue/5 dark:bg-deep-blue text-center font-sans"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-heading font-bold text-foreground dark:text-burnt-orange mb-4"
        >
          {jobs.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-foreground/80 mb-16 max-w-3xl mx-auto"
        >
          {jobs.subtitle}
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobs.jobListings.map((job, idx) => (
            <motion.div
              key={job.id}
              custom={idx}
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="border-2 border-burnt-orange/30 rounded-2xl p-8 text-left bg-card hover:shadow-xl transition-all duration-300"
            >
              <motion.h3
                whileHover={{ x: 5 }}
                className="text-2xl font-heading font-bold text-foreground mb-2"
              >
                {job.title}
              </motion.h3>
              <p className="text-burnt-orange font-semibold mb-3">
                {job.department} | {job.type} | {job.location}
              </p>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                {job.description}
              </p>
              <motion.div
                whileHover={{ x: 5 }}
                className="inline-flex items-center font-heading font-semibold text-burnt-orange hover:text-burnt-orange/80"
              >
                <Link href={job.href} className="flex items-center">
                  {jobs.viewAllLabel} <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
