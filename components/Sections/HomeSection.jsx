"use client";

import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

// Only hero and features above the fold
const HeroSection = dynamic(() => import("./HeroSection"));
const FeaturesSection = dynamic(() => import("./FeaturesSection"));

// Lazy load the rest
const AboutSection = dynamic(() => import("./AboutSection"));
const OurTeamSection = dynamic(() => import("./OurTeamSection"));
const SolutionsSection = dynamic(() => import("./SolutionsSection"));
const CalculatorSection = dynamic(
  () => import("../Calculator_components/CalculatorSection"),
);
const TestimonialsSection = dynamic(() => import("./TestimonalsSection"));
const ResourcesSection = dynamic(() => import("./ResourcesSection"));
const BlogSection = dynamic(() => import("./BlogSection"), {ssr: false});
const ContactSection = dynamic(
  () => import("../Contact_components/ContactSection"),{ssr: false}
);

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
