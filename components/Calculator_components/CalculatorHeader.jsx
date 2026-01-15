"use client";
import { motion } from "framer-motion";
import { Calculator } from "lucide-react";
import { siteConfig } from "@/config/site";

const CalculatorHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="text-center mb-12"
  >
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.2 }}
      className="inline-block bg-burnt-orange/15 border border-burnt-orange/30 px-4 py-1.5 rounded-full mb-4"
    >
      <span className="font-semibold font-sans text-white">
        {siteConfig.calculator.header.title}
      </span>
    </motion.div>
    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-3 text-white">
      {siteConfig.calculator.header.subtitle}
    </h2>
    <p className="text-light-blue font-bold text-lg mb-2 font-heading">
      {siteConfig.calculator.header.tagline}
    </p>
    <p className="text-gray-200 max-w-2xl mx-auto font-sans text-lg opacity-90">
      {siteConfig.calculator.header.description}
    </p>
  </motion.div>
);

export default CalculatorHeader;
