"use client";
import { motion } from "framer-motion";
import { PiggyBank, Percent, TrendingUp, Leaf, Truck } from "lucide-react";
import { siteConfig } from "@/config/site";

const CalculatorResults = ({ calculatorResult, onNavClick }) => {
  // Fail-safe number formatter
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
      className="bg-charcoal-gray/5 p-6 sm:p-8 border-l border-gray-200 flex flex-col"
      id="calculatorResults"
    >
      {calculatorResult ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          className="flex flex-col h-full"
        >
          <div className="text-center mb-6">
            <div className="w-14 h-14 bg-burnt-orange rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
              <PiggyBank className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-deep-blue font-heading">
              {siteConfig.calculator.results.title}
            </h3>
            <p className="text-gray-600 mt-1 font-sans font-medium">
              {siteConfig.calculator.results.vehicleTypePrefix}{" "}
              {calculatorResult.vehicleType}
            </p>
          </div>

          <div className="space-y-4 grow">
            <div className="bg-white rounded-xl p-5 border-l-4 border-burnt-orange shadow-sm transition-all hover:shadow-md">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-500 font-sans flex items-center font-medium">
                    <Percent className="w-4 h-4 mr-1 text-burnt-orange" />
                    {siteConfig.calculator.results.monthlySavingsLabel}
                  </p>
                  <p className="text-3xl font-bold text-deep-blue mt-1 font-heading">
                    {formatNumber(
                      parseInt(
                        calculatorResult.monthlySavings.replace(/[^0-9]/g, "")
                      )
                    )}
                  </p>
                </div>
                <div className="bg-burnt-orange/10 p-2 rounded-lg">
                  <Percent className="w-6 h-6 text-burnt-orange" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 border-l-4 border-light-blue shadow-sm transition-all hover:shadow-md">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-500 font-sans flex items-center font-medium">
                    <TrendingUp className="w-4 h-4 mr-1 text-light-blue" />
                    {siteConfig.calculator.results.yearlySavingsLabel}
                  </p>
                  <p className="text-3xl font-bold text-deep-blue mt-1 font-heading">
                    {formatNumber(
                      parseInt(
                        calculatorResult.yearlySavings.replace(/[^0-9]/g, "")
                      )
                    )}
                  </p>
                </div>
                <div className="bg-light-blue/10 p-2 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-light-blue" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-xl p-4 flex flex-col justify-around text-center shadow-sm border border-gray-100 transition-all hover:border-burnt-orange/50">
                <p className="text-sm text-gray-500 font-sans font-medium flex justify-center items-center">
                  <Percent className="w-4 h-4 mr-1 text-burnt-orange" />
                  {siteConfig.calculator.results.avgSavingsLabel}
                </p>
                <p className="text-2xl font-bold text-burnt-orange mt-1 font-heading">
                  {calculatorResult.savingsPercentage}%
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 flex flex-col justify-around text-center shadow-sm border border-gray-100 transition-all hover:border-green-500/50">
                <p className="text-sm text-gray-500 font-sans font-medium flex justify-center items-center">
                  <Leaf className="w-4 h-4 mr-1 text-green-600" />
                  {siteConfig.calculator.results.co2ReductionLabel}
                </p>
                <p className="text-2xl font-bold text-green-600 mt-1 font-heading">
                  {formatNumber(calculatorResult.co2Reduction)} kg/month
                </p>
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavClick("contact")}
            className="mt-6 w-full bg-linear-to-r from-burnt-orange to-[#EE3E23] text-white py-3.5 rounded-lg font-bold text-center hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-burnt-orange focus:ring-offset-2 font-sans"
          >
            {siteConfig.calculator.results.convertButton}
          </motion.button>
          <p className="text-xs text-gray-500 text-center mt-2 font-sans">
            {siteConfig.calculator.results.footerText}
          </p>
        </motion.div>
      ) : (
        <div className="h-full flex flex-col justify-center items-center text-center p-4">
          <div className="w-14 h-14 bg-light-blue/20 rounded-xl flex items-center justify-center mb-4">
            <Truck className="w-7 h-7 text-deep-blue" />
          </div>
          <h3 className="text-xl font-bold text-deep-blue mb-2 font-heading">
            {siteConfig.calculator.results.noResult.title}
          </h3>
          <p className="text-gray-600 max-w-xs font-sans">
            {siteConfig.calculator.results.noResult.description}
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 w-full max-w-xs">
            <div className="bg-burnt-orange/10 p-3 rounded-lg border border-dashed border-burnt-orange">
              <p className="text-xs text-deep-blue font-sans font-medium">
                {siteConfig.calculator.results.noResult.bullet1}
              </p>
            </div>
            <div className="bg-light-blue/10 p-3 rounded-lg border border-dashed border-light-blue">
              <p className="text-xs text-deep-blue font-sans font-medium">
                {siteConfig.calculator.results.noResult.bullet2}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalculatorResults;
