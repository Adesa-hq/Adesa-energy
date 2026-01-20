"use client";

import dynamic from "next/dynamic";
import { siteConfig } from "@/config/site";

const HeroSection = dynamic(() => import("./HeroSection"), { ssr: false });
const AboutSection = dynamic(() => import("./AboutSection"), { ssr: false });
const JobsSection = dynamic(() => import("./JobsSection"), { ssr: false });
const BenefitsSection = dynamic(() => import("./BenefitsSection"), { ssr: false });
const CultureSection = dynamic(() => import("./CultureSection"), { ssr: false });
const CtaSection = dynamic(() => import("./CtaSection"), { ssr: false });
export default function CareerSection() {
  const { hero, about, jobs, benefits, culture, cta } = siteConfig.careers;

  return (
    <div className="w-full font-sans">
      <HeroSection hero={hero} />
      <AboutSection about={about} />
      <JobsSection jobs={jobs} />
      <BenefitsSection benefits={benefits} />
      <CultureSection culture={culture} />
      <CtaSection cta={cta} />
    </div>
  );
}
