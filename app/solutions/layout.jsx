import { constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

export const metadata = constructMetadata({
  title: "CNG Solutions for Vehicles & Fleets in Nigeria | Adesa Energy",
  description:
    "Explore Adesa Energy's comprehensive CNG solutions: mobile vehicle conversion, on-demand refueling, fleet packages, maintenance, and training services across Nigeria.",
  path: "/solutions",
  keywords: [
    "mobile CNG conversion Nigeria",
    "CNG vehicle conversion service",
    "on-demand CNG refueling Nigeria",
    "fleet CNG conversion Nigeria",
    "CNG fleet solutions Lagos",
    "commercial vehicle CNG Nigeria",
    "CNG maintenance Nigeria",
    "CNG training Nigeria",
    "Adesa Energy solutions",
    "compressed natural gas service Nigeria",
  ],
});

export default function SolutionsLayout({ children }) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteConfig.url,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Solutions",
        "item": `${siteConfig.url}/solutions`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/solutions/#service`,
    "name": "Adesa Energy CNG Solutions",
    "url": `${siteConfig.url}/solutions`,
    "description":
      "Comprehensive mobile CNG vehicle conversion, on-demand refueling, and fleet management solutions across Nigeria.",
    "serviceType": "CNG Vehicle Conversion & Refueling Services",
    "provider": {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      "name": "Adesa Energy",
    },
    "areaServed": {
      "@type": "Country",
      "name": "Nigeria",
    },
    "inLanguage": "en-NG",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Adesa CNG Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile CNG Conversion",
            "description":
              "Professional CNG conversion services performed directly at your fleet location or our physical centres in Lagos, Ilorin, and Abuja.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "On-demand Mobile Refueling",
            "description":
              "24/7 on-demand mobile CNG refueling delivered to vehicle fleets, depots, or residences.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fleet Conversion Packages",
            "description":
              "Customized conversion solutions for logistics, corporate, and transport union fleets with flexible financing options.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "CNG Maintenance & Support",
            "description":
              "Regular maintenance services and expert technician support to keep CNG systems at peak performance.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "CNG Training & Consultation",
            "description":
              "Comprehensive training for drivers and fleet managers on best practices for CNG vehicle operation and maintenance.",
          },
        },
      ],
    },
  };

  return (
    <div>
      <h1 className="sr-only">
        Mobile CNG Solutions for Vehicles and Fleets in Nigeria
      </h1>
      <section>{children}</section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, serviceSchema]),
        }}
      />
    </div>
  );
}
