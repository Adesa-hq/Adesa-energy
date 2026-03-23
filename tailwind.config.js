const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",

    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        "deep-blue": "var(--deep-blue)",
        "burnt-orange": "var(--burnt-orange)",
        "charcoal-gray": "var(--charcoal-gray)",
        "light-blue": "var(--light-blue)",
        "dark-blue": "var(--dark-blue)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui"],
        heading: ["var(--font-montserrat)", "system-ui"],
      },
    },
  },
  plugins: [heroui()],
};

module.exports = config;
