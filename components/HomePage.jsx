"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar_components/Navbar";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import AboutSection from "./AboutSection";
import SolutionsSection from "./SolutionsSection";
import CalculatorSection from "./CalculatorSection";
import TestimonialsSection from "./TestimonalsSection";
import ResourcesSection from "./ResourcesSection";
import BlogSection from "./BlogSection";
import NewsletterSection from "./NewsletterSection";
import ContactSection from "./Contact_components/ContactSection";
import Footer from "./Footer";

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const observer = useRef(null);

  // Mobile menu handlers
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

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
    <div className="text-charcoal-gray min-h-screen">
      {/* Hero Section */}
      <HeroSection onNavClick={handleNavClick} />

      {/* Features Section */}
      <FeaturesSection />

      {/* About Section */}
      <AboutSection onNavClick={handleNavClick} />

      {/* Solutions Section */}
      <SolutionsSection onNavClick={handleNavClick} />

      {/* CNG Calculator Section */}
      <CalculatorSection onNavClick={handleNavClick} />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Resources/FAQ Section */}
      <ResourcesSection />

      {/* Blog Section */}
      <BlogSection />

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
