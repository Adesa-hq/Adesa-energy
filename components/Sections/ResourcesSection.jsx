"use client";

import { Download, ChevronDown, ArrowBigRight, ListCheck, Book } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import Link from "next/link";


const ResourcesSection = () => {
  const resourcesConfig = siteConfig.resources;
  const [openIndex, setOpenIndex] = useState(null);
  
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const { section, faqs, cta, cta1, cta2, cta3 } = resourcesConfig;

  return (
    <motion.section
      id={section.id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 bg-gray-50 dark:bg-charcoal-gray"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-burnt-orange font-semibold mb-2 font-sans uppercase tracking-wider">
            {section.tag}
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-deep-blue dark:text-white mb-4">
            {section.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-sans">
            {section.subtitle}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-blue rounded-xl shadow-sm overflow-hidden border border-gray-200 dark:border-charcoal-gray"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-burnt-orange focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-dark-blue"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-heading font-semibold text-deep-blue dark:text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-burnt-orange transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 overflow-hidden"
                      id={`faq-answer-${index}`}
                    >
                      <p className="text-gray-600 dark:text-gray-300 font-sans leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 bg-linear-to-br from-deep-blue to-dark-blue rounded-2xl p-8 text-center relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-heading font-semibold text-white mb-4">
                {cta.title}
              </h3>
              <p className="text-gray-300 mb-6 font-sans max-w-2xl mx-auto">
                {cta.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Top 2 buttons */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center bg-burnt-orange hover:bg-[#d15e15] text-white px-8 py-4 rounded-lg font-heading font-semibold transition focus:outline-none focus:ring-2 focus:ring-burnt-orange focus:ring-offset-2 focus:ring-offset-deep-blue"
                  aria-label={cta1.ariaLabel}
                >
                  <Link href={cta1.href} className="flex items-center gap-2">
                    {cta1.buttonText}
                   <ListCheck />
                  </Link>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center bg-burnt-orange hover:bg-[#d15e15] text-white px-8 py-4 rounded-lg font-heading font-semibold transition focus:outline-none focus:ring-2 focus:ring-burnt-orange focus:ring-offset-2 focus:ring-offset-deep-blue"
                  aria-label={cta2.ariaLabel}
                >
                  <Link href={cta2.href} className="flex items-center gap-2">
                    {cta2.buttonText}
                    <Download />
                  </Link>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ResourcesSection;
