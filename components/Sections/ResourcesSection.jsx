"use client";

import { Download, ChevronDown, ListCheck, HelpCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const ResourcesSection = () => {
  const resourcesConfig = siteConfig.resources;
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const { section, faqs, cta, cta1, cta2 } = resourcesConfig;

  return (
    <section
      id={section.id}
      className="py-20 lg:py-28 bg-slate-50 dark:bg-[#060b17] transition-colors relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-burnt-orange/10 border border-burnt-orange/20 text-burnt-orange font-semibold text-xs uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{section.tag || "Resources & Knowledge"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-slate-900 dark:text-white tracking-tight">
            {section.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg font-sans">
            {section.subtitle}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white dark:bg-[#0E1A38] border-burnt-orange/30 shadow-md"
                    : "bg-white dark:bg-[#0E1A38]/70 border-slate-200/80 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none cursor-pointer gap-4"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? "bg-burnt-orange text-white"
                        : "bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300"
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-5 sm:px-6 pb-6 overflow-hidden"
                      id={`faq-answer-${index}`}
                    >
                      <p className="text-slate-600 dark:text-slate-300 font-sans leading-relaxed text-sm sm:text-base pt-2 border-t border-slate-100 dark:border-white/5">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}

          {/* Download & Conversion Resource Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 bg-linear-to-br from-[#0B1530] via-[#0E1A38] to-[#13224A] rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden border border-white/10 shadow-xl"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                {cta.title}
              </h3>
              <p className="text-slate-300 font-sans max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
                {cta.description}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link
                  href={cta1.href}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-linear-to-r from-[#F37621] to-[#F59E0B] hover:shadow-orange-500/30 text-white px-7 py-3.5 rounded-xl font-heading font-bold text-sm shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>{cta1.buttonText}</span>
                  <ListCheck className="w-4 h-4" />
                </Link>

                <Link
                  href={cta2.href}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 px-7 py-3.5 rounded-xl font-heading font-semibold text-sm backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>{cta2.buttonText}</span>
                  <Download className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
