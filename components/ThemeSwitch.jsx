"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";

const subscribeToHydration = () => () => {};

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribeToHydration,
    () => true,
    () => false,
  );

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/60 animate-pulse" />
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative p-2.5 rounded-xl bg-slate-100/90 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/15 text-slate-700 dark:text-amber-300 border border-slate-200/80 dark:border-white/10 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-burnt-orange/50 cursor-pointer flex items-center justify-center"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -10, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 10, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.2 }}
        >
          {isDark ? (
            <Sun className="w-4 h-4 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
          ) : (
            <Moon className="w-4 h-4 text-slate-700" />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}
