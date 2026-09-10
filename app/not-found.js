"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Home, Compass } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-white dark:bg-[#081126] px-4 text-center relative overflow-hidden py-24 transition-colors">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg mx-auto space-y-6" 
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-burnt-orange/10 border border-burnt-orange/20 text-burnt-orange font-semibold text-xs uppercase tracking-wider">
          <Compass className="w-3.5 h-3.5" />
          <span>Page Not Found</span>
        </div>

        <h1 className="text-7xl sm:text-8xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
          404
        </h1>

        <p className="text-slate-600 dark:text-slate-300 font-sans text-base sm:text-lg max-w-md mx-auto leading-relaxed">
          The requested page could not be located. It may have been relocated or updated.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => router.push("/")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-linear-to-r from-[#F37621] to-[#F59E0B] text-white font-heading font-bold text-sm shadow-md hover:shadow-orange-500/30 transition-all cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </button>

          <button
            onClick={() => router.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-white font-heading font-semibold text-sm hover:bg-slate-200 dark:hover:bg-white/15 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
