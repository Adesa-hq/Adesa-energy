import { buildWebPageJsonLd, constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

export const metadata = constructMetadata({
  title: "Cookie Policy — Adesa Energy",
  description:
    "Learn about how Adesa Energy uses cookies and tracking technologies on our website, and how you can manage your cookie preferences.",
  path: "/cookie-policy",
  keywords: [
    "Adesa Energy cookie policy",
    "cookies website Nigeria",
    "tracking technologies Adesa",
    "cookie preferences",
  ],
});

export default function CookiePolicyLayout({ children }) {
  const pageSchema = buildWebPageJsonLd({
    path: "/cookie-policy",
    name: "Cookie Policy — Adesa Energy",
    description:
      "How Adesa Energy uses cookies and how website visitors can manage their preferences.",
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
        name: "Cookie Policy",
        item: `${siteConfig.url}/cookie-policy`,
      },
    ],
  };

  return (
    <div>
      <section>{children}</section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, pageSchema]) }}
      />
    </div>
  );
}
