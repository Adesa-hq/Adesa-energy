"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Flame, Calculator, ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";

const CalculatorForm = ({ onSubmit, isCalculating }) => {
  const [calculatorInputType, setCalculatorInputType] = useState("spend");
  const [monthlySpend, setMonthlySpend] = useState("");
  const [monthlyLiters, setMonthlyLiters] = useState("");
  const [vehicleType, setVehicleType] = useState("sedan");

  return (
    <div className="p-7 sm:p-8 bg-white dark:bg-[#0E1A38] text-slate-900 dark:text-white flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-burnt-orange/15 text-burnt-orange flex items-center justify-center">
            <Flame className="w-5 h-5" />
          </div>
          <span>Input Fuel Profile</span>
        </h3>

        <form
          onSubmit={(e) =>
            onSubmit(e, {
              calculatorInputType,
              monthlySpend,
              monthlyLiters,
              vehicleType,
            })
          }
          className="space-y-5"
        >
          {/* Input Type Toggle */}
          <div>
            <label className="block text-xs font-heading font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2">
              Calculation Basis
            </label>
            <div className="grid grid-cols-2 p-1 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10">
              {["spend", "liters"].map((type) => (
                <button
                  type="button"
                  key={type}
                  onClick={() => setCalculatorInputType(type)}
                  className={`py-2 px-3 text-xs sm:text-sm font-heading font-bold rounded-lg transition-all cursor-pointer ${
                    calculatorInputType === type
                      ? "bg-white dark:bg-[#081126] text-slate-900 dark:text-white shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {siteConfig.calculator.form.inputType[type]}
                </button>
              ))}
            </div>
          </div>

          {/* Spend Input */}
          {calculatorInputType === "spend" && (
            <div>
              <label className="block text-xs font-heading font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2">
                {siteConfig.calculator.form.spendLabel}
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold">
                  ₦
                </span>
                <input
                  type="text"
                  value={monthlySpend
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  onChange={(e) => {
                    const rawValue = e.target.value.replace(/,/g, "");
                    if (!isNaN(rawValue)) {
                      setMonthlySpend(rawValue);
                    }
                  }}
                  placeholder={siteConfig.calculator.form.spendPlaceholder}
                  required
                  className="w-full pl-9 pr-4 py-3 bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white border border-slate-200/80 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-burnt-orange focus:border-burnt-orange transition text-sm font-sans font-medium placeholder:text-slate-400"
                />
              </div>
            </div>
          )}

          {/* Liters Input */}
          {calculatorInputType === "liters" && (
            <div>
              <label className="block text-xs font-heading font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2">
                {siteConfig.calculator.form.litersLabel}
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={monthlyLiters
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  onChange={(e) => {
                    const rawValue = e.target.value.replace(/,/g, "");
                    if (!isNaN(rawValue)) {
                      setMonthlyLiters(rawValue);
                    }
                  }}
                  placeholder={siteConfig.calculator.form.litersPlaceholder}
                  required
                  className="w-full pl-4 pr-9 py-3 bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white border border-slate-200/80 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-burnt-orange focus:border-burnt-orange transition text-sm font-sans font-medium placeholder:text-slate-400"
                />
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-xs">
                  LTR
                </span>
              </div>
            </div>
          )}

          {/* Vehicle Select */}
          <div className="relative">
            <label className="block text-xs font-heading font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2">
              {siteConfig.calculator.form.vehicleTypeLabel}
            </label>
            <div className="relative">
              <select
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                required
                className="w-full px-4 py-3 pr-10 bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white border border-slate-200/80 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-burnt-orange focus:border-burnt-orange transition text-sm font-sans font-medium appearance-none cursor-pointer"
              >
                {siteConfig.calculator.form.vehicleOptions.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-white dark:bg-[#0E1A38] text-slate-900 dark:text-white">
                    {opt.label}
                  </option>
                ))}
              </select>
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isCalculating}
            className="w-full bg-linear-to-r from-[#F37621] to-[#F59E0B] text-white py-3.5 rounded-xl font-heading font-bold text-sm shadow-md hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed pt-3"
          >
            {isCalculating ? (
              <span className="flex items-center gap-2">
                <span>{siteConfig.calculator.form.calculatingText}</span>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              </span>
            ) : (
              <>
                <span>{siteConfig.calculator.form.calculateButton}</span>
                <Calculator className="w-4 h-4" />
              </>
            )}
          </motion.button>
        </form>
      </div>

      {/* Disclaimer */}
      <div className="mt-5 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/5">
        <p className="text-[11px] text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
          ⓘ {siteConfig.calculator.form.disclaimer
            .replace("{petrolPrice}", siteConfig.calculator.priceDisplay.petrol)
            .replace("{cngPrice}", siteConfig.calculator.priceDisplay.cng)}
        </p>
      </div>
    </div>
  );
};

export default CalculatorForm;
