"use client";

import {
  MapPin,
  Phone,
  Mail,
  Globe,
  ChevronUp,
  ChevronRight,
  Wrench,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AdesaLogoWithSlogan from "./logo/AdesaLogoWithSlogan";
import { siteConfig } from "@/config/site";

const Footer = ({ onNavClick }) => {
  const router = useRouter();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { footer } = siteConfig;

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (item) => {
    if (item.type === "scroll") return onNavClick(item.id);
    router.push(item.path);
  };

  return (
    <footer className="bg-[#1a1a1a] text-white py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div>
            <AdesaLogoWithSlogan />
            <p className="text-[#F37621] mb-4 max-w-xs">{footer.slogan}</p>
            <div className="flex space-x-4">
              {footer.socials.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={i}
                    whileHover={{ scale: 1.1, y: -2 }}
                    href={item.href}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#F37621]"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <ChevronRight className="w-4 h-4 mr-2 text-[#59C6E5]" />
              Quick links
            </h4>
            <ul className="space-y-3">
              {footer.quickLinks.map((item) => (
                <li key={item.label}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => handleLinkClick(item)}
                    className="text-gray-400 hover:text-[#F37621] flex items-center"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-[#59C6E5]" />
                    {item.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <Wrench className="w-4 h-4 mr-2 text-[#F37621]" />
              Services
            </h4>
            <ul className="space-y-3">
              {footer.services.map((service) => (
                <li key={service}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => router.push("/solutions")}
                    className="text-gray-400 hover:text-[#F37621]"
                  >
                    {service}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-6 flex items-center">
              <ChevronRight className="w-4 h-4 mr-2 text-[#59C6E5]" />
              {footer.career.title}
            </h4>
            <p className="text-gray-400 mb-3">{footer.career.description}</p>
            <motion.button
              whileHover={{ x: 5 }}
              onClick={() => router.push(footer.career.path)}
              className="text-[#F37621]"
            >
              Explore Careers
            </motion.button>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-[#59C6E5]" />
              Contact
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#F37621]" />
                <span>{footer.contact.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#F37621]" />
                <span>{footer.contact.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#F37621]" />
                <span>{footer.contact.email}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-[#F37621]" />
                <span>{footer.contact.website}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Adesa Energy. All rights reserved.
        </div>
      </div>

      {showScrollTop && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[#22244E] flex items-center justify-center"
        >
          <ChevronUp />
        </motion.button>
      )}
    </footer>
  );
};

export default Footer;
