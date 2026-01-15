"use client";

import {
  ArrowRight,
  Fuel,
  Car,
  Truck,
  CheckCircle,
  Wrench,
  GraduationCap,
} from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

const iconMap = {
  Car,
  Fuel,
  Truck,
  Wrench,
  GraduationCap,
};

const SolutionsSection = ({ onNavClick }) => {
  const { header, main, additional } = siteConfig.solutions;

  return (
    <motion.section
      id="solutions"
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
            {header.tagline}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#22244E] dark:text-white font-montserrat mb-4">
            {header.headline}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-inter">
            {header.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {main.map((solution, index) => {
            const Icon = iconMap[solution.icon];

            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-[#2E302C] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-[#59C6E5] dark:hover:border-[#59C6E5]"
              >
                <div
                  className={`h-48 bg-linear-to-br ${solution.gradient} flex items-center justify-center`}
                >
                  <Icon className="w-20 h-20 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#22244E] dark:text-white mb-3 font-montserrat">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 font-inter">
                    {solution.desc}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {solution.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center text-sm text-gray-600 dark:text-gray-300 font-inter"
                      >
                        <CheckCircle className="w-4 h-4 text-[#F37621] mr-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => onNavClick("contact")}
                    className="text-[#F37621] font-semibold hover:underline inline-flex items-center focus:outline-none font-inter"
                  >
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {additional.map((item, index) => {
            const Icon = iconMap[item.icon];

            const isDark = item.theme === "dark";

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={
                  isDark
                    ? "bg-[#22244E] rounded-2xl p-8 text-white"
                    : "bg-[#F37621] rounded-2xl p-8 text-white"
                }
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={
                      isDark
                        ? "w-14 h-14 bg-[#F37621] rounded-xl flex items-center justify-center shrink-0"
                        : "w-14 h-14 bg-white rounded-xl flex items-center justify-center shrink-0"
                    }
                  >
                    <Icon
                      className={
                        isDark ? "w-7 h-7 text-white" : "w-7 h-7 text-[#F37621]"
                      }
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 font-montserrat">
                      {item.title}
                    </h3>
                    <p
                      className={
                        isDark
                          ? "text-gray-300 mb-4 font-inter"
                          : "text-white/90 mb-4 font-inter"
                      }
                    >
                      {item.description}
                    </p>
                    <motion.button
                      whileHover={{ x: 5 }}
                      onClick={() => onNavClick(item.cta.target)}
                      className={
                        isDark
                          ? "text-[#59C6E5] font-semibold hover:underline inline-flex items-center focus:outline-none font-inter"
                          : "text-[#22244E] font-semibold inline-flex items-center bg-white px-4 py-2 rounded-lg focus:outline-none font-inter"
                      }
                    >
                      {item.cta.text} <ArrowRight className="w-4 h-4 ml-1" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default SolutionsSection;
