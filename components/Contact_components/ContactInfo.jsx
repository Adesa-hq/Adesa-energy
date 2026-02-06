import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

const iconMap = {
  address: MapPin,
  phone: Phone,
  email: Mail,
  website: Globe,
};

const socialMap = { Linkedin, Twitter, Instagram, Facebook };

const ContactInfo = () => {
  const contactConfig = siteConfig.waitlist;
  return (
    <div className="lg:col-span-1 space-y-6">
      {contactConfig.infoCards.map((card, index) => {
        const Icon = iconMap[card.type];

        return (
          <motion.div
            key={card.type}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-[#2E302C] rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-800"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#F37621]/10 rounded-lg flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6 text-[#F37621]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#22244E] dark:text-white mb-1 font-montserrat">
                  {card.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-inter">
                  {card.value}
                </p>
                {card.note && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-inter">
                    {card.note}
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
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-[#22244E] rounded-xl p-6"
      >
        <h3 className="font-semibold text-white mb-4 font-montserrat">
          Follow us
        </h3>
        <div className="flex space-x-4">
          {contactConfig.socials.map((social) => {
            const Icon = socialMap[social.name];
            return (
              <motion.a
                key={social.name}
                whileHover={{ scale: 1.1 }}
                href={social.url}
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#F37621] transition"
                aria-label={`Visit our ${social.name} page`}
              >
                <Icon className="w-5 h-5 text-white" />
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default ContactInfo;
