"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import NavLinks from "./NavLinks";

export default function Navbar({ activeSection, handleNavClick }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <button
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-2"
        >
          <Image
            src="/adesa-energy.png"
            alt="Adesa Logo"
            width={50}
            height={50}
          />
        </button>

        <div className="hidden lg:flex items-center gap-8">
          <NavLinks activeSection={activeSection} onNavigate={handleNavClick} />
          <ThemeSwitch />
          <button
            onClick={() => handleNavClick("contact")}
            className="bg-orange-500 text-white px-5 py-2 rounded-lg font-semibold"
          >
            Convert today
          </button>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="lg:hidden text-gray-800 dark:text-gray-100"
        >
          <Menu size={24} />
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 shadow-xl transform transition ${
          open ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 text-gray-800 dark:text-gray-100"
        >
          <X size={24} />
        </button>

        <div className="mt-20 px-6 flex flex-col gap-4">
          <NavLinks
            activeSection={activeSection}
            onNavigate={(s) => {
              handleNavClick(s);
              setOpen(false);
            }}
            isMobile
          />
          <ThemeSwitch />
          <button
            onClick={() => handleNavClick("contact")}
            className="mt-4 bg-orange-500 text-white px-5 py-3 rounded-lg font-semibold"
          >
            Convert today
          </button>
        </div>
      </div>
    </nav>
  );
}
