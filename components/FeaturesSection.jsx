"use client";

import { Wallet, Leaf, ShieldCheck, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

const iconMap = {
  Wallet,
  Leaf,
  ShieldCheck,
  Settings,
};

const FeaturesSection = () => {
  const { tagline, headline, items } = siteConfig.features;

  return (
    <motion.section
      id="features"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 bg-white dark:bg-[#242622]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-[#F37621] font-semibold mb-2 font-inter">
            {tagline}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#22244E] dark:text-white font-montserrat">
            {headline}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => {
            const Icon = iconMap[item.icon];

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-[#2E302C] rounded-xl p-6 text-center hover:shadow-lg dark:hover:shadow-[#59C6E5]/20 transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-[#59C6E5] dark:hover:border-[#59C6E5]"
              >
                <div className="w-16 h-16 bg-[#59C6E5]/20 dark:bg-[#59C6E5]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-[#22244E] dark:text-[#59C6E5]" />
                </div>

                <h3 className="text-xl font-semibold text-[#22244E] dark:text-white mb-2 font-montserrat">
                  {item.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 font-inter">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturesSection;
