"use client";

import {
  MapPin,
  Phone,
  Mail,
  Globe,
  ChevronUp,
  ChevronRight,
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
    if (item.type === "scroll" && onNavClick) return onNavClick(item.id, item.path);
    router.push(item.path);
  };

  return (
    <footer className="bg-[#050914] text-white pt-16 sm:pt-20 pb-12 relative overflow-hidden border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-5">
            <AdesaLogoWithSlogan />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-sans">
              {footer.slogan || "Pioneering clean, cost-effective CNG mobility and energy infrastructure across Nigeria."}
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Conversion Centres Active & Online</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-burnt-orange/15 border border-burnt-orange/30 text-xs font-semibold text-burnt-orange">
                <span>A subsidiary of Adesa HQ</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              {footer.socials.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={i}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-slate-300 hover:text-white hover:bg-burnt-orange hover:border-burnt-orange transition-all cursor-pointer shadow-sm"
                    aria-label="Social Link"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {footer.quickLinks.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleLinkClick(item)}
                    className="text-slate-400 hover:text-burnt-orange text-sm font-sans flex items-center gap-1.5 transition-colors cursor-pointer group text-left"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-burnt-orange transition-colors" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2.5">
              {footer.services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => router.push("/solutions")}
                    className="text-slate-400 hover:text-burnt-orange text-sm font-sans flex items-center gap-1.5 transition-colors cursor-pointer group text-left"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-burnt-orange transition-colors shrink-0" />
                    <span>{service}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-3.5 text-slate-400 text-sm font-sans">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-burnt-orange shrink-0 mt-0.5" />
                <span>{footer.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-burnt-orange shrink-0" />
                <a href={`tel:${footer.contact.phone}`} className="hover:text-white transition-colors">
                  {footer.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-burnt-orange shrink-0" />
                <a href={`mailto:${footer.contact.email}`} className="hover:text-white transition-colors">
                  {footer.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-burnt-orange shrink-0" />
                <span>{footer.contact.website}</span>
              </li>
              <li className="flex items-center gap-3 text-xs text-slate-400">
                <span className="text-burnt-orange font-semibold">Hours:</span>
                <span>{footer.contact.hours || "Mon-Fri, 9am-5pm"}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-sans">
          <p>© {new Date().getFullYear()} Adesa Energy — A subsidiary of Adesa HQ. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {[
              { label: "Privacy Policy", path: "/privacy-policy" },
              { label: "Terms of Service", path: "/terms" },
              { label: "Cookie Policy", path: "/cookie-policy" },
              { label: "Accessibility", path: "/accessibility" },
            ].map((link) => (
              <button
                key={link.path}
                onClick={() => router.push(link.path)}
                className="hover:text-slate-300 transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="scroll-to-top fixed z-40 hidden h-11 w-11 items-center justify-center rounded-2xl bg-burnt-orange text-white shadow-lg shadow-orange-500/30 transition-colors hover:bg-[#d15e15] sm:flex"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </motion.button>
      )}
    </footer>
  );
};

export default Footer;
