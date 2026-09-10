"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { siteConfig } from "@/config/site";
import { formatCurrency } from "./utils";
import { useRouter } from "next/navigation";
import CalculatorHeader from "./CalculatorHeader";
import CalculatorForm from "./CalculatorForm";
import CalculatorResults from "./CalculatorResults";
import PriceCards from "./PriceCards";


const CalculatorSection = () => {
  const [calculatorResult, setCalculatorResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const { prices, co2PerLiter, vehicleMultipliers } = siteConfig.calculator;
  const resultsRef = useRef(null);
  const router = useRouter();

  const onNavClick = (path) => router.push(path);

  useEffect(() => {
    if (calculatorResult && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [calculatorResult]);

  // Calculate the savings percentage based on the price difference between petrol and CNG
  const savingsPercentage =
    ((prices.petrol - prices.cng) / prices.petrol) * 100;

  // Function for handling savings and CO2 reduction calculations
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

    let monthlyFuelSpend, monthlyFuelLiters;

    // Calculating fuel spend or liters based on input type (spend or liters)
    if (calculatorInputType === "spend") {
      monthlyFuelSpend = parsedSpend;
      monthlyFuelLiters = monthlyFuelSpend / prices.petrol; // Always using petrol price
    } else {
      monthlyFuelLiters = parsedLiters;
      monthlyFuelSpend = monthlyFuelLiters * prices.petrol; // Always using petrol price
    }

    // Monthly and yearly savings stay fixed, do NOT apply vehicle multiplier here
    const monthlySavings = monthlyFuelSpend * (savingsPercentage / 100);
    const yearlySavings = monthlySavings * 12;

    // CO2 reduction calculation
    // CO2 reduction per month = liters used * CO2 per liter
    const baseCO2Reduction = monthlyFuelLiters * co2PerLiter;
    const multiplier = vehicleMultipliers[vehicleType.toLowerCase()] || 1;
    const co2Reduction = baseCO2Reduction * multiplier; // vehicle type affects only CO2

    setCalculatorResult({
      monthlySavings: formatCurrency(monthlySavings),
      yearlySavings: formatCurrency(yearlySavings),
      savingsPercentage: savingsPercentage.toFixed(2),
      co2Reduction: Math.round(co2Reduction), // CO2 reduction in kg/month
      vehicleType: vehicleType.charAt(0).toUpperCase() + vehicleType.slice(1),
    });
    setTimeout(() => setIsCalculating(false), 300);
  };

  return (
    <section
      id="calculator"
      className="py-20 lg:py-28 bg-[#081126] text-white relative overflow-hidden transition-colors"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CalculatorHeader />
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-[#0E1A38] rounded-3xl shadow-2xl overflow-hidden border border-slate-200/80 dark:border-white/10 grid lg:grid-cols-2">
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
          <PriceCards
            savings={savingsPercentage.toFixed(2)}
            petrol={prices.petrol}
            cng={prices.cng}
          />
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
