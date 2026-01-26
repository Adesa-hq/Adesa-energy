"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/config/site";

const OurTeamSection = ({ isTeamPage = false }) => {
  const { section, members } = siteConfig.team;
  const router = useRouter();

  // Truncate bio for homepage
  const truncateBio = (bio, maxLength = 120) =>
    bio.length <= maxLength ? bio : bio.substring(0, maxLength) + "...";

  return (
    <section
      className={`min-h-screen py-24 bg-gray-50 dark:bg-deep-blue ${isTeamPage ? "bg-gray-50 dark:bg-[#22244E]" : "py-24 bg-gray-50 dark:bg-deep-blue"}`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2
            className={`text-4xl md:text-5xl font-semibold text-burnt-orange mb-6 font-sans `}
          >
            {section.title}
          </h2>
          <p
            className={`text-lg font-sans ${isTeamPage ? "text-gray-600 dark:text-[#59C6E5]" : "text-gray-600 dark:text-light-blue"}`}
          >
            {section.description}
          </p>
        </motion.div>

        {isTeamPage ? (
          // Full-width team layout for /team
          <div className="px-4 pb-20">
            <div className="max-w-7xl mx-auto space-y-12">
              {members.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col md:flex-row gap-8 items-center md:items-start bg-white dark:bg-[#1D3866] rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-[#59C6E5]/20"
                >
                  <div className="md:w-1/3 shrink-0">
                    <div className="relative w-full h-80 md:h-80">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  </div>

                  <div className="md:w-2/3 p-6 md:p-8">
                    <div className="mb-3">
                      <h3 className="text-2xl font-semibold text-[#242622] dark:text-white font-sans">
                        {member.name}
                      </h3>
                      <p className="text-[#F37621] font-medium font-sans">
                        {member.role}
                      </p>
                    </div>
                    <p className="text-gray-700 dark:text-gray-200 leading-relaxed font-sans">
                      {member.bio}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          // Grid layout for homepage
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {members.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl overflow-hidden border border-gray-100 dark:border-white/10 bg-white dark:bg-dark-blue"
              >
                <div className="relative">
                  <Image
                    src={member.image}
                    width={400}
                    height={400}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-deep-blue/90 to-transparent p-4">
                    <h3 className="text-lg font-sans font-semibold text-white">
                      {member.name}
                    </h3>
                    <p className="text-sm text-[#F37621] font-sans">
                      {member.role}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="font-sans text-gray-600 dark:text-gray-300 text-sm min-h-20">
                    {truncateBio(member.bio)}
                  </p>
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
            transition={{ delay: 0.5 }}
            className="text-center mt-20"
          >
            <button
              onClick={() => router.push(section.cta.path)}
              className="inline-flex items-center px-8 py-4 rounded-full font-sans font-semibold bg-[#F37621] text-white hover:bg-[#59C6E5] hover:text-[#1D3866] transition"
            >
              {section.cta.label}
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default OurTeamSection;
