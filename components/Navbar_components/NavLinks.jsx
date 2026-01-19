"use client";
import { siteConfig } from "@/config/site";
import { useState } from "react";

export default function NavLinks({
  activeSection,
  onNavigate,
  isMobile,
  closeNav,
}) {
  const [moreOpen, setMoreOpen] = useState(false);

  const mainLinks = siteConfig.navItems.slice(0, 5); // Home → Calculator
  const extraLinks = siteConfig.navItems.slice(5); // Resources → Contact

  const renderLink = (item, isDropdown = false) => {
    const isActive = activeSection === item.id;

    // Apply active styles for both main and dropdown links
    const baseClasses = isMobile
      ? `text-lg py-2 text-left border-b ${
          isActive
            ? "text-burnt-orange font-semibold"
            : "text-gray-800 dark:text-gray-100"
        } border-gray-200 dark:border-gray-700`
      : `relative font-medium px-2 py-1 ${
          isDropdown
            ? `w-full text-left ${isActive ? "text-burnt-orange font-semibold" : "text-gray-800 dark:text-gray-100"}`
            : `${isActive ? "text-burnt-orange font-semibold" : "text-gray-800 dark:text-gray-100"} hover:text-burnt-orange transition-colors`
        }`;

    return (
      <button
        key={item.id}
        onClick={() => {
          onNavigate(item.id, item.path);
          closeNav?.();
          setMoreOpen(false);
        }}
        className={`${baseClasses}`}
      >
        {item.label}
        {!isMobile && !isDropdown && (
          <span
            className={`absolute left-0 -bottom-1 h-0.5 bg-burnt-orange transition-all ${
              isActive ? "w-full" : "w-0"
            }`}
          />
        )}
      </button>
    );
  };

  return (
    <div
      className={`flex ${isMobile ? "flex-col gap-0" : "items-center gap-2"}`}
    >
      {mainLinks.map((item) => renderLink(item))}

      {!isMobile && extraLinks.length > 0 && (
        <div className="relative">
          <button
            onClick={() => setMoreOpen((v) => !v)}
            className={`font-medium px-2 py-1 transition-colors ${
              extraLinks.some((l) => l.id === activeSection)
                ? "text-burnt-orange font-semibold"
                : "text-gray-800 dark:text-gray-100 hover:text-burnt-orange"
            }`}
          >
            More
          </button>

          {moreOpen && (
            <div className="absolute right-0 mt-1 w-40 bg-white dark:bg-dark-blue border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50 flex flex-col">
              {extraLinks.map((item) => renderLink(item, true))}
            </div>
          )}
        </div>
      )}

      {isMobile && extraLinks.map((item) => renderLink(item))}
    </div>
  );
}
