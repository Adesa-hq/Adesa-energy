"use client";

import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Users, Lightbulb, Award, Zap } from "lucide-react";
import Link from "next/link";

export default function CareerSection() {
  const { hero, about, jobs, benefits, culture, cta } = siteConfig.careers;

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
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 * index, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <div className="w-full font-sans">
      {/* Hero Section */}
      <motion.section
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
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

      {/* About Section */}
      <motion.section
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-24 px-6 bg-background dark:bg-charcoal-gray text-center font-sans"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-heading font-bold text-foreground dark:text-burnt-orange mb-4"
          >
            {about.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground/80 mb-16 max-w-3xl mx-auto"
          >
            {about.subtitle}
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {about.features.map((feature, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-8 bg-card rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 dark:shadow-burnt-orange/10"
              >
                <div className="w-16 h-16 rounded-full bg-burnt-orange/10 flex items-center justify-center mb-6">
                  {idx === 0 && <Users className="w-8 h-8 text-burnt-orange" />}
                  {idx === 1 && <Heart className="w-8 h-8 text-burnt-orange" />}
                  {idx === 2 && (
                    <Lightbulb className="w-8 h-8 text-burnt-orange" />
                  )}
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Jobs Section */}
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

      {/* Benefits Section */}
      <motion.section
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-24 px-6 bg-background dark:bg-charcoal-gray text-center font-sans"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-heading font-bold text-foreground dark:text-burnt-orange mb-16"
          >
            Our Benefits
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-6"
              >
                <div className="w-14 h-14 rounded-full bg-burnt-orange/10 flex items-center justify-center mb-5">
                  {idx === 0 && <Heart className="w-7 h-7 text-burnt-orange" />}
                  {idx === 1 && <Zap className="w-7 h-7 text-burnt-orange" />}
                  {idx === 2 && <Award className="w-7 h-7 text-burnt-orange" />}
                  {idx === 3 && <Users className="w-7 h-7 text-burnt-orange" />}
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-foreground/80">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Culture Section */}
      <motion.section
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-24 px-6 bg-deep-blue/5 dark:bg-charcoal-gray dark:text-burnt-orange text-center font-sans"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-16"
          >
            Our Culture
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {culture.map((item, idx) => (
              <motion.blockquote
                key={item.id}
                custom={idx}
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="bg-card p-8 rounded-2xl shadow-md border-l-4 border-burnt-orange text-left"
              >
                <p className="font-heading italic text-xl md:text-2xl text-foreground mb-4 relative pl-6">
                  <span className="absolute left-0 top-0 text-burnt-orange text-4xl">
                    &quot;
                  </span>
                  {item.quote}
                </p>
                <footer className="font-bold text-burnt-orange">
                  {item.author},{" "}
                  <span className="text-foreground/80 font-normal">
                    {item.role}
                  </span>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA + Email Apply */}
      <motion.section
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
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
    </div>
  );
}
