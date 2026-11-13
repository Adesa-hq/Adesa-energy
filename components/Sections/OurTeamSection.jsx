"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Users } from "lucide-react";
import { useId, useState } from "react";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/config/site";

const OurTeamSection = ({ isTeamPage = false }) => {
  const { section, members } = siteConfig.team;
  const router = useRouter();

  const cardId = useId();
  const [expanded, setExpanded] = useState({});
  const reduceMotion = useReducedMotion();
  const renderBio = (member, index) => (
    <>
      <p id={`${cardId}-bio-${index}`} className="font-sans text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
        {expanded[member.name] ? member.bio : truncateBio(member.bio)}
      </p>
      <button
        type="button"
        aria-expanded={Boolean(expanded[member.name])}
        aria-controls={`${cardId}-bio-${index}`}
        aria-label={`${expanded[member.name] ? "Read less" : "Read more"} about ${member.name}`}
        onClick={() => setExpanded((previous) => ({ ...previous, [member.name]: !previous[member.name] }))}
        className="mt-3 text-sm font-semibold text-burnt-orange underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 cursor-pointer"
      >
        {expanded[member.name] ? "Read less" : "Read more"}
      </button>
    </>
  );

  const truncateBio = (bio, maxLength = 110) =>
    bio.length <= maxLength ? bio : bio.substring(0, maxLength) + "...";

  return (
    <section
      className={`pt-20 lg:pt-28 pb-8 lg:pb-10 ${
        isTeamPage
          ? "bg-white dark:bg-[#081126]"
          : "bg-slate-50 dark:bg-[#060b17]"
      } transition-colors relative overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-burnt-orange/10 border border-burnt-orange/20 text-burnt-orange font-semibold text-xs uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>Leadership & Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-slate-900 dark:text-white tracking-tight">
            {section.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg font-sans">
            {section.description}
          </p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.7 } } }}
          className="flex flex-wrap justify-center items-start gap-6"
        >
          {members.map((member, index) => (
            <motion.li
              key={member.name}
              variants={{
                hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 22 },
                visible: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.65 } },
              }}
              className="w-full sm:w-[calc((100%_-_24px)/2)] lg:w-[calc((100%_-_72px)/4)] min-w-0"
            >
              <article className="group motion-safe:hover:-translate-y-1.5 hover:border-burnt-orange/50 overflow-hidden rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#0E1A38] shadow-sm hover:shadow-xl transition-[transform,border-color,box-shadow] duration-300">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#f1f2f3]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-[50%_25%] motion-safe:group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) 45vw, 23vw"
                  />
                </div>
                <div className="border-t-2 border-burnt-orange/40 p-5">
                  <div className="min-h-28">
                    <h3 className="text-xl font-heading font-bold leading-snug text-slate-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-burnt-orange leading-6">
                      {member.role}
                    </p>
                  </div>
                  {renderBio(member, index)}
                </div>
              </article>
            </motion.li>
          ))}
        </motion.ul>

        {!isTeamPage && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12 sm:mt-16"
          >
            <button
              onClick={() => router.push(section.cta.path)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-heading font-bold text-sm bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-burnt-orange dark:hover:bg-burnt-orange dark:hover:text-white shadow-md transition-all cursor-pointer group"
            >
              <span>{section.cta.label}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default OurTeamSection;
