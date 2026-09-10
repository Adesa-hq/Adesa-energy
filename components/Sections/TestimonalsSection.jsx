"use client";

import { Star, Quote, MessageSquareHeart } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28 bg-white dark:bg-[#081126] transition-colors relative overflow-hidden"
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
            <MessageSquareHeart className="w-3.5 h-3.5" />
            <span>Verified Customer Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-slate-900 dark:text-white tracking-tight">
            What Our Fleet & Vehicle Owners Say
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg font-sans">
            Real feedback from commercial operators and daily commuters saving significantly with Adesa CNG systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {siteConfig.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-slate-50 dark:bg-[#0E1A38] rounded-3xl p-8 border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className="w-4 h-4 text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-slate-300 dark:text-slate-600/60" />
                </div>

                <p className="text-slate-700 dark:text-slate-200 text-base leading-relaxed mb-6 font-sans">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-200/60 dark:border-white/5">
                <div
                  className={`${testimonial.color} rounded-xl flex items-center justify-center text-white font-bold w-11 h-11 text-base font-heading shadow-sm shrink-0`}
                >
                  {testimonial.initial}
                </div>
                <div>
                  <p className="font-heading font-bold text-slate-900 dark:text-white text-base">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
