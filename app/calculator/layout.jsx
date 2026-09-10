import { constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

export const metadata = constructMetadata({
  title: "CNG Fuel Savings Calculator — Estimate Your Savings in Nigeria",
  description:
    "Estimate your fuel cost savings when switching to CNG with Adesa Energy's free calculator. Compare petrol vs CNG costs and discover how much you can save monthly.",
  path: "/calculator",
  keywords: [
    "CNG savings calculator Nigeria",
    "fuel cost comparison Nigeria",
    "petrol vs CNG savings",
    "CNG cost calculator",
    "how much to save CNG Nigeria",
    "compressed natural gas calculator",
    "fleet fuel savings calculator",
    "vehicle fuel savings Nigeria",
    "CNG conversion ROI Nigeria",
    "fuel cost reduction tool",
  ],
});

export default function CalculatorLayout({ children }) {
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
        "name": "Savings Calculator",
        "item": `${siteConfig.url}/calculator`,
      },
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${siteConfig.url}/calculator/#webapp`,
    "name": "Adesa Energy CNG Savings Calculator",
    "url": `${siteConfig.url}/calculator`,
    "description":
      "A free interactive tool to estimate monthly and yearly fuel cost savings when converting your vehicle from petrol to CNG in Nigeria.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "NGN",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Adesa Energy",
      "url": siteConfig.url,
    },
    "inLanguage": "en-NG",
  };

  return (
    <div>
      <h1 className="sr-only">CNG Fuel Savings Calculator — Nigeria</h1>
      <section>{children}</section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, webAppSchema]) }}
      />
    </div>
  );
}
