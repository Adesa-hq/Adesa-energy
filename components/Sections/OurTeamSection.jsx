"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/config/site";

const OurTeamSection = ({ isTeamPage = false }) => {
  const { section, members } = siteConfig.team;
  const router = useRouter();

  const truncateBio = (bio, maxLength = 110) =>
    bio.length <= maxLength ? bio : bio.substring(0, maxLength) + "...";

  return (
    <section
      className={`py-20 lg:py-28 ${
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

        {isTeamPage ? (
          /* Full-width team layout for /team page */
          <div className="space-y-8 max-w-5xl mx-auto">
            {members.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col md:flex-row gap-8 items-center bg-slate-50 dark:bg-[#0E1A38] rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="md:w-1/3 w-full shrink-0">
                  <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-md">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>

                <div className="md:w-2/3 space-y-3 text-left">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-burnt-orange/10 text-burnt-orange border border-burnt-orange/20">
                    {member.role}
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-sans text-sm sm:text-base">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Grid layout for homepage */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {members.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl overflow-hidden border border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#0E1A38] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <Image
                      src={member.image}
                      fill
                      alt={member.name}
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-950/85 via-slate-950/40 to-transparent p-4">
                      <h3 className="text-base font-heading font-bold text-white leading-snug">
                        {member.name}
                      </h3>
                      <p className="text-xs text-amber-300 font-medium">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="font-sans text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {truncateBio(member.bio)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

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
