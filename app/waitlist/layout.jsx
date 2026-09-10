import { constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

export const metadata = constructMetadata({
  title: "Join the Waitlist — Book Your CNG Conversion | Adesa Energy",
  description:
    "Join the Adesa Energy waitlist to book your vehicle CNG conversion, schedule mobile refueling, or express interest in bank-backed financing across Nigeria.",
  path: "/waitlist",
  keywords: [
    "Adesa Energy waitlist",
    "book CNG conversion Nigeria",
    "CNG conversion booking Lagos",
    "CNG financing Nigeria",
    "join CNG waitlist",
    "convert vehicle to CNG",
    "book CNG service Nigeria",
    "Adesa Energy signup",
    "CNG conversion appointment Nigeria",
    "CNG vehicle conversion form",
  ],
});

export default function ContactLayout({ children }) {
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
        "name": "Waitlist",
        "item": `${siteConfig.url}/waitlist`,
      },
    ],
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${siteConfig.url}/waitlist/#contactpage`,
    "url": `${siteConfig.url}/waitlist`,
    "name": "Join the Adesa Energy Waitlist",
    "description":
      "Book a CNG conversion, schedule mobile refueling, or express financing interest with Adesa Energy across Nigeria.",
    "isPartOf": {
      "@id": `${siteConfig.url}/#website`,
    },
    "about": {
      "@id": `${siteConfig.url}/#organization`,
    },
    "inLanguage": "en-NG",
    "contactOption": "TollFree",
    "telephone": "+2348168823730",
    "email": "adeinfo@adesahq.com",
    "availableLanguage": {
      "@type": "Language",
      "name": "English",
    },
  };

  return (
    <div>
      <h1 className="sr-only">Join the Adesa Energy Waitlist</h1>
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
