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
    className="text-center max-w-3xl mx-auto mb-14 space-y-3"
  >
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-burnt-orange/15 border border-burnt-orange/30 text-amber-300 font-semibold text-xs uppercase tracking-wider">
      <Calculator className="w-3.5 h-3.5" />
      <span>{siteConfig.calculator.header.title || "Cost Savings Engine"}</span>
    </div>

    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
      {siteConfig.calculator.header.subtitle}
    </h2>

    <p className="text-sky-300 font-heading font-semibold text-base sm:text-lg">
      {siteConfig.calculator.header.tagline}
    </p>

    <p className="text-slate-300 font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
      {siteConfig.calculator.header.description}
    </p>
  </motion.div>
);

export default CalculatorHeader;
