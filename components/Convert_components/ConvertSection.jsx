"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Zap, ShieldCheck, CheckCircle2, MapPin } from "lucide-react";
import ConvertForm from "./ConvertForm";
import ContactInfo from "../Contact_components/ContactInfo";

const ConvertSection = () => {
  const convertConfig = siteConfig.convert;
  const { section } = convertConfig;

  const highlights = [
    {
      title: "Save up to 50% on Fuel",
      desc: "Cut fleet and personal vehicle running expenses drastically compared to petrol or diesel.",
    },
    {
      title: "Zero Operational Downtime",
      desc: "Fast 1-2 day turnaround at our certified conversion centers or on-site mobile conversions for fleets.",
    },
    {
      title: "Certified Safety & 1-Year Warranty",
      desc: "Top-tier international safety standards, pressure-tested cylinders, and dedicated post-conversion support.",
    },
  ];

  return (
    <section
      id={section.id}
      className="py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-[#060b17] transition-colors relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-sky-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-burnt-orange/10 border border-burnt-orange/20 text-burnt-orange font-semibold text-xs uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>{section.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            {section.title}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg font-sans">
            {section.subtitle}
          </p>
        </motion.div>

        {/* Value Prop Banner */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white dark:bg-[#0E1A38] rounded-2xl p-5 border border-slate-200/80 dark:border-white/10 shadow-xs flex items-start gap-3.5"
            >
              <div className="w-8 h-8 rounded-xl bg-burnt-orange/10 text-burnt-orange flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h2 className="font-heading font-bold text-slate-900 dark:text-white text-sm">
                  {item.title}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-sans mt-1">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <ContactInfo />
          <ConvertForm />
        </div>
      </div>
    </section>
  );
};

export default ConvertSection;
