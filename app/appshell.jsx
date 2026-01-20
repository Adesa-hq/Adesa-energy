"use client";

import { usePathname, useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Navbar_components/Navbar"), {
  ssr: false,
});
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const NewsletterSection = dynamic(
  () => import("@/components/Sections/NewsletterSection"),
  { ssr: false }
);
const TestimonialsSection = dynamic(
  () => import("@/components/Sections/TestimonalsSection"),
  { ssr: false }
);

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
      <TestimonialsSection />
      <NewsletterSection />
      <Footer onNavClick={handleNavClick} />
    </>
  );
}
