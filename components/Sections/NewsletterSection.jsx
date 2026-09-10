"use client";

import { motion } from "framer-motion";
import { Send, Sparkles, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";

const NewsletterSection = ({
  title,
  description,
  href,
  buttonText = "Subscribe on LinkedIn",
  icon = true,
  className = "",
}) => {
  const { newsletter } = siteConfig;

  return (
    <section className="w-full bg-slate-50 dark:bg-[#060b17] py-12 lg:py-16 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl bg-linear-to-br from-[#0B1530] via-[#0E1A38] to-[#13224A] p-8 sm:p-12 text-center text-white border border-white/10 shadow-2xl overflow-hidden"
        >
          {/* Ambient blur */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-amber-300 font-semibold text-xs uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{title || newsletter.title}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white tracking-tight">
              Stay Ahead of Energy Cost Shifts & CNG Insights
            </h3>

            <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
              {description || newsletter.description}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href={href || newsletter.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-linear-to-r from-[#F37621] to-[#F59E0B] text-white px-8 py-3.5 rounded-xl font-heading font-bold text-sm shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all cursor-pointer"
              >
                <span>{buttonText}</span>
                {icon && <Send className="w-4 h-4" />}
              </motion.a>
            </div>

            <div className="pt-2 flex items-center justify-center gap-2 text-xs text-slate-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Official Adesa Energy Publication • No spam, unsubscribe anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;