"use client";

import { ArrowRight, Zap, Globe, Users, HandHeart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { useRouter } from "next/navigation";

const iconMap = { Zap, Globe, Users, HandHeart };

const AboutSection = () => {
  const { about } = siteConfig;
  const router = useRouter();

  const onNavClick = (path) => {
    router.push(path);
  };

  return (
    <section
      id={about.id}
      className="py-20 lg:py-28 bg-white dark:bg-[#081126] transition-colors relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sky-500/5 dark:bg-sky-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-burnt-orange/10 border border-burnt-orange/20 text-burnt-orange font-semibold text-xs uppercase tracking-wider">
              <span>{about.tagline}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-slate-900 dark:text-white tracking-tight">
              {about.headline}
            </h2>

            <div className="space-y-4">
              {about.description.map((text, i) => (
                <p
                  key={i}
                  className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-sans"
                >
                  {text}
                </p>
              ))}
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid sm:grid-cols-2 gap-5 pt-2">
              {[about.mission, about.vision].map((item, i) => {
                const Icon = iconMap[item.icon] || Zap;
                const isEmerald = item.icon === "Globe";

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    whileHover={{ y: -3 }}
                    className="bg-slate-50 dark:bg-[#0E1A38] p-6 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-md transition-all"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                        isEmerald
                          ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25"
                          : "bg-amber-500/15 text-burnt-orange dark:text-amber-400 border border-amber-500/25"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavClick(about.cta.target)}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-heading font-bold text-sm shadow-md hover:bg-burnt-orange dark:hover:bg-burnt-orange dark:hover:text-white transition-all cursor-pointer"
              >
                <span>{about.cta.text}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: Values & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Core Values Card */}
            <div className="bg-linear-to-br from-[#0B1530] via-[#0E1A38] to-[#12224A] text-white p-7 sm:p-8 rounded-3xl border border-white/10 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <h3 className="text-xl font-heading font-bold text-white">
                  Our Core Values
                </h3>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-sky-300">
                  Standard of Excellence
                </span>
              </div>

              <div className="space-y-5">
                {about.values.map((value, index) => {
                  const Icon = iconMap[value.icon] || Zap;
                  const isOrange = index % 2 === 0;

                  return (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.08 }}
                      className="flex items-start gap-4 p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors"
                    >
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                          isOrange
                            ? "bg-burnt-orange text-white shadow-md shadow-orange-500/20"
                            : "bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-heading font-semibold text-white text-base">
                          {value.title}
                        </h4>
                        <p className="text-slate-300 text-xs sm:text-sm mt-0.5 leading-relaxed">
                          {value.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Hubs & Network Status Pill */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0E1A38] border border-slate-200/80 dark:border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
                <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200">
                  3 Conversion Centres Active (Lagos, Kwara, Abuja)
                </span>
              </div>
              <span className="text-xs font-bold text-burnt-orange uppercase">
                Nationwide
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
