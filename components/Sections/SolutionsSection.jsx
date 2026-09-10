"use client";

import {
  ArrowRight,
  Fuel,
  Car,
  Truck,
  CheckCircle2,
  Wrench,
  GraduationCap,
} from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { useRouter } from "next/navigation";

const iconMap = {
  Car,
  Fuel,
  Truck,
  Wrench,
  GraduationCap,
};

const SolutionsSection = () => {
  const { header, main, additional } = siteConfig.solutions;
  const router = useRouter();

  const onNavClick = (path) => {
    if (path.startsWith("/")) {
      router.push(path);
    } else {
      router.push(`/${path}`);
    }
  };

  return (
    <section
      id="solutions"
      className="py-20 lg:py-28 bg-slate-50 dark:bg-[#060b17] transition-colors relative overflow-hidden"
    >
      {/* Ambient background decoration */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-amber-500/5 dark:bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-burnt-orange/10 border border-burnt-orange/20 text-burnt-orange font-semibold text-xs uppercase tracking-wider">
            <span>{header.tagline}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-slate-900 dark:text-white tracking-tight">
            {header.headline}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            {header.description}
          </p>
        </motion.div>

        {/* 3 Main Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {main.map((solution, index) => {
            const Icon = iconMap[solution.icon] || Car;

            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white dark:bg-[#0E1A38] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-slate-200/80 dark:border-white/10 flex flex-col justify-between transition-all duration-300 group"
              >
                <div>
                  {/* Top Gradient Banner with Icon */}
                  <div
                    className={`h-44 bg-linear-to-br ${solution.gradient} flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  <div className="p-7">
                    <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-2.5">
                      {solution.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                      {solution.desc}
                    </p>

                    <div className="space-y-2.5">
                      {solution.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-center text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium gap-2.5"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <button
                    onClick={() => onNavClick("convert", "/convert")}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-burnt-orange hover:text-white dark:hover:bg-burnt-orange dark:hover:text-white text-slate-800 dark:text-slate-200 text-sm font-heading font-semibold transition-all cursor-pointer group/btn"
                  >
                    <span>Request Solution</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 2 Additional Solutions Cards */}
        <div className="mt-12 lg:mt-16 grid md:grid-cols-2 gap-8">
          {additional.map((item, index) => {
            const Icon = iconMap[item.icon] || Wrench;
            const isDark = item.theme === "dark";

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className={
                  isDark
                    ? "bg-linear-to-br from-[#0B1530] via-[#0E1A38] to-[#13224A] rounded-3xl p-8 text-white border border-white/10 shadow-xl relative overflow-hidden"
                    : "bg-linear-to-br from-[#F37621] to-[#EA580C] rounded-3xl p-8 text-white shadow-xl shadow-orange-500/20 relative overflow-hidden"
                }
              >
                <div className="flex flex-col sm:flex-row items-start gap-5">
                  <div
                    className={
                      isDark
                        ? "w-14 h-14 bg-burnt-orange rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/30"
                        : "w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-black/10"
                    }
                  >
                    <Icon
                      className={
                        isDark ? "w-7 h-7 text-white" : "w-7 h-7 text-[#F37621]"
                      }
                    />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-heading font-bold text-white">
                      {item.title}
                    </h3>
                    <p
                      className={
                        isDark
                          ? "text-slate-300 text-sm leading-relaxed"
                          : "text-white/90 text-sm leading-relaxed"
                      }
                    >
                      {item.description}
                    </p>

                    <button
                      onClick={() => onNavClick(item.cta.target)}
                      className={
                        isDark
                          ? "inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 font-heading font-semibold text-sm transition-colors cursor-pointer pt-2"
                          : "inline-flex items-center gap-2 bg-white text-slate-900 px-5 py-2.5 rounded-xl font-heading font-bold text-sm hover:bg-slate-100 transition-all shadow-md cursor-pointer pt-2"
                      }
                    >
                      <span>{item.cta.text}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
