import { buildWebPageJsonLd, constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

export const metadata = constructMetadata({
  title: "Investors",
  description:
    "Discover why Adesa Energy is building a scalable mobile CNG conversion and refueling network for Nigeria's cleaner mobility transition.",
  path: "/investors",
  image: "/blog-cng-adoption.webp",
  keywords: [
    "Adesa Energy investors",
    "CNG investment Nigeria",
    "clean mobility investment Africa",
    "energy infrastructure Nigeria",
    "alternative fuel investment",
  ],
});

export default function InvestorsLayout({ children }) {
  const pageSchema = buildWebPageJsonLd({
    path: "/investors",
    name: "Investors — Adesa Energy",
    description:
      "Adesa Energy is building a scalable mobile CNG conversion and refueling network for Nigeria's cleaner mobility transition.",
  });
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
        name: "Investors",
        item: `${siteConfig.url}/investors`,
      },
    ],
  };

  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, pageSchema]) }}
      />
    </>
  );
}
