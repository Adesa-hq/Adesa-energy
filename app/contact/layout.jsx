import { constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

export const metadata = constructMetadata({
  title: "Contact Us — Customer Support, Inquiries & Office Locations | Adesa Energy",
  description:
    "Contact Adesa Energy for vehicle CNG conversions, corporate fleet inquiries, on-demand refueling, or technical support across Nigeria.",
  path: "/contact",
  keywords: [
    "Contact Adesa Energy",
    "Adesa Energy phone number",
    "Adesa Energy email",
    "CNG conversion contact Lagos",
    "CNG support Nigeria",
    "Adesa Energy office location",
    "CNG inquiry Nigeria",
  ],
});

export default function ContactLayout({ children }) {
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
        name: "Contact Us",
        item: `${siteConfig.url}/contact`,
      },
    ],
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${siteConfig.url}/contact/#contactpage`,
    url: `${siteConfig.url}/contact`,
    name: "Contact Adesa Energy",
    description:
      "Get in touch with Adesa Energy for vehicle CNG conversions, refueling services, and partnership inquiries.",
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    about: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "en-NG",
    telephone: "+2348168823730",
    email: "adeinfo@adesahq.com",
    openingHours: "Mo-Fr 09:00-17:00",
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
          __html: JSON.stringify([breadcrumbSchema, contactPageSchema]),
        }}
      />
    </div>
  );
}
