"use client";

import { ArrowRight, Fuel } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { useEffect, useState } from "react";

const HeroSection = ({ onNavClick }) => {
  const { hero } = siteConfig;
  const [values, setValues] = useState(hero.stats.map(() => 0));

  useEffect(() => {
    const duration = 3500; // animation duration in ms
    const startTime = performance.now();

    function animate(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setValues(hero.stats.map((stat) => Math.floor(stat.value * progress)));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [hero.stats]);
  
  return (
    <motion.section
      id={hero.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center pt-20 bg-linear-to-br from-deep-blue to-dark-blue text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-light-blue font-semibold mb-4 tracking-wide font-sans uppercase text-lg">
              {hero.tagline}
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
              {hero.headline}
            </h1>

            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl font-sans">
              {hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavClick(hero.ctas.primary.target)}
                aria-label={hero.ctas.primary.ariaLabel}
                className="bg-burnt-orange hover:bg-[#d15e15] text-white px-8 py-4 rounded-lg font-heading font-semibold text-lg transition inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-burnt-orange focus:ring-offset-2 focus:ring-offset-deep-blue"
              >
                {hero.ctas.primary.text}
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavClick(hero.ctas.secondary.target)}
                aria-label={hero.ctas.secondary.ariaLabel}
                className="border-2 border-white hover:bg-white hover:text-deep-blue text-white px-8 py-4 rounded-lg font-heading font-semibold text-lg transition inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-deep-blue"
              >
                {hero.ctas.secondary.text}
              </motion.button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-charcoal-gray/30">
              {hero.stats.map((stat, idx) => (
                <div key={stat.label}>
                  <p className="text-3xl md:text-4xl font-heading font-bold text-light-blue">
                    {values[idx] || ""}
                    {stat.suffix || ""}
                  </p>
                  <p className="text-gray-300 mt-1 font-sans">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="bg-linear-to-br from-light-blue/10 to-burnt-orange/10 rounded-2xl p-8 flex items-center justify-center min-h-120 border border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="relative z-10 text-center">
                  <div className="w-40 h-40 rounded-full bg-linear-to-br from-light-blue to-burnt-orange flex items-center justify-center mx-auto mb-8">
                    <Fuel className="w-20 h-20 text-white" />
                  </div>
                  <h2 className="text-white text-2xl font-heading font-semibold mb-3">
                    {hero.visual.title}
                  </h2>
                  <p className="text-gray-300 font-sans text-lg">
                    {hero.visual.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
