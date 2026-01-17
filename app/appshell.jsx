"use client";

import { usePathname, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar_components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/Sections/NewsletterSection";
import TestimonialsSection from "@/components/Sections/TestimonalsSection";

export default function AppShell({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const activeSection = pathname === "/" ? "home" : pathname.replace("/", "");

  const handleNavClick = (id, path) => {
    if (pathname === path) return;
    router.push(path);
  };

  return (
    <>
      <Navbar activeSection={activeSection} handleNavClick={handleNavClick} />
      {children}

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Newsletter Section */}
      <NewsletterSection />
      <Footer onNavClick={handleNavClick} />
    </>
  );
}
