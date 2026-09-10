import { constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

export const metadata = constructMetadata({
  title: "About Adesa Energy — Nigeria's Mobile CNG Pioneer",
  description:
    "Learn about Adesa Energy, Nigeria's leading mobile CNG conversion and refueling company. Discover our mission, vision, values, and commitment to affordable clean energy transport.",
  path: "/about",
  keywords: [
    "about Adesa Energy",
    "CNG company Nigeria",
    "clean energy company Lagos",
    "Adesa Energy mission",
    "mobile CNG pioneer Nigeria",
    "sustainable fuel Nigeria",
    "CNG conversion company Lagos",
    "Adesa Energy history",
    "Nigerian clean energy startup",
    "CNG provider West Africa",
  ],
});

export default function AboutLayout({ children }) {
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
        "name": "About",
        "item": `${siteConfig.url}/about`,
      },
    ],
  };

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${siteConfig.url}/about/#webpage`,
    "url": `${siteConfig.url}/about`,
    "name": "About Adesa Energy",
    "description":
      "Adesa Energy is a pioneering clean energy company dedicated to revolutionizing mobile CNG conversions and on-demand refueling services in Nigeria.",
    "isPartOf": {
      "@id": `${siteConfig.url}/#website`,
    },
    "about": {
      "@id": `${siteConfig.url}/#organization`,
    },
    "inLanguage": "en-NG",
  };

  return (
    <div>
      <h1 className="sr-only">About Adesa Energy — Nigeria&apos;s Mobile CNG Pioneer</h1>
      <section>{children}</section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, aboutPageSchema]) }}
      />
    </div>
  );
}
