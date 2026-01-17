"use client";

import { useRouter } from "next/navigation";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import AboutSection from "./AboutSection";
import SolutionsSection from "./SolutionsSection";
import CalculatorSection from "../Calculator_components/CalculatorSection";
import BlogSection from "./BlogSection";
import ResourcesSection from "./ResourcesSection";
import TestimonialsSection from "./TestimonalsSection";
import ContactSection from "../Contact_components/ContactSection";
import OurTeamSection from "./OurTeamSection";

export default function HomeSection() {
  const router = useRouter();

  const handleNavClick = (path) => {
    router.push(path);
  };

  return (
    <div className="text-charcoal-gray min-h-screen">
      {/* Hero Section */}
      <HeroSection onNavClick={handleNavClick} />

      {/* Features Section */}
      <FeaturesSection />

      {/* About Section */}
      <AboutSection/>

      {/* Our Team Section */}
      <OurTeamSection />

      {/* Solutions Section */}
      <SolutionsSection />

      {/* CNG Calculator Section */}
      <CalculatorSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Resources/FAQ Section */}
      <ResourcesSection />

      {/* Blog Section */}
      <BlogSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
