import AboutSection from "./AboutSection";
import BlogSection from "./BlogSection";
import FeaturesSection from "./FeaturesSection";
import HeroSection from "./HeroSection";
import LiveNewsSection from "./LiveNewsSection";
import OurTeamSection from "./OurTeamSection";
import ResourcesSection from "./ResourcesSection";
import SolutionsSection from "./SolutionsSection";
import TestimonialsSection from "./TestimonalsSection";
import VideoSection from "./VideoSection";
import CalculatorSection from "../Calculator_components/CalculatorSection";
import ContactSection from "../Contact_components/ContactSection";
import { getNigeriaEnergyNews } from "@/lib/news";

export default async function HomeSection() {
  const liveNews = await getNigeriaEnergyNews({ limit: 3 });

  return (
    <div className="min-h-screen min-w-0 overflow-x-clip text-charcoal-gray">
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <VideoSection />
      <OurTeamSection />
      <SolutionsSection />
      <CalculatorSection />
      <TestimonialsSection />
      <ResourcesSection />
      <LiveNewsSection
        articles={liveNews.articles}
        unavailable={liveNews.unavailable}
        variant="home"
      />
      <BlogSection variant="home" />
      <ContactSection />
    </div>
  );
}
