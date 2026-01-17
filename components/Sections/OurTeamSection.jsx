"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/config/site";

const OurTeamSection = () => {
  const { section, members } = siteConfig.team;
  const router = useRouter();

  return (
    <section id={section.id} className="py-24 bg-gray-50 dark:bg-deep-blue">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-charcoal-gray dark:text-burnt-orange mb-6">
            {section.title}
          </h2>
          <p className="text-lg font-sans text-gray-600 dark:text-light-blue">
            {section.description}
          </p>
        </motion.div>

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
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-deep-blue/90 to-transparent p-4">
                  <h3 className="text-lg font-heading font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm text-burnt-orange font-sans">
                    {member.role}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm font-sans text-gray-600 dark:text-gray-300 min-h-20">
                  {member.bio}
                </p>

                <div className="flex space-x-3 pt-4 mt-4 border-t border-gray-100 dark:border-white/10">
                  {member.social.map((social, i) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={i}
                        href={social.url}
                        aria-label={`${member.name} ${social.type}`}
                        className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 text-charcoal-gray dark:bg-deep-blue dark:text-light-blue hover:bg-burnt-orange hover:text-white transition"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20"
        >
          <button
            onClick={() => router.push(section.cta.path)}
            className="inline-flex items-center px-8 py-4 rounded-full font-heading font-semibold bg-burnt-orange text-white hover:bg-light-blue hover:text-deep-blue transition"
          >
            {section.cta.label}
            <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default OurTeamSection;
