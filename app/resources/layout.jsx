import { constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

export const metadata = constructMetadata({
  title: "CNG Resources, Guides & FAQs | Adesa Energy",
  description:
    "Explore CNG guides, fuel cost insights, and frequently asked questions about CNG conversion and refueling from Adesa Energy — Nigeria's mobile CNG experts.",
  path: "/resources",
  keywords: [
    "CNG resources Nigeria",
    "CNG FAQ Nigeria",
    "compressed natural gas guide",
    "CNG conversion questions",
    "is CNG safe Nigeria",
    "CNG conversion cost Nigeria",
    "how to convert to CNG",
    "CNG refueling stations Nigeria",
    "CNG vehicle guide",
    "Adesa Energy FAQ",
  ],
});

export default function ResourcesLayout({ children }) {
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
        "name": "Resources",
        "item": `${siteConfig.url}/resources`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteConfig.url}/resources/#faqpage`,
    "url": `${siteConfig.url}/resources`,
    "name": "CNG Resources and Guides — Adesa Energy",
    "inLanguage": "en-NG",
    "isPartOf": {
      "@id": `${siteConfig.url}/#website`,
    },
    "mainEntity": siteConfig.resources.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <div>
      <h1 className="sr-only">CNG Resources, Guides &amp; FAQs</h1>
      <section>{children}</section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, faqSchema]) }}
      />
    </div>
  );
}
