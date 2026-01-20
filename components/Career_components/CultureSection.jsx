"use client";

import { motion } from "framer-motion";

export default function CultureSection({ culture }) {
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
      className="py-24 px-6 bg-deep-blue/5 dark:bg-charcoal-gray dark:text-burnt-orange text-center font-sans"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-16"
        >
          Our Culture
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {culture.map((item, idx) => (
            <motion.blockquote
              key={item.id}
              custom={idx}
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl shadow-md border-l-4 border-burnt-orange text-left"
            >
              <p className="font-heading italic text-xl md:text-2xl text-foreground mb-4 relative pl-6">
                <span className="absolute left-0 top-0 text-burnt-orange text-4xl">
                  &quot;
                </span>
                {item.quote}
              </p>
              <footer className="font-bold text-burnt-orange">
                {item.author},{" "}
                <span className="text-foreground/80 font-normal">
                  {item.role}
                </span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
