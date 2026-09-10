import { constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

export const metadata = constructMetadata({
  title: "Convert to CNG — Vehicle & Fleet Conversion Booking | Adesa Energy",
  description:
    "Convert your car, taxi, bus, or commercial fleet to Compressed Natural Gas (CNG) with Adesa Energy. Save up to 50% on fuel costs at our Lagos, Ilorin, and Abuja centres.",
  path: "/convert",
  keywords: [
    "Convert to CNG Nigeria",
    "CNG conversion booking Lagos",
    "CNG conversion centres Nigeria",
    "fleet CNG conversion",
    "car CNG conversion kit",
    "convert car to natural gas",
    "Adesa Energy CNG conversion",
    "save fuel cost Nigeria",
    "CNG installation Ilorin Abuja",
  ],
});

export default function ConvertLayout({ children }) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Convert to CNG",
        item: `${siteConfig.url}/convert`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/convert/#service`,
    url: `${siteConfig.url}/convert`,
    name: "Vehicle CNG Conversion Service",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: "+2348168823730",
      email: "adeinfo@adesahq.com",
    },
    description:
      "Professional vehicle and fleet CNG conversion services across Nigeria. Reduce fuel costs up to 50% with certified conversion kits.",
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    availableLanguage: {
      "@type": "Language",
      name: "English",
    },
  };

  return (
    <div>
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
