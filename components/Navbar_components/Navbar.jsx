"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeSwitch from "../ThemeSwitch";
import NavLinks from "./NavLinks";

export default function Navbar({ activeSection, handleNavClick }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white dark:bg-dark-blue shadow-sm border-b border-gray-200 dark:border-charcoal-gray">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <button
          onClick={() => handleNavClick("home", "/")}
          className="flex items-center gap-2 py-2"
          aria-label="Adesa Energy Home"
        >
          <div className="relative w-12 h-12">
            <Image
              src="/adesa-energy.png"
              alt="Adesa Energy Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </button>

        <div className="hidden lg:flex items-center gap-8">
          <NavLinks
            activeSection={activeSection}
            onNavigate={handleNavClick}
            className="font-heading font-semibold text-deep-blue dark:text-white hover:text-burnt-orange transition-colors"
          />
          <ThemeSwitch />
          <button
            onClick={() => handleNavClick("contact")}
            className="bg-burnt-orange hover:bg-[#d15e15] text-white px-5 py-2 rounded-lg font-heading font-semibold transition-colors shadow-md hover:shadow-lg"
            aria-label="Convert to CNG today"
          >
            Convert today
          </button>
        </div>
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeSwitch />
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-deep-blue dark:text-gray-100"
            aria-label="Open navigation menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white dark:bg-dark-blue shadow-xl transform transition ${
          open ? "translate-x-0" : "translate-x-full"
        } lg:hidden border-l border-gray-200 dark:border-charcoal-gray`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 text-deep-blue dark:text-gray-100"
          aria-label="Close navigation menu"
        >
          <X size={24} />
        </button>

        <div className="mt-20 px-6 flex flex-col gap-4">
          <NavLinks
            activeSection={activeSection}
            onNavigate={handleNavClick}
            closeNav={() => setOpen(false)}
            isMobile
            className="font-heading font-semibold text-2xl py-3 text-deep-blue dark:text-white border-b border-gray-200 dark:border-charcoal-gray hover:text-burnt-orange transition-colors"
          />
          <button
            onClick={() => {
              handleNavClick("contact", "/contact");
              setOpen(false);
            }}
            className="mt-6 bg-burnt-orange hover:bg-[#d15e15] text-white w-full px-6 py-4 rounded-lg font-heading font-semibold text-lg transition-colors shadow-md"
            aria-label="Convert to CNG today"
          >
            Convert today
          </button>
        </div>
      </div>
    </nav>
  );
}
