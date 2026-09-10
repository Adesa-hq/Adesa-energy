"use client";
import { motion } from "framer-motion";
import { Flame, Leaf, Percent, Zap } from "lucide-react";
import { siteConfig } from "@/config/site";

const icons = { Flame, Leaf, Percent, Zap };

const PriceCards = ({ savings = 60, petrol = 1200, cng = 450 }) => {
  return (
    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
      {siteConfig.calculator.priceCards.map((item, index) => {
        const IconComponent = icons[item.icon] || Flame;

        let displayValue = "~60%";
        if (item.valueKey === "savings") {
          displayValue = `~${savings}%`;
        } else if (item.valueKey === "petrol") {
          displayValue = `₦${petrol.toLocaleString()}`;
        } else if (item.valueKey === "cng") {
          displayValue = `₦${cng.toLocaleString()}`;
        } else {
          displayValue = siteConfig.calculator.priceDisplay[item.valueKey] || "₦1,200";
        }

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{ y: -4 }}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-5 text-center border border-white/10 hover:border-white/20 transition-all shadow-sm flex flex-col items-center justify-center space-y-2"
          >
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
              <IconComponent className={`w-5 h-5 ${item.color || "text-burnt-orange"}`} />
            </div>
            <div>
              <p className="text-slate-300 text-xs font-heading font-medium tracking-wide">
                {item.title}
              </p>
              <p className="text-xl sm:text-2xl font-heading font-bold text-white mt-0.5">
                {displayValue}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default PriceCards;
