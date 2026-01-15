"use client";
import { motion } from "framer-motion";
import { Flame, Leaf, Percent } from "lucide-react";
import { siteConfig } from "@/config/site";

const icons = { Flame, Leaf, Percent };

const PriceCards = () => {
  return (
    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
      {siteConfig.calculator.priceCards.map((item, index) => {
        const IconComponent = icons[item.icon] || Flame;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/10 backdrop-blur rounded-xl p-4 text-center border border-white/15 hover:border-white/30 transition-all duration-300"
          >
            <div className="flex justify-center mb-2">
              <IconComponent className={`w-6 h-6 ${item.color}`} />
            </div>
            <p className="text-light-blue text-sm mb-1 font-sans font-medium">
              {item.title}
            </p>
            <p
              className={`text-xl md:text-2xl font-bold ${item.color} font-heading`}
            >
              {siteConfig.calculator.priceDisplay[item.valueKey]}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default PriceCards;
