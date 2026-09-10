import HomePage from "@/components/Sections/HomeSection";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Adesa Energy | Mobile CNG Conversion and Refueling",
  description:
    "Save fuel costs with Adesa Energy mobile CNG conversion and on-demand refueling. Built for fleets and personal vehicles across Nigeria.",
  path: "/",
});

export default function Home() {
  return (
    <div className="min-h-screen min-w-0 bg-zinc-50 font-sans dark:bg-black">
      <HomePage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              "@id": "https://www.adesaenergy.com/#localbusiness",
              "name": "Adesa Energy Conversion Centre",
              "image": "https://www.adesaenergy.com/adesa-energy.png",
              "telephone": "+2348168823730",
              "url": "https://www.adesaenergy.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2 Isheri road, Ojudu-Berger",
                "addressLocality": "Lagos",
                "addressRegion": "Lagos State",
                "addressCountry": "NG",
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "6.6433",
                "longitude": "3.3779",
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                "opens": "08:00",
                "closes": "18:00",
              },
              "department": [
                {
                  "@type": "AutoRepair",
                  "name": "Adesa Energy Mile 2 Oke Conversion Centre",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Mile 2 Oke",
                    "addressLocality": "Lagos",
                    "addressCountry": "NG",
                  },
                },
                {
                  "@type": "AutoRepair",
                  "name": "Adesa Energy Sango Conversion Centre",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Sango",
                    "addressLocality": "Ilorin",
                    "addressCountry": "NG",
                  },
                },
                {
                  "@type": "AutoRepair",
                  "name": "Adesa Energy Kubwa Conversion Centre",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Kubwa axis",
                    "addressLocality": "Abuja",
                    "addressCountry": "NG",
                  },
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": "https://www.adesaenergy.com/#service",
              "serviceType": "CNG Vehicle Conversion & Refueling",
              "provider": {
                "@type": "Organization",
                "name": "Adesa Energy",
              },
              "areaServed": {
                "@type": "Country",
                "name": "Nigeria",
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "CNG Conversion & Refueling Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Mobile CNG Conversion",
                      "description": "Professional conversion services at your location. Our certified technicians handle everything from assessment to installation.",
                    },
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "On-demand Refueling",
                      "description": "Never worry about finding a CNG station. Our mobile refueling units come to you, wherever you are.",
                    },
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Fleet Conversion Packages",
                      "description": "Comprehensive fleet solutions with volume discounts, dedicated support, and flexible payment plans.",
                    },
                  },
                ],
              },
            },
          ]),
        }}
      />
    </div>
  );
}
