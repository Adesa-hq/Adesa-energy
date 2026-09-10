import { buildWebPageJsonLd, constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

export const metadata = constructMetadata({
  title: "Privacy Policy — Adesa Energy",
  description:
    "Read Adesa Energy's Privacy Policy to understand how we collect, use, and protect your personal information when you use our services.",
  path: "/privacy-policy",
  keywords: [
    "Adesa Energy privacy policy",
    "data protection Nigeria",
    "CNG company privacy",
    "personal data Adesa Energy",
  ],
});

export default function PrivacyPolicyLayout({ children }) {
  const pageSchema = buildWebPageJsonLd({
    path: "/privacy-policy",
    name: "Privacy Policy — Adesa Energy",
    description:
      "How Adesa Energy collects, uses, and protects personal information.",
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
        name: "Privacy Policy",
        item: `${siteConfig.url}/privacy-policy`,
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
