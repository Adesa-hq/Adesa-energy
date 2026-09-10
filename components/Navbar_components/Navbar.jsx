"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import NavLinks from "./NavLinks";
import ThemeSwitch from "../ThemeSwitch";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ activeSection, handleNavClick }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-6 sm:pt-4">
      <nav
        className={`pointer-events-auto w-full max-w-7xl h-16 sm:h-18 px-4 sm:px-6 rounded-2xl flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "glass-nav shadow-lg shadow-slate-950/5 dark:shadow-black/40 border border-slate-200/80 dark:border-white/10"
            : "bg-white/90 dark:bg-[#0B132B]/90 backdrop-blur-md border border-slate-200/60 dark:border-white/10 shadow-sm"
        }`}
      >
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick("home", "/")}
          className="flex items-center gap-3 py-1 cursor-pointer group focus:outline-none"
          aria-label="Adesa Energy Home"
        >
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 transition-transform group-hover:scale-105">
            <Image
              src="/adesa-energy.png"
              alt="Adesa Energy Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden sm:flex flex-col text-left">
            <span className="font-heading font-bold text-base tracking-tight text-slate-900 dark:text-white leading-none">
              Adesa Energy
            </span>
            <span className="text-[10px] uppercase font-semibold tracking-wider text-burnt-orange">
              A subsidiary of Adesa HQ
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6">
          <NavLinks
            activeSection={activeSection}
            onNavigate={handleNavClick}
          />
        </div>

        {/* Action Controls */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeSwitch />
          <Link
            href="/contact"
            className="relative group inline-flex items-center gap-2 bg-linear-to-r from-[#F37621] via-[#F97316] to-[#F59E0B] text-white px-5 py-2.5 rounded-xl font-heading font-semibold text-sm shadow-md hover:shadow-orange-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer overflow-hidden"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile Toggle & Theme Switch */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeSwitch />
          <button
            onClick={() => setOpen(true)}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-white/15 transition-colors cursor-pointer"
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 pointer-events-auto lg:hidden"
            />

            {/* Slide-in Sheet */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="mobile-nav-drawer pointer-events-auto fixed right-0 top-0 z-50 flex h-[100dvh] w-full max-w-xs flex-col justify-between overflow-y-auto border-l border-slate-200 bg-white p-5 shadow-2xl dark:border-white/10 dark:bg-[#0B132B] sm:p-6 lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-8 h-8">
                      <Image
                        src="/adesa-energy.png"
                        alt="Adesa Energy Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-heading font-bold text-slate-900 dark:text-white leading-none">
                        Adesa Energy
                      </span>
                      <span className="text-[9px] uppercase font-semibold tracking-wider text-burnt-orange mt-0.5">
                        A subsidiary of Adesa HQ
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition cursor-pointer"
                    aria-label="Close navigation menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-6 flex flex-col gap-1">
                  <NavLinks
                    activeSection={activeSection}
                    onNavigate={handleNavClick}
                    closeNav={() => setOpen(false)}
                    isMobile
                  />
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200 dark:border-white/10 space-y-3">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-linear-to-r from-[#F37621] to-[#F59E0B] text-white py-3.5 px-4 rounded-xl font-heading font-semibold text-base shadow-md cursor-pointer text-center"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="text-xs text-center text-slate-500 dark:text-slate-400">
                  Clean CNG Solutions • Save up to 50% fuel costs
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
