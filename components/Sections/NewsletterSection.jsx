"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Check, Send, X } from "lucide-react";
import { siteConfig } from "@/config/site";

const NewsletterSection = ({
  title,
  description,
  href,
  buttonText = "Subscribe",
  icon = true,
  className = "",
}) => {
  const { newsletter } = siteConfig;

  return (
    <div
      className={`
        w-full
        max-w-md
        sm:max-w-lg
        lg:max-w-xl
        mx-auto
        px-4
        sm:px-6
        ${className}
      `}
    >
      <h4
        className="
          text-base
          sm:text-lg
          lg:text-xl
          font-bold
          text-[#FFA205]
          mb-4
          sm:mb-6
          uppercase
          tracking-widest
          text-center
          sm:text-left
        "
      >
        {title || newsletter.title}
      </h4>

      <p
        className="
          text-sm
          sm:text-base
          text-slate-400
          mb-6
          sm:mb-8
          text-center
          sm:text-left
          leading-relaxed
        "
      >
        {description || newsletter.description}
      </p>

      <motion.a
        href={href || newsletter.url}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="
          w-full
          bg-linear-to-r from-[#FFA205] to-[#FFC107]
          text-[#151E47]
          font-bold
          py-3
          sm:py-4
          rounded-xl
          hover:shadow-lg hover:shadow-orange-500/20
          transition-all duration-300
          flex items-center justify-center gap-2
          text-sm
          sm:text-base
        "
      >
        {buttonText}
        {icon && <Send size={18} />}
      </motion.a>
    </div>
  );
};

export default NewsletterSection