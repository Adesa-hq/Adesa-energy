"use client";

import { motion } from "framer-motion";
import { Users, Heart, Lightbulb } from "lucide-react";

export default function AboutSection({ about }) {
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
          className="text-3xl md:text-4xl font-heading font-bold text-foreground dark:text-burnt-orange mb-4"
        >
          {about.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-foreground/80 mb-16 max-w-3xl mx-auto"
        >
          {about.subtitle}
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {about.features.map((feature, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-8 bg-card rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 dark:shadow-burnt-orange/10"
            >
              <div className="w-16 h-16 rounded-full bg-burnt-orange/10 flex items-center justify-center mb-6">
                {idx === 0 && <Users className="w-8 h-8 text-burnt-orange" />}
                {idx === 1 && <Heart className="w-8 h-8 text-burnt-orange" />}
                {idx === 2 && (
                  <Lightbulb className="w-8 h-8 text-burnt-orange" />
                )}
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
