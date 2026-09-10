"use client";
import { siteConfig } from "@/config/site";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function NavLinks({
  activeSection,
  onNavigate,
  isMobile,
  closeNav,
}) {
  const [moreOpen, setMoreOpen] = useState(false);
  const dropdownRef = useRef(null);

  const mainLinks = siteConfig.navItems.slice(0, 5); // Home → Calculator
  const extraLinks = siteConfig.navItems.slice(5); // Resources → Contact

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const renderLink = (item, isDropdown = false) => {
    const isActive = activeSection === item.id;

    if (isMobile) {
      return (
        <button
          key={item.id}
          onClick={() => {
            onNavigate(item.id, item.path);
            closeNav?.();
          }}
          className={`flex items-center justify-between w-full text-left py-3 px-4 rounded-xl text-base font-semibold transition-all cursor-pointer ${
            isActive
              ? "bg-burnt-orange/10 text-burnt-orange dark:text-burnt-orange font-bold"
              : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5"
          }`}
        >
          <span>{item.label}</span>
          {isActive && (
            <span className="w-2 h-2 rounded-full bg-burnt-orange shadow-[0_0_8px_#f37621]" />
          )}
        </button>
      );
    }

    if (isDropdown) {
      return (
        <button
          key={item.id}
          onClick={() => {
            onNavigate(item.id, item.path);
            setMoreOpen(false);
          }}
          className={`w-full text-left px-4 py-2.5 text-sm font-medium rounded-lg transition-colors cursor-pointer flex items-center justify-between ${
            isActive
              ? "bg-burnt-orange/10 text-burnt-orange font-semibold"
              : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-burnt-orange"
          }`}
        >
          <span>{item.label}</span>
          {isActive && (
            <span className="w-1.5 h-1.5 rounded-full bg-burnt-orange" />
          )}
        </button>
      );
    }

    return (
      <button
        key={item.id}
        onClick={() => {
          onNavigate(item.id, item.path);
        }}
        className={`relative px-3.5 py-2 text-sm font-medium rounded-full transition-all cursor-pointer ${
          isActive
            ? "text-burnt-orange dark:text-burnt-orange font-semibold"
            : "text-slate-700 dark:text-slate-200 hover:text-burnt-orange dark:hover:text-burnt-orange"
        }`}
      >
        {item.label}
        {isActive && (
          <motion.span
            layoutId="activeNavPill"
            className="absolute inset-0 bg-burnt-orange/10 dark:bg-burnt-orange/20 rounded-full -z-10 border border-burnt-orange/20"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </button>
    );
  };

  return (
    <div
      className={`flex ${isMobile ? "flex-col gap-1 w-full" : "items-center gap-1"}`}
    >
      {mainLinks.map((item) => renderLink(item))}

      {!isMobile && extraLinks.length > 0 && (
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setMoreOpen((v) => !v)}
            className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-full transition-all cursor-pointer ${
              extraLinks.some((l) => l.id === activeSection)
                ? "text-burnt-orange font-semibold bg-burnt-orange/10"
                : "text-slate-700 dark:text-slate-200 hover:text-burnt-orange"
            }`}
          >
            <span>More</span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                moreOpen ? "rotate-180 text-burnt-orange" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {moreOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 mt-2 w-48 p-1.5 bg-white/95 dark:bg-[#0E1A38]/95 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 rounded-2xl shadow-xl z-50 flex flex-col"
              >
                {extraLinks.map((item) => renderLink(item, true))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {isMobile && extraLinks.map((item) => renderLink(item))}
    </div>
  );
}
