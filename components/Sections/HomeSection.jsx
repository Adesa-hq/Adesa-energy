"use client";

import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

// Only hero and features above the fold
const HeroSection = dynamic(() => import("./HeroSection"), { ssr: false });
const FeaturesSection = dynamic(() => import("./FeaturesSection"), { ssr: false });

// Lazy load the rest
const AboutSection = dynamic(() => import("./AboutSection"), { ssr: false });
const OurTeamSection = dynamic(() => import("./OurTeamSection"), { ssr: false });
const SolutionsSection = dynamic(() => import("./SolutionsSection"), { ssr: false });
const CalculatorSection = dynamic(
  () => import("../Calculator_components/CalculatorSection"), { ssr: false }
);
const TestimonialsSection = dynamic(() => import("./TestimonalsSection"), { ssr: false });
const ResourcesSection = dynamic(() => import("./ResourcesSection"), {ssr: false});
const BlogSection = dynamic(() => import("./BlogSection"), {ssr: false});
const ContactSection = dynamic(
  () => import("@/components/Contact_components/ContactSection"),{ssr: false}
);
const VideoSection = dynamic(() => import("./VideoSection"), { ssr: false });


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
      
      {/* Video Section */}
      <VideoSection />

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
