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
    <div className="p-6 sm:p-8 bg-linear-to-b from-white to-slate-50">
      <h3 className="text-xl font-bold text-deep-blue mb-6 flex items-center font-heading">
        <Flame className="w-6 h-6 mr-2 text-burnt-orange" />
        Vehicle Details
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
        className="space-y-6"
      >
        {/* Input Type Toggle */}
        <div>
          <label className="block text-sm font-medium text-deep-blue mb-2 font-sans">
            Input Type
          </label>
          <div className="flex rounded-lg overflow-hidden border border-gray-200">
            {["spend", "liters"].map((type) => (
              <button
                type="button"
                key={type}
                onClick={() => setCalculatorInputType(type)}
                className={`flex-1 py-3 px-4 font-medium transition-all duration-300 font-sans ${
                  calculatorInputType === type
                    ? "bg-deep-blue text-white shadow-md"
                    : "bg-gray-50 text-deep-blue hover:bg-gray-100"
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
            <label className="block text-sm font-medium text-deep-blue mb-2 font-sans">
              {siteConfig.calculator.form.spendLabel}
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-deep-blue font-sans font-medium">
                ₦
              </span>
              <input
                type="text"
                value={monthlySpend
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                onChange={(e) => {
                  // Remove commas for internal state
                  const rawValue = e.target.value.replace(/,/g, "");
                  if (!isNaN(rawValue)) {
                    setMonthlySpend(rawValue);
                  }
                }}
                placeholder={siteConfig.calculator.form.spendPlaceholder}
                required
                min="0"
                step="1000"
                className="w-full pl-8 pr-4 py-3 border text-deep-blue border-gray-300 rounded-lg focus:ring-2 focus:ring-burnt-orange focus:border-burnt-orange transition font-sans"
              />
            </div>
          </div>
        )}

        {/* Liters Input */}
        {calculatorInputType === "liters" && (
          <div>
            <label className="block text-sm font-medium text-deep-blue mb-2 font-sans">
              {siteConfig.calculator.form.litersLabel}
            </label>
            <div className="relative">
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-deep-blue font-sans font-medium">
                L
              </span>
              <input
                type="text"
                value={monthlyLiters
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                onChange={(e) => {
                  // Remove commas for internal state
                  const rawValue = e.target.value.replace(/,/g, "");
                  if (!isNaN(rawValue)) {
                    setMonthlyLiters(rawValue);
                  }
                }}
                placeholder={siteConfig.calculator.form.litersPlaceholder}
                required
                min="0"
                step="5"
                className="w-full pr-8 pl-4 py-3 text-deep-blue border border-gray-300 rounded-lg focus:ring-2 focus:ring-burnt-orange focus:border-burnt-orange transition font-sans"
              />
            </div>
          </div>
        )}

        {/* Vehicle Select */}
        <div className="relative">
          <label className="block text-sm font-medium text-deep-blue mb-2 font-sans">
            {siteConfig.calculator.form.vehicleTypeLabel}
          </label>
          <select
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            required
            className="w-full px-4 py-3 pr-10 text-deep-blue border border-gray-300 rounded-lg focus:ring-2 focus:ring-burnt-orange focus:border-burnt-orange transition font-sans appearance-none bg-white"
          >
            {siteConfig.calculator.form.vehicleOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {/* Custom Arrow */}
          <div className="absolute right-3 top-13 transform -translate-y-1/2 pointer-events-none text-deep-blue">
            <ChevronDown />
          </div>
        </div>

        {/* Submit */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isCalculating}
          className="w-full bg-deep-blue hover:bg-dark-blue text-white py-4 rounded-lg font-bold text-lg hover:shadow-md transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-deep-blue focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed font-sans"
        >
          {isCalculating ? (
            <span className="flex items-center">
              <span>{siteConfig.calculator.form.calculatingText}</span>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="ml-3 w-6 h-6 border-2 border-white border-t-transparent rounded-full"
              />
            </span>
          ) : (
            <>
              {siteConfig.calculator.form.calculateButton}
              <Calculator className="w-5 h-5 ml-2 text-light-blue" />
            </>
          )}
        </motion.button>
      </form>

      {/* Disclaimer */}
      <div className="mt-4 p-3 bg-deep-blue/5 rounded-lg border border-deep-blue/10">
        <p className="text-xs text-deep-blue font-sans flex items-start">
          <span className="mr-1">ⓘ</span>
          <span>
            {siteConfig.calculator.form.disclaimer
              .replace(
                "{petrolPrice}",
                siteConfig.calculator.priceDisplay.petrol
              )
              .replace("{cngPrice}", siteConfig.calculator.priceDisplay.cng)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CalculatorForm;
