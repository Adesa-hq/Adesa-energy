"use client";

import { usePathname, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar_components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/Sections/NewsletterSection";
import TestimonialsSection from "@/components/Sections/TestimonalsSection";
import FirstVisitIntro from "@/components/FirstVisitIntro";
import WhatsAppSupport from "@/components/WhatsAppSupport";

export default function AppShell({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const activeSection = pathname === "/" ? "home" : pathname.replace("/", "");

  const handleNavClick = (id, path) => {
    if (pathname === path) return;
    router.push(path);
  };

  const isHome = pathname === "/";

  return (
    <div className="flex min-h-screen min-w-0 flex-col overflow-x-clip">
      <FirstVisitIntro />
      <Navbar activeSection={activeSection} handleNavClick={handleNavClick} />
      <main id="main-content" className="min-w-0 grow pt-24 sm:pt-28">
        {children}
      </main>
      {!isHome && <TestimonialsSection />}
      <NewsletterSection
        buttonText="Subscribe on LinkedIn"
        className="w-full px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-20 flex flex-col items-center justify-center"
      />
      <Footer onNavClick={handleNavClick} />
      <WhatsAppSupport />
    </div>
  );
}
