"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { siteConfig } from "@/config/site";

// Lazy load the components
const WaitlistForm = dynamic(() => import("./WaitlistForm"), { ssr: false });
const ContactInfo = dynamic(() => import("./ContactInfo"), { ssr: false });

const ContactSection = () => {
  const contactConfig = siteConfig.waitlist;
  const { section } = contactConfig;

  return (
    <motion.section
      id={section.id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 bg-gray-50 dark:bg-[#242622]"
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
            {section.badge}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#22244E] dark:text-white font-montserrat mb-4">
            {section.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-inter">
            {section.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <ContactInfo />
          <WaitlistForm />
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
