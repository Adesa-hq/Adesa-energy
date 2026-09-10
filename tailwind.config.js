/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
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
        "solar-amber": "#f59e0b",
        "clean-emerald": "#10b981",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        inter: ["var(--font-sans)", "system-ui", "sans-serif"],
        montserrat: ["var(--font-heading)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

module.exports = config;
