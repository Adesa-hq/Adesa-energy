"use client";

import { ArrowRight, Zap, Globe, Users, HandHeart } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

const iconMap = {
  Zap,
  Globe,
  Users,
  HandHeart,
};

const AboutSection = ({ onNavClick }) => {
  const { about } = siteConfig;

  return (
    <motion.section
      id={about.id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 bg-gray-50 dark:bg-[#242622]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-[#F37621] font-semibold font-inter">
              {about.tagline}
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#22244E] dark:text-white font-montserrat">
              {about.headline}
            </h2>

            {about.description.map((text, i) => (
              <p
                key={i}
                className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-inter"
              >
                {text}
              </p>
            ))}

            <div className="grid sm:grid-cols-2 gap-6">
              {[about.mission, about.vision].map((item, i) => {
                const Icon = iconMap[item.icon];
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="bg-white dark:bg-[#2E302C] p-6 rounded-xl border border-gray-200 dark:border-gray-800"
                  >
                    <div
                      className={`w-12 h-12 ${
                        item.icon === "Globe"
                          ? "bg-[#59C6E5]/20"
                          : "bg-[#F37621]/10"
                      } rounded-lg flex items-center justify-center mb-4`}
                    >
                      <Icon
                        className={`w-6 h-6 ${
                          item.icon === "Globe"
                            ? "text-[#22244E] dark:text-[#59C6E5]"
                            : "text-[#F37621]"
                        } `}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-[#22244E] dark:text-white font-montserrat mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm font-inter">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <motion.button
              whileHover={{ x: 5 }}
              onClick={() => onNavClick(about.cta.target)}
              className="inline-flex items-center text-[#F37621] font-semibold hover:underline font-inter"
            >
              {about.cta.text}
              <ArrowRight className="w-4 h-4 ml-2" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-[#22244E] text-white p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-6 font-montserrat">
                Our core values
              </h3>

              <div className="space-y-4">
                {about.values.map((value, index) => {
                  const Icon = iconMap[value.icon];
                  return (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div
                        className={`w-10 h-10 ${
                          index % 2 === 0 ? "bg-[#F37621]" : "bg-[#59C6E5]"
                        } rounded-lg flex items-center justify-center`}
                      >
                        <Icon
                          className={`w-5 h-5 ${
                            index % 2 === 0 ? "text-white" : "text-[#22244E]"
                          }`}
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold font-montserrat">
                          {value.title}
                        </h4>
                        <p className="text-gray-300 text-sm font-inter">
                          {value.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-[#2E302C] p-6 rounded-xl border border-gray-200 dark:border-gray-800"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 text-center font-inter">
                {about.partners.label}
              </p>

              <div className="flex justify-center space-x-8 opacity-50">
                {Array.from({ length: about.partners.count }).map((_, i) => (
                  <div
                    key={i}
                    className="w-20 h-8 bg-gray-300 dark:bg-gray-700 rounded"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
