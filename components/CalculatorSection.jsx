"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { siteConfig } from "@/config/site";
import CalculatorHeader from "./Calculator_components/CalculatorHeader";
import CalculatorForm from "./Calculator_components/CalculatorForm";
import CalculatorResults from "./Calculator_components/CalculatorResults";
import PriceCards from "./Calculator_components/PriceCards";
import { formatCurrency } from "./Calculator_components/utils";

const CalculatorSection = ({ onNavClick }) => {
  const [calculatorResult, setCalculatorResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const resultsRef = useRef(null);

  useEffect(() => {
    if (calculatorResult && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [calculatorResult]);

  const handleCalculatorSubmit = (e, values) => {
    e.preventDefault();
    setIsCalculating(true);
    setCalculatorResult(null);

    const { calculatorInputType, monthlySpend, monthlyLiters, vehicleType } =
      values;

    const parsedSpend =
      calculatorInputType === "spend" ? parseFloat(monthlySpend) || 0 : 0;
    const parsedLiters =
      calculatorInputType === "liters" ? parseFloat(monthlyLiters) || 0 : 0;

    let monthlyPetrolSpend, monthlyPetrolLiters;

    if (calculatorInputType === "spend") {
      monthlyPetrolSpend = parsedSpend;
      monthlyPetrolLiters =
        monthlyPetrolSpend / siteConfig.calculator.prices.petrol;
    } else {
      monthlyPetrolLiters = parsedLiters;
      monthlyPetrolSpend =
        monthlyPetrolLiters * siteConfig.calculator.prices.petrol;
    }

    const monthlySavings =
      monthlyPetrolSpend * (siteConfig.calculator.savingsPercentage / 100);
    const yearlySavings = monthlySavings * 12;
    const co2Reduction =
      monthlyPetrolLiters * siteConfig.calculator.co2PerLiter;
    const multiplier =
      siteConfig.calculator.vehicleMultipliers[vehicleType] || 1;

    setCalculatorResult({
      monthlySavings: formatCurrency(monthlySavings * multiplier),
      yearlySavings: formatCurrency(yearlySavings * multiplier),
      savingsPercentage: siteConfig.calculator.savingsPercentage,
      co2Reduction: Math.round(co2Reduction * multiplier),
      vehicleType: vehicleType.charAt(0).toUpperCase() + vehicleType.slice(1),
    });

    setTimeout(() => setIsCalculating(false), 300);
  };

  return (
    <motion.section
      id="calculator"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 bg-linear-to-br from-deep-blue via-dark-blue to-deep-blue text-white relative overflow-hidden"
    >
      <CalculatorHeader />
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/10 grid lg:grid-cols-2">
          <CalculatorForm
            onSubmit={handleCalculatorSubmit}
            isCalculating={isCalculating}
          />
          <div ref={resultsRef}>
            <CalculatorResults
              calculatorResult={calculatorResult}
              onNavClick={onNavClick}
            />
          </div>
        </div>
        <PriceCards />
      </div>
    </motion.section>
  );
};

export default CalculatorSection;
