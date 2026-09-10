"use client";
import { motion } from "framer-motion";
import { PiggyBank, Percent, TrendingUp, Leaf, Truck, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

const CalculatorResults = ({ calculatorResult, onNavClick }) => {
  const formatNumber = (amount) => {
    if (amount >= 1_000_000) return `₦${(amount / 1_000_000).toFixed(1)}M`;
    if (amount >= 1_000) return `₦${(amount / 1_000).toFixed(0)}K`;
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div
      className="p-7 sm:p-8 bg-slate-50 dark:bg-[#091329] border-t lg:border-t-0 lg:border-l border-slate-200/80 dark:border-white/10 flex flex-col justify-between h-full"
      id="calculatorResults"
    >
      {calculatorResult ? (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col h-full justify-between space-y-6"
        >
          <div>
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-linear-to-br from-[#F37621] to-[#F59E0B] rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-md shadow-orange-500/20 text-white">
                <PiggyBank className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
                {siteConfig.calculator.results.title}
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-burnt-orange mt-1">
                {siteConfig.calculator.results.vehicleTypePrefix}{" "}
                {calculatorResult.vehicleType}
              </p>
            </div>

            <div className="space-y-3">
              {/* Monthly Savings Card */}
              <div className="bg-white dark:bg-[#0E1A38] rounded-2xl p-4 sm:p-5 border-l-4 border-burnt-orange border border-slate-200/80 dark:border-white/10 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-heading font-semibold uppercase tracking-wider">
                    {siteConfig.calculator.results.monthlySavingsLabel}
                  </p>
                  <p className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 dark:text-white mt-1">
                    {formatNumber(
                      parseInt(
                        calculatorResult.monthlySavings.replace(/[^0-9]/g, "")
                      )
                    )}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-burnt-orange/10 text-burnt-orange flex items-center justify-center">
                  <Percent className="w-5 h-5" />
                </div>
              </div>

              {/* Yearly Savings Card */}
              <div className="bg-white dark:bg-[#0E1A38] rounded-2xl p-4 sm:p-5 border-l-4 border-sky-500 border border-slate-200/80 dark:border-white/10 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-heading font-semibold uppercase tracking-wider">
                    {siteConfig.calculator.results.yearlySavingsLabel}
                  </p>
                  <p className="text-2xl sm:text-3xl font-heading font-extrabold text-sky-500 dark:text-sky-400 mt-1">
                    {formatNumber(
                      parseInt(
                        calculatorResult.yearlySavings.replace(/[^0-9]/g, "")
                      )
                    )}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>

              {/* Metrics row */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="bg-white dark:bg-[#0E1A38] rounded-2xl p-3.5 text-center border border-slate-200/80 dark:border-white/10 shadow-sm">
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                    {siteConfig.calculator.results.avgSavingsLabel}
                  </p>
                  <p className="text-xl font-heading font-bold text-burnt-orange mt-0.5">
                    {calculatorResult.savingsPercentage}%
                  </p>
                </div>
                <div className="bg-white dark:bg-[#0E1A38] rounded-2xl p-3.5 text-center border border-slate-200/80 dark:border-white/10 shadow-sm">
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                    CO2 Cut
                  </p>
                  <p className="text-xl font-heading font-bold text-emerald-500 mt-0.5">
                    {calculatorResult.co2Reduction} kg
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavClick("/convert")}
              className="w-full inline-flex items-center justify-center gap-2 bg-linear-to-r from-[#F37621] to-[#F59E0B] text-white py-3.5 rounded-xl font-heading font-bold text-sm shadow-md hover:shadow-orange-500/30 transition-all cursor-pointer"
            >
              <span>{siteConfig.calculator.results.convertButton}</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center mt-2.5 font-sans">
              {siteConfig.calculator.results.footerText}
            </p>
          </div>
        </motion.div>
      ) : (
        <div className="h-full flex flex-col justify-center items-center text-center py-10 px-4 space-y-4">
          <div className="w-14 h-14 bg-sky-500/10 border border-sky-500/20 rounded-2xl flex items-center justify-center text-sky-400 shadow-sm">
            <Truck className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white">
              {siteConfig.calculator.results.noResult.title}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs max-w-xs font-sans">
              {siteConfig.calculator.results.noResult.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2.5 w-full max-w-xs pt-2">
            <div className="bg-amber-500/10 dark:bg-amber-500/5 p-2.5 rounded-xl border border-amber-500/20 text-xs font-semibold text-burnt-orange text-center">
              {siteConfig.calculator.results.noResult.bullet1}
            </div>
            <div className="bg-sky-500/10 dark:bg-sky-500/5 p-2.5 rounded-xl border border-sky-500/20 text-xs font-semibold text-sky-500 dark:text-sky-400 text-center">
              {siteConfig.calculator.results.noResult.bullet2}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalculatorResults;
