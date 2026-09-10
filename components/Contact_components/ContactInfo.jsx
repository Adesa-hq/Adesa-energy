"use client";

import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

const iconMap = {
  address: MapPin,
  phone: Phone,
  email: Mail,
  website: Globe,
  hours: Clock,
};

const socialMap = { Linkedin, Twitter, Instagram, Facebook };

const ContactInfo = ({ configKey = "contact" }) => {
  const infoData = siteConfig[configKey] || siteConfig.contact || siteConfig.convert;

  return (
    <div className="lg:col-span-1 space-y-4">
      {infoData.infoCards.map((card, index) => {
        const Icon = iconMap[card.type] || MapPin;

        return (
          <motion.div
            key={card.type}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="bg-white dark:bg-[#0E1A38] rounded-2xl p-6 border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-burnt-orange/10 border border-burnt-orange/20 rounded-xl flex items-center justify-center shrink-0 text-burnt-orange">
                <Icon className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-heading font-bold text-slate-900 dark:text-white text-base">
                  {card.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 font-sans text-sm break-all">
                  {card.value}
                </p>
                {card.note && (
                  <p className="text-xs text-slate-400 dark:text-slate-400 font-sans pt-0.5 flex items-center gap-1">
                    <span>{card.note}</span>
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        );
      })}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="bg-linear-to-br from-[#0B1530] via-[#0E1A38] to-[#13224A] rounded-2xl p-6 text-white border border-white/10 shadow-md"
      >
        <h3 className="font-heading font-bold text-white text-base mb-3">
          Follow Our Journey
        </h3>
        <p className="text-xs text-slate-300 mb-4 font-sans leading-relaxed">
          Stay connected on social platforms for deployment updates, CNG workshops, and clean energy insights.
        </p>
        <div className="flex items-center gap-2.5">
          {infoData.socials.map((social) => {
            const Icon = socialMap[social.name] || Globe;
            return (
              <motion.a
                key={social.name}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-burnt-orange rounded-xl flex items-center justify-center text-white border border-white/10 hover:border-burnt-orange transition-all cursor-pointer"
                aria-label={`Visit our ${social.name} page`}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default ContactInfo;
