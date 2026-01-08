"use client";

import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Fuel,
  Wallet,
  Leaf,
  ShieldCheck,
  Settings,
  Zap,
  Users,
  HeartHandshake,
  Globe,
  Car,
  Truck,
  Wrench,
  GraduationCap,
  TrendingUp,
  Star,
  ChevronDown,
  Download,
  Newspaper,
  Lightbulb,
  Megaphone,
  MapPin,
  Phone,
  Mail,
  Globe as GlobeIcon,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Send,
  PiggyBank,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";
import Image from "next/image";
import Navbar from "./Navbar";

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [calculatorInputType, setCalculatorInputType] = useState("spend");
  const [calculatorResult, setCalculatorResult] = useState(null);
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);
  const [isContactFormSubmitted, setIsContactFormSubmitted] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const sectionRefs = useRef({});
  const observer = useRef(null);

  // Mobile menu handlers
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Calculator handlers
  const handleCalculatorSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const monthlyValue = parseFloat(
      formData.get(
        calculatorInputType === "spend" ? "monthlySpend" : "monthlyLiters"
      )
    );

    if (isNaN(monthlyValue) || monthlyValue <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    const PETROL_PRICE = 700;
    const CNG_PRICE = 350;

    let monthlyPetrolCost, monthlyLiters;
    if (calculatorInputType === "spend") {
      monthlyPetrolCost = monthlyValue;
      monthlyLiters = monthlyPetrolCost / PETROL_PRICE;
    } else {
      monthlyLiters = monthlyValue;
      monthlyPetrolCost = monthlyLiters * PETROL_PRICE;
    }

    const monthlyCNGCost = monthlyLiters * CNG_PRICE;
    const monthlySavings = monthlyPetrolCost - monthlyCNGCost;
    const yearlySavings = monthlySavings * 12;
    const savingsPercentage = (
      (monthlySavings / monthlyPetrolCost) *
      100
    ).toFixed(0);
    const co2Reduction = (monthlyLiters * 2.3 * 0.3).toFixed(0);

    setCalculatorResult({
      monthlySavings: monthlySavings.toLocaleString(),
      yearlySavings: yearlySavings.toLocaleString(),
      savingsPercentage,
      co2Reduction,
    });
  };

  // Accordion handler
  const toggleAccordion = (index) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };

  // Contact form handler
  const handleContactSubmit = (e) => {
    e.preventDefault();
    setIsContactFormSubmitted(true);

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsContactFormSubmitted(false);
      e.target.reset();
    }, 5000);
  };

  // Newsletter handler
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    alert(
      `Thank you for subscribing! You'll receive our latest updates at ${email}`
    );
    e.target.reset();
  };

  // Scroll spy effect
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(observerCallback, {
      rootMargin: "-20% 0px -50% 0px",
      threshold: 0.1,
    });

    sections.forEach((section) => {
      observer.current.observe(section);
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  // Navigation handler
  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    closeMobileMenu();
  };

  return (
    <div className="bg-gray-50 text-charcoal-gray min-h-screen">
      {/* Navigation */}
      <Navbar activeSection={activeSection} handleNavClick={handleNavClick} />

      {/* Hero Section */}
      <section
        id="home"
        className="hero-gradient min-h-screen flex items-center pt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <p className="text-light-blue font-semibold mb-4 tracking-wide">
                POWERING PROGRESS, FUELING TOMORROW
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-montserrat">
                Tired of unpredictable fuel costs eating into your profits
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Powering your journey with mobile CNG conversions and refueling,
                saving you money and the planet, one mile at a time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleNavClick("contact")}
                  className="bg-burnt-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition inline-flex items-center justify-center focus:outline-none"
                >
                  Convert today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button
                  onClick={() => handleNavClick("calculator")}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-deep-blue transition inline-flex items-center justify-center focus:outline-none"
                >
                  Calculate savings
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/20">
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-burnt-orange">
                    50%
                  </p>
                  <p className="text-gray-300 mt-1">Average fuel savings</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-burnt-orange">
                    500+
                  </p>
                  <p className="text-gray-300 mt-1">Vehicles converted</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-burnt-orange">
                    24/7
                  </p>
                  <p className="text-gray-300 mt-1">Support available</p>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                <div className="bg-gradient-to-br from-light-blue/20 to-burnt-orange/20 rounded-2xl p-6 flex items-center justify-center min-h-[400px]">
                  <div className="text-center">
                    <Fuel className="w-32 h-32 text-white mx-auto mb-6" />
                    <p className="text-white text-xl font-semibold">
                      Clean Energy Solutions
                    </p>
                    <p className="text-gray-300 mt-2">
                      Sustainable. Affordable. Reliable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-burnt-orange font-semibold mb-2">
              WHY CHOOSE CNG
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-deep-blue font-montserrat">
              The smart choice for your vehicle
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Wallet,
                title: "Cost savings",
                desc: "Save up to 50% on fuel costs compared to petrol or diesel.",
              },
              {
                icon: Leaf,
                title: "Eco-friendly",
                desc: "Reduce carbon emissions by up to 30% with cleaner burning fuel.",
              },
              {
                icon: ShieldCheck,
                title: "Safe and reliable",
                desc: "CNG systems meet international safety standards and certifications.",
              },
              {
                icon: Settings,
                title: "Low maintenance",
                desc: "CNG engines experience less wear, extending vehicle lifespan.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="card-hover bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-light-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-deep-blue" />
                </div>
                <h3 className="text-xl font-semibold text-deep-blue mb-2 font-montserrat">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-burnt-orange font-semibold mb-2">ABOUT US</p>
              <h2 className="text-3xl md:text-4xl font-bold text-deep-blue font-montserrat mb-6">
                Powering progress, fueling tomorrow
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Adesa Energy is a pioneering clean energy company dedicated to
                revolutionizing the way Nigeria powers its vehicles. Founded
                with a vision to make sustainable fuel accessible to everyone,
                we specialize in mobile CNG conversions and on-demand refueling
                services.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Our mission is simple: to help businesses and individuals reduce
                their fuel costs while contributing to a cleaner environment.
                With our innovative approach and commitment to excellence, we&apos;re
                making CNG adoption effortless and rewarding.
              </p>

              {/* Mission & Vision */}
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-burnt-orange/10 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-burnt-orange" />
                  </div>
                  <h3 className="text-lg font-semibold text-deep-blue mb-2 font-montserrat">
                    Our mission
                  </h3>
                  <p className="text-gray-600 text-sm">
                    To provide accessible, affordable, and sustainable CNG
                    solutions that empower Nigerian businesses and individuals.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-light-blue/20 rounded-lg flex items-center justify-center mb-4">
                    <GlobeIcon className="w-6 h-6 text-deep-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-deep-blue mb-2 font-montserrat">
                    Our vision
                  </h3>
                  <p className="text-gray-600 text-sm">
                    To be West Africa&apos;s leading CNG solutions provider, driving
                    the transition to cleaner transportation.
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleNavClick("contact")}
                className="inline-flex items-center text-burnt-orange font-semibold hover:underline focus:outline-none"
              >
                Partner with us
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
            <div className="space-y-6">
              {/* Values */}
              <div className="bg-deep-blue text-white p-8 rounded-2xl">
                <h3 className="text-xl font-semibold mb-6 font-montserrat">
                  Our core values
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: Zap,
                      title: "Innovation",
                      desc: "Continuously improving our solutions and services.",
                    },
                    {
                      icon: Users,
                      title: "Customer focus",
                      desc: "Your success is our priority.",
                    },
                    {
                      icon: HeartHandshake,
                      title: "Integrity",
                      desc: "Transparent and honest in all dealings.",
                    },
                    {
                      icon: GlobeIcon,
                      title: "Sustainability",
                      desc: "Committed to environmental stewardship.",
                    },
                  ].map((value, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div
                        className={`w-10 h-10 ${
                          index % 2 === 0 ? "bg-burnt-orange" : "bg-light-blue"
                        } rounded-lg flex items-center justify-center flex-shrink-0`}
                      >
                        <value.icon
                          className={`w-5 h-5 ${
                            index % 2 === 0 ? "text-white" : "text-deep-blue"
                          }`}
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{value.title}</h4>
                        <p className="text-gray-300 text-sm">{value.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Partners */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-sm text-gray-500 mb-4 text-center">
                  Trusted by industry leaders
                </p>
                <div className="flex items-center justify-center space-x-8 opacity-50">
                  <div className="w-20 h-8 bg-gray-300 rounded"></div>
                  <div className="w-20 h-8 bg-gray-300 rounded"></div>
                  <div className="w-20 h-8 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-burnt-orange font-semibold mb-2">
              OUR SOLUTIONS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-deep-blue font-montserrat mb-4">
              Comprehensive CNG services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From conversion to refueling, we provide end-to-end solutions
              tailored to your needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Car,
                title: "Mobile CNG conversion",
                desc: "Professional conversion services at your location. Our certified technicians handle everything from assessment to installation.",
                gradient: "from-deep-blue to-dark-blue",
                items: [
                  "On-site conversion",
                  "Certified equipment",
                  "12-month warranty",
                ],
              },
              {
                icon: Fuel,
                title: "On-demand refueling",
                desc: "Never worry about finding a CNG station. Our mobile refueling units come to you, wherever you are.",
                gradient: "from-burnt-orange to-orange-600",
                items: [
                  "24/7 availability",
                  "Quick response time",
                  "Competitive pricing",
                ],
              },
              {
                icon: Truck,
                title: "Fleet conversion packages",
                desc: "Comprehensive fleet solutions with volume discounts, dedicated support, and flexible payment plans.",
                gradient: "from-light-blue to-cyan-500",
                items: [
                  "Volume discounts",
                  "Fleet management tools",
                  "Priority support",
                ],
              },
            ].map((solution, index) => (
              <div
                key={index}
                className="card-hover bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`h-48 bg-gradient-to-br ${solution.gradient} flex items-center justify-center`}
                >
                  <solution.icon className="w-20 h-20 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-deep-blue mb-3 font-montserrat">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{solution.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {solution.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-burnt-orange mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleNavClick("contact")}
                    className="text-burnt-orange font-semibold hover:underline inline-flex items-center focus:outline-none"
                  >
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-deep-blue rounded-2xl p-8 text-white">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-burnt-orange rounded-xl flex items-center justify-center flex-shrink-0">
                  <Wrench className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-montserrat">
                    Maintenance and support
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Regular maintenance services to keep your CNG system running
                    at peak performance. Our expert technicians ensure safety
                    and efficiency.
                  </p>
                  <button
                    onClick={() => handleNavClick("contact")}
                    className="text-light-blue font-semibold hover:underline inline-flex items-center focus:outline-none"
                  >
                    Schedule service <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-burnt-orange rounded-2xl p-8 text-white">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-7 h-7 text-burnt-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-montserrat">
                    Training and consultation
                  </h3>
                  <p className="text-white/90 mb-4">
                    Comprehensive training for drivers and fleet managers. Learn
                    best practices for CNG operation and maintenance.
                  </p>
                  <button
                    onClick={() => handleNavClick("contact")}
                    className="text-deep-blue font-semibold hover:underline inline-flex items-center bg-white px-4 py-2 rounded-lg focus:outline-none"
                  >
                    Get training <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CNG Calculator Section */}
      <section
        id="calculator"
        className="py-20 bg-gradient-to-br from-deep-blue via-dark-blue to-deep-blue"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-light-blue font-semibold mb-2">
              CNG SAVINGS CALCULATOR
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-4">
              See how much you can save
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Enter your current fuel expenses to discover your potential
              savings with CNG conversion.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                {/* Calculator Form */}
                <div className="p-8 lg:p-10">
                  <h3 className="text-xl font-semibold text-deep-blue mb-6 font-montserrat">
                    Enter your details
                  </h3>
                  <form onSubmit={handleCalculatorSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Input type
                      </label>
                      <div className="flex rounded-lg overflow-hidden border border-gray-300">
                        <button
                          type="button"
                          onClick={() => setCalculatorInputType("spend")}
                          className={`flex-1 py-3 px-4 font-medium transition ${
                            calculatorInputType === "spend"
                              ? "bg-deep-blue text-white"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          Monthly spend (₦)
                        </button>
                        <button
                          type="button"
                          onClick={() => setCalculatorInputType("liters")}
                          className={`flex-1 py-3 px-4 font-medium transition ${
                            calculatorInputType === "liters"
                              ? "bg-deep-blue text-white"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          Monthly liters
                        </button>
                      </div>
                    </div>

                    {calculatorInputType === "spend" && (
                      <div>
                        <label
                          htmlFor="monthlySpend"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Monthly petrol spend (₦)
                        </label>
                        <input
                          type="number"
                          id="monthlySpend"
                          name="monthlySpend"
                          placeholder="e.g., 100000"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burnt-orange focus:border-burnt-orange transition"
                        />
                      </div>
                    )}

                    {calculatorInputType === "liters" && (
                      <div>
                        <label
                          htmlFor="monthlyLiters"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Monthly petrol consumption (liters)
                        </label>
                        <input
                          type="number"
                          id="monthlyLiters"
                          name="monthlyLiters"
                          placeholder="e.g., 150"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burnt-orange focus:border-burnt-orange transition"
                        />
                      </div>
                    )}

                    <div>
                      <label
                        htmlFor="vehicleType"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Vehicle type
                      </label>
                      <select
                        id="vehicleType"
                        name="vehicleType"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burnt-orange focus:border-burnt-orange transition"
                      >
                        <option value="sedan">Sedan / Saloon car</option>
                        <option value="suv">SUV / Crossover</option>
                        <option value="pickup">Pickup truck</option>
                        <option value="bus">Bus / Minibus</option>
                        <option value="truck">Commercial truck</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-burnt-orange text-white py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition flex items-center justify-center focus:outline-none"
                    >
                      Calculate my savings
                      <CalculatorIcon className="w-5 h-5 ml-2" />
                    </button>
                  </form>
                  <p className="text-xs text-gray-500 mt-4">
                    *Calculations based on current market prices. Actual savings
                    may vary.
                  </p>
                </div>

                {/* Results */}
                <div className="bg-gray-50 p-8 lg:p-10" id="calculatorResults">
                  {calculatorResult ? (
                    <div className="calculator-result animate-fadeIn">
                      <div className="text-center mb-6">
                        <div className="w-20 h-20 bg-burnt-orange rounded-full flex items-center justify-center mx-auto mb-4">
                          <PiggyBank className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-deep-blue font-montserrat">
                          Your potential savings
                        </h3>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-white rounded-lg p-4 border-l-4 border-burnt-orange">
                          <p className="text-sm text-gray-500">
                            Monthly savings
                          </p>
                          <p className="text-2xl font-bold text-deep-blue">
                            ₦{calculatorResult.monthlySavings}
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-4 border-l-4 border-light-blue">
                          <p className="text-sm text-gray-500">
                            Yearly savings
                          </p>
                          <p className="text-2xl font-bold text-deep-blue">
                            ₦{calculatorResult.yearlySavings}
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white rounded-lg p-4 text-center">
                            <p className="text-sm text-gray-500">Savings</p>
                            <p className="text-xl font-bold text-burnt-orange">
                              {calculatorResult.savingsPercentage}%
                            </p>
                          </div>
                          <div className="bg-white rounded-lg p-4 text-center">
                            <p className="text-sm text-gray-500">
                              CO₂ saved/month
                            </p>
                            <p className="text-xl font-bold text-green-600">
                              {calculatorResult.co2Reduction}kg
                            </p>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => handleNavClick("contact")}
                        className="block mt-6 bg-burnt-orange text-white py-3 rounded-lg font-semibold text-center hover:bg-opacity-90 transition focus:outline-none"
                      >
                        Start saving today
                      </button>
                    </div>
                  ) : (
                    <div className="h-full flex flex-col justify-center items-center text-center">
                      <div className="w-20 h-20 bg-light-blue/20 rounded-full flex items-center justify-center mb-6">
                        <TrendingUp className="w-10 h-10 text-deep-blue" />
                      </div>
                      <h3 className="text-xl font-semibold text-deep-blue mb-2 font-montserrat">
                        Your savings await
                      </h3>
                      <p className="text-gray-600">
                        Enter your details to see how much you could save by
                        switching to CNG.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Price Info */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  title: "Current petrol price",
                  value: "₦700/L",
                  color: "text-white",
                },
                { title: "CNG price", value: "₦350/L", color: "text-white" },
                {
                  title: "Your savings",
                  value: "~50%",
                  color: "text-burnt-orange",
                },
                { title: "CO₂ reduction", value: "~30%", color: "text-white" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur rounded-xl p-4 text-center"
                >
                  <p className="text-light-blue text-sm mb-1">{item.title}</p>
                  <p className={`text-2xl font-bold ${item.color}`}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-burnt-orange font-semibold mb-2">TESTIMONIALS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-deep-blue font-montserrat">
              What our customers say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Chief Adebayo",
                role: "Fleet Owner, Lagos",
                text: "Since converting my fleet to CNG with Adesa Energy, I've saved over ₦2 million monthly. The process was seamless and professional.",
                initial: "CA",
                color: "bg-deep-blue",
              },
              {
                name: "Olumide Tunde",
                role: "Logistics Manager",
                text: "The mobile refueling service is a game-changer. No more wasting time looking for CNG stations. Adesa brings the fuel to me.",
                initial: "OT",
                color: "bg-burnt-orange",
              },
              {
                name: "Ngozi Kalu",
                role: "Private Car Owner",
                text: "I was skeptical at first, but after seeing my fuel costs drop by 48%, I'm a believer. Highly recommend Adesa Energy to everyone.",
                initial: "NK",
                color: "bg-light-blue",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center">
                  <div
                    className={`${testimonial.color} rounded-full flex items-center justify-center text-white font-bold w-12 h-12`}
                  >
                    {testimonial.initial}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-deep-blue">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources/FAQ Section */}
      <section id="resources" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-burnt-orange font-semibold mb-2">RESOURCES</p>
            <h2 className="text-3xl md:text-4xl font-bold text-deep-blue font-montserrat mb-4">
              Frequently asked questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about CNG and our services.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {/* FAQ Items */}
            <div className="space-y-4">
              {[
                {
                  question: "What is CNG and how does it work?",
                  answer:
                    "CNG (Compressed Natural Gas) is natural gas stored at high pressure. It's a cleaner alternative to petrol and diesel. When your vehicle is converted, a CNG tank and injection system are installed, allowing your engine to run on natural gas with the same performance as petrol.",
                },
                {
                  question: "How much does CNG conversion cost?",
                  answer:
                    "Conversion costs vary based on vehicle type and requirements. For sedans, conversion typically starts from ₦450,000. SUVs and larger vehicles may cost more. We offer flexible payment plans to make conversion accessible. Contact us for a personalized quote.",
                },
                {
                  question: "Is CNG safe for my vehicle?",
                  answer:
                    "Absolutely! CNG is one of the safest fuels available. CNG tanks are designed to withstand extreme conditions and undergo rigorous testing. The gas is lighter than air, so in case of a leak, it dissipates quickly. Our installations meet all international safety standards.",
                },
                {
                  question: "How long does the conversion process take?",
                  answer:
                    "A standard conversion takes 1-2 days for most vehicles. For fleet conversions, we can process multiple vehicles simultaneously. Our mobile conversion service means you don't even need to bring your vehicle to us – we come to you.",
                },
                {
                  question: "What maintenance does a CNG vehicle require?",
                  answer:
                    "CNG vehicles require less maintenance than petrol vehicles. The fuel burns cleaner, reducing engine wear. We recommend annual CNG system inspections and regular filter changes. Our maintenance packages ensure your system stays in top condition.",
                },
                {
                  question: "Where can I refuel my CNG vehicle?",
                  answer:
                    "Beyond traditional CNG stations, Adesa Energy offers on-demand mobile refueling services. Our refueling trucks can come to your location – whether at home, office, or anywhere you need fuel. We're available 24/7 for your convenience.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="accordion-btn w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className="font-semibold text-deep-blue">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-burnt-orange transition-transform duration-300 ${
                        openAccordionIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`accordion-content px-6 pb-6 overflow-hidden transition-all duration-300 ${
                      openAccordionIndex === index ? "max-h-[500px]" : "max-h-0"
                    }`}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CNG Guide CTA */}
            <div className="mt-12 bg-deep-blue rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-semibold text-white mb-4 font-montserrat">
                Want to learn more about CNG?
              </h3>
              <p className="text-gray-300 mb-6">
                Download our comprehensive CNG 101 guide and become an expert.
              </p>
              <button className="inline-flex items-center bg-burnt-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition focus:outline-none">
                <Download className="w-5 h-5 mr-2" />
                Download CNG guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <p className="text-burnt-orange font-semibold mb-2">
                BLOG & NEWS
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-deep-blue font-montserrat">
                Latest updates
              </h2>
            </div>
            <button className="text-burnt-orange font-semibold hover:underline inline-flex items-center mt-4 md:mt-0 focus:outline-none">
              View all articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Newspaper,
                title: "Nigeria's CNG adoption rate surges in 2025",
                excerpt:
                  "The latest statistics show a 300% increase in CNG vehicle conversions across Nigeria as fuel prices continue to rise...",
                tag: "Industry news",
                date: "Jan 15, 2025",
                gradient: "from-deep-blue to-dark-blue",
                iconColor: "text-light-blue",
              },
              {
                icon: Lightbulb,
                title: "5 things to know before converting to CNG",
                excerpt:
                  "Thinking about making the switch? Here's everything you need to consider before converting your vehicle to CNG...",
                tag: "Guide",
                date: "Jan 10, 2025",
                gradient: "from-burnt-orange to-orange-600",
                iconColor: "text-white",
              },
              {
                icon: Megaphone,
                title: "Adesa Energy expands to 5 new cities",
                excerpt:
                  "We're excited to announce our expansion to Abuja, Port Harcourt, Kano, Ibadan, and Benin City. Now serving more Nigerians...",
                tag: "Company news",
                date: "Jan 5, 2025",
                gradient: "from-light-blue to-cyan-500",
                iconColor: "text-deep-blue",
              },
            ].map((post, index) => (
              <article
                key={index}
                className="card-hover bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`h-48 bg-gradient-to-br ${post.gradient} flex items-center justify-center`}
                >
                  <post.icon className={`w-16 h-16 ${post.iconColor}`} />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <span
                      className={`px-3 py-1 rounded-full font-medium ${
                        index === 0
                          ? "bg-light-blue/20 text-deep-blue"
                          : index === 1
                          ? "bg-burnt-orange/10 text-burnt-orange"
                          : "bg-deep-blue/10 text-deep-blue"
                      }`}
                    >
                      {post.tag}
                    </span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-deep-blue mb-3 font-montserrat">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <button className="text-burnt-orange font-semibold hover:underline inline-flex items-center focus:outline-none">
                    Read more <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-burnt-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-4">
              Stay updated with CNG insights
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Get the latest news, tips, and exclusive offers delivered to your
              inbox.
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-lg text-gray-800 focus:ring-2 focus:ring-deep-blue focus:outline-none"
              />
              <button
                type="submit"
                className="bg-deep-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-dark-blue transition whitespace-nowrap focus:outline-none"
              >
                Subscribe now
              </button>
            </form>
            <p className="text-white/70 text-sm mt-4">
              By subscribing, you agree to our Privacy Policy. Unsubscribe
              anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-burnt-orange font-semibold mb-2">CONTACT US</p>
            <h2 className="text-3xl md:text-4xl font-bold text-deep-blue font-montserrat mb-4">
              Get in touch
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to start saving? Have questions? We&apos;re here to help.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-burnt-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-burnt-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-deep-blue mb-1">
                      Office address
                    </h3>
                    <p className="text-gray-600">
                      123 Energy Drive, Victoria Island, Lagos, Nigeria
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-light-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-deep-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-deep-blue mb-1">Phone</h3>
                    <p className="text-gray-600">+234 456789</p>
                    <p className="text-sm text-gray-500">Mon-Sat, 8am-6pm</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-burnt-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-burnt-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-deep-blue mb-1">Email</h3>
                    <p className="text-gray-600">adesaenergy@gmail.com</p>
                    <p className="text-sm text-gray-500">
                      We reply within 24 hours
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-light-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GlobeIcon className="w-6 h-6 text-deep-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-deep-blue mb-1">
                      Website
                    </h3>
                    <p className="text-gray-600">www.adesaenergy.com</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-deep-blue rounded-xl p-6">
                <h3 className="font-semibold text-white mb-4">Follow us</h3>
                <div className="flex space-x-4">
                  {[Linkedin, Twitter, Instagram, Facebook].map(
                    (SocialIcon, index) => (
                      <a
                        key={index}
                        href="#"
                        className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-burnt-orange transition"
                      >
                        <SocialIcon className="w-5 h-5 text-white" />
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-deep-blue mb-6 font-montserrat">
                  Send us a message
                </h3>
                <form
                  id="contactForm"
                  onSubmit={handleContactSubmit}
                  className={`space-y-6 ${
                    isContactFormSubmitted ? "opacity-50" : ""
                  }`}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="contactName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full name
                      </label>
                      <input
                        type="text"
                        id="contactName"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burnt-orange focus:border-burnt-orange transition"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contactEmail"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        id="contactEmail"
                        name="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burnt-orange focus:border-burnt-orange transition"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="contactPhone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone number
                      </label>
                      <input
                        type="tel"
                        id="contactPhone"
                        name="phone"
                        placeholder="+234 XXX XXX XXXX"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burnt-orange focus:border-burnt-orange transition"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contactSubject"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Subject
                      </label>
                      <select
                        id="contactSubject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burnt-orange focus:border-burnt-orange transition"
                      >
                        <option value="">Select a subject</option>
                        <option value="conversion">
                          Vehicle conversion inquiry
                        </option>
                        <option value="refueling">Refueling services</option>
                        <option value="fleet">Fleet solutions</option>
                        <option value="support">Technical support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="contactMessage"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="contactMessage"
                      name="message"
                      required
                      rows="5"
                      placeholder="Tell us about your needs..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burnt-orange focus:border-burnt-orange transition resize-none"
                    ></textarea>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="contactConsent"
                      name="consent"
                      required
                      className="w-4 h-4 text-burnt-orange border-gray-300 rounded focus:ring-burnt-orange"
                    />
                    <label
                      htmlFor="contactConsent"
                      className="ml-2 text-sm text-gray-600"
                    >
                      I agree to the processing of my personal data in
                      accordance with the Privacy Policy
                    </label>
                  </div>
                  <button
                    type="submit"
                    disabled={isContactFormSubmitted}
                    className="w-full bg-burnt-orange text-white py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition flex items-center justify-center focus:outline-none disabled:opacity-50"
                  >
                    Send message
                    <Send className="w-5 h-5 ml-2" />
                  </button>
                </form>
                {isContactFormSubmitted && (
                  <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg animate-fadeIn">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      <p className="text-green-700">
                        Thank you! Your message has been sent successfully.
                        We&apos;ll get back to you within 24 hours.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal-gray text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Logo & About */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white font-montserrat tracking-wide">
                    Adesa
                  </span>
                  <span className="text-xs tracking-[0.3em] text-burnt-orange font-semibold -mt-1">
                    E N E R G Y
                  </span>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Powering progress, fueling tomorrow. Your trusted partner for
                CNG conversions and refueling services in Nigeria.
              </p>
              <div className="flex space-x-4">
                {[Linkedin, Twitter, Instagram].map((SocialIcon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-burnt-orange transition"
                  >
                    <SocialIcon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 font-montserrat">
                Quick links
              </h4>
              <ul className="space-y-3">
                {[
                  "home",
                  "about",
                  "solutions",
                  "calculator",
                  "resources",
                  "blog",
                  "contact",
                ].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => handleNavClick(item)}
                      className="text-gray-400 hover:text-burnt-orange transition focus:outline-none"
                    >
                      {item.charAt(0).toUpperCase() +
                        item.slice(1).replace(/([A-Z])/g, " $1")}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 font-montserrat">
                Services
              </h4>
              <ul className="space-y-3">
                {[
                  "Mobile conversion",
                  "On-demand refueling",
                  "Fleet solutions",
                  "Maintenance",
                  "Training",
                ].map((service, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleNavClick("solutions")}
                      className="text-gray-400 hover:text-burnt-orange transition focus:outline-none"
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6 font-montserrat">
                Contact us
              </h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-burnt-orange flex-shrink-0 mt-0.5" />
                  <span>123 Energy Drive, Victoria Island, Lagos</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-burnt-orange flex-shrink-0" />
                  <span>+234 456789</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-burnt-orange flex-shrink-0" />
                  <span>adesaenergy@gmail.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <GlobeIcon className="w-5 h-5 text-burnt-orange flex-shrink-0" />
                  <span>www.adesaenergy.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                &copy; 2025 Adesa Energy. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                {["Privacy policy", "Terms of service", "Cookie policy"].map(
                  (policy, index) => (
                    <a
                      key={index}
                      href="#"
                      className="text-gray-400 hover:text-burnt-orange text-sm transition focus:outline-none"
                    >
                      {policy}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap");

        :root {
          --deep-blue: #22244e;
          --burnt-orange: #f37621;
          --charcoal-gray: #242622;
          --light-blue: #59c6e5;
          --dark-blue: #1d3866;
        }

        * {
          font-family: "Inter", sans-serif;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: "Montserrat", sans-serif;
        }

        .font-montserrat {
          font-family: "Montserrat", sans-serif;
        }

        .bg-deep-blue {
          background-color: var(--deep-blue);
        }
        .bg-burnt-orange {
          background-color: var(--burnt-orange);
        }
        .bg-charcoal-gray {
          background-color: var(--charcoal-gray);
        }
        .bg-light-blue {
          background-color: var(--light-blue);
        }
        .bg-dark-blue {
          background-color: var(--dark-blue);
        }
        .text-deep-blue {
          color: var(--deep-blue);
        }
        .text-burnt-orange {
          color: var(--burnt-orange);
        }
        .text-charcoal-gray {
          color: var(--charcoal-gray);
        }
        .text-light-blue {
          color: var(--light-blue);
        }
        .text-dark-blue {
          color: var(--dark-blue);
        }
        .border-burnt-orange {
          border-color: var(--burnt-orange);
        }
        .border-deep-blue {
          border-color: var(--deep-blue);
        }
        .hover-dark-blue:hover {
          background-color: var(--dark-blue);
        }

        html {
          scroll-behavior: smooth;
        }

        .hero-gradient {
          background: linear-gradient(
            135deg,
            var(--deep-blue) 0%,
            var(--dark-blue) 100%
          );
        }

        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

// Calculator icon component
function CalculatorIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="8" y1="6" x2="16" y2="6" />
      <line x1="8" y1="10" x2="16" y2="10" />
      <line x1="8" y1="14" x2="16" y2="14" />
      <line x1="8" y1="18" x2="13" y2="18" />
    </svg>
  );
}
