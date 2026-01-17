"use client";
import { siteConfig } from "@/config/site";

export default function NavLinks({
  activeSection,
  onNavigate,
  isMobile,
  closeNav,
}) {
  return (
    <>
      {siteConfig.navItems.map((item) => {
        const isActive = activeSection === item.id;

        return (
          <button
            key={item.id}
            onClick={() => {
              onNavigate(item.id,item.path);
              closeNav();
            }}
            className={`
              ${
                isMobile
                  ? `text-lg py-2 text-left border-b 
                     ${
                       isActive
                         ? "text-burnt-orange font-semibold"
                         : "text-gray-800 dark:text-gray-100"
                     }
                     border-gray-200 dark:border-gray-700`
                  : "relative font-medium text-gray-800 dark:text-gray-100"
              }
              hover:text-burnt-orange transition
            `}
          >
            {item.label}

            {!isMobile && (
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-burnt-orange transition-all ${
                  isActive ? "w-full" : "w-0"
                }`}
              />
            )}
          </button>
        );
      })}
    </>
  );
}
