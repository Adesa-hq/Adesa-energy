"use client";

import { motion } from "framer-motion";
import { Heart, Zap, Award, Users } from "lucide-react";

export default function BenefitsSection({ benefits }) {
  const sectionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 * i, duration: 0.5, ease: "easeOut" },
    }),
  };

  const icons = [Heart, Zap, Award, Users];

  return (
    <motion.section
      variants={sectionVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="py-24 px-6 bg-background dark:bg-charcoal-gray text-center font-sans"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-heading font-bold text-foreground dark:text-burnt-orange mb-16"
        >
          Our Benefits
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = icons[idx];
            return (
              <motion.div
                key={idx}
                custom={idx}
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-6"
              >
                <div className="w-14 h-14 rounded-full bg-burnt-orange/10 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-burnt-orange" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-foreground/80">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
