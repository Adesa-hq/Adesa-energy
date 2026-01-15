"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar_components/Navbar";
import Footer from "@/components/Footer";

export default function AppShell({ children }) {
  const [activeSection, setActiveSection] = useState("home");
  const observer = useRef(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    if (!sections.length) return;

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -50% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((section) => observer.current.observe(section));

    return () => observer.current?.disconnect();
  }, []);

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const offset = 80;
    const top =
      element.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <>
      <Navbar activeSection={activeSection} handleNavClick={handleNavClick} />
      {children}
      <Footer onNavClick={handleNavClick} />
    </>
  );
}
