"use client";

import { Wallet, Leaf, ShieldCheck, Settings, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

const iconMap = {
  Wallet,
  Leaf,
  ShieldCheck,
  Settings,
};

const iconGradients = [
  "from-amber-500/20 to-orange-500/20 text-burnt-orange dark:text-amber-400 border-amber-500/30",
  "from-emerald-500/20 to-teal-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
  "from-sky-500/20 to-blue-500/20 text-sky-600 dark:text-sky-400 border-sky-500/30",
  "from-indigo-500/20 to-purple-500/20 text-indigo-600 dark:text-indigo-400 border-indigo-500/30",
];

const FeaturesSection = () => {
  const { tagline, headline, items } = siteConfig.features;

  return (
    <section
      id="features"
      className="py-20 lg:py-28 bg-slate-50 dark:bg-[#060b17] relative overflow-hidden transition-colors"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-500/5 dark:bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-burnt-orange/10 border border-burnt-orange/20 text-burnt-orange font-semibold text-xs uppercase tracking-wider">
            <span>{tagline}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-slate-900 dark:text-white tracking-tight">
            {headline}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Engineering sustainable CNG systems with zero compromise on vehicle safety, performance, or convenience.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {items.map((item, index) => {
            const Icon = iconMap[item.icon] || Wallet;
            const gradientStyle = iconGradients[index % iconGradients.length];

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative p-7 rounded-3xl bg-white dark:bg-[#0E1A38] border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-xl dark:hover:shadow-sky-500/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-14 h-14 rounded-2xl bg-linear-to-br ${gradientStyle} border flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-semibold text-slate-400 dark:text-slate-500 group-hover:text-burnt-orange transition-colors">
                  <span>Advantage 0{index + 1}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
