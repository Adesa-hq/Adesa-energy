"use client";

const items = [
  "home",
  "about",
  "solutions",
  "calculator",
  "resources",
  "blog",
  "contact",
];

export default function NavLinks({
  activeSection,
  onNavigate,
  isMobile,
}) {
  return (
    <>
      {items.map((item) => (
        <button
          key={item}
          onClick={() => onNavigate(item)}
          className={`${
            isMobile
              ? "text-lg py-2 border-b border-gray-200 dark:border-gray-700 text-left"
              : "relative font-medium"
          } text-gray-800 dark:text-gray-100 hover:text-burnt-orange transition`}
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
          {!isMobile && (
            <span
              className={`absolute left-0 -bottom-1 h-0.5 bg-burnt-orange transition-all ${
                activeSection === item ? "w-full" : "w-0"
              }`}
            />
          )}
        </button>
      ))}
    </>
  );
}