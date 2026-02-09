"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { useEffect, useState } from "react";
import Image from "next/image";

const HeroSection = ({ onNavClick }) => {
  const { hero } = siteConfig;

  const [values, setValues] = useState(hero.stats.map(() => 0));
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const duration = 3500;
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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % hero.images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [hero.images.length]);

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
          {/* LEFT */}
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

            <div className="grid grid-cols-2 gap-4 max-w-xl">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavClick(hero.ctas.primary.target)}
                aria-label={hero.ctas.primary.ariaLabel}
                className="bg-burnt-orange hover:bg-[#d15e15] sm:text-sm md:text-md text-white px-8 py-4 rounded-lg font-heading font-semibold lg:text-lg transition inline-flex items-center justify-center"
              >
                {hero.ctas.primary.text}
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavClick(hero.ctas.secondary.target)}
                aria-label={hero.ctas.secondary.ariaLabel}
                className="border-2 border-white hover:bg-white hover:text-deep-blue text-white px-8 py-4 rounded-lg font-heading font-semibold sm:text-sm md:text-md lg:text-lg transition inline-flex items-center justify-center"
              >
                {hero.ctas.secondary.text}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavClick(hero.ctas.tertiary.target)}
                aria-label={hero.ctas.tertiary.ariaLabel}
                className="col-span-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-heading font-semibold text-lg transition inline-flex items-center justify-center"
              >
                {hero.ctas.tertiary.text}
              </motion.button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-charcoal-gray/30">
              {hero.stats.map((stat, idx) => (
                <div key={stat.label}>
                  <p className="text-3xl md:text-4xl font-heading font-bold text-light-blue">
                    {values[idx] || ""}
                    {stat.suffix}
                  </p>
                  <p className="text-gray-300 mt-1 font-sans">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT CAROUSEL */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative w-full h-[280px] sm:h-[360px] lg:h-[520px] rounded-3xl overflow-hidden"
          >
            {hero.images.map((img, i) => (
              <motion.div
                key={img}
                initial={{ opacity: 0 }}
                animate={{ opacity: i === index ? 1 : 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <Image
                  src={img}
                  alt="Hero image"
                  fill
                  priority={i === 0}
                  className="object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
