"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Mail, MessageSquare, PhoneCall, Sparkles } from "lucide-react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactSection = () => {
  const contactConfig = siteConfig.contact;
  const { section } = contactConfig;

  return (
    <section
      id={section.id}
      className="py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-[#060b17] transition-colors relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-sky-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-burnt-orange/10 border border-burnt-orange/20 text-burnt-orange font-semibold text-xs uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>{section.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            {section.title}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg font-sans">
            {section.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <ContactInfo configKey="contact" />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
