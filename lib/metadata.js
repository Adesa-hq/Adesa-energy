import { siteConfig } from "@/config/site";

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

export function absoluteUrl(path = "/") {
  return new URL(path || "/", siteConfig.url).toString();
}

function withBrand(title) {
  const normalizedTitle = title.trim();
  return normalizedTitle.toLowerCase().includes(siteConfig.name.toLowerCase())
    ? normalizedTitle
    : `${normalizedTitle} | ${siteConfig.name}`;
}

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image,
  noIndex = false,
  path = "",
  keywords = [],
  type = "website",
  datePublished,
  dateModified,
  titleTemplate = false,
} = {}) {
  const url = absoluteUrl(path);
  const pageTitle = withBrand(title);
  const imageUrl = absoluteUrl(
    image || `/og?title=${encodeURIComponent(pageTitle)}`,
  );

  const allKeywords = [
    ...new Set([
      "Adesa Energy",
      "CNG conversion Nigeria",
      "mobile CNG refueling",
      "compressed natural gas",
      "fleet fuel solutions",
      "alternative fuel Nigeria",
      "mobile CNG conversion",
      "CNG services Nigeria",
      "vehicle gas conversion",
      "clean energy transport Nigeria",
      "CNG conversion Lagos",
      "CNG refueling Abuja",
      "fuel cost savings Nigeria",
      "CNG vehicle conversion Ilorin",
      ...keywords,
    ]),
  ];

  const otherVerification = Object.fromEntries(
    [
      ["msvalidate.01", process.env.BING_SITE_VERIFICATION],
      ["p:domain_verify", process.env.PINTEREST_SITE_VERIFICATION],
      ["facebook-domain-verification", process.env.FACEBOOK_DOMAIN_VERIFICATION],
    ].filter(([, value]) => Boolean(value)),
  );

  return {
    metadataBase: new URL(siteConfig.url),
    applicationName: siteConfig.name,
    title: titleTemplate
      ? { default: pageTitle, template: `%s | ${siteConfig.name}` }
      : { absolute: pageTitle },
    description,
    keywords: allKeywords,
    authors: [{ name: "Adesa Energy", url: siteConfig.url }],
    creator: "Adesa Energy",
    publisher: "Adesa Energy",
    category: "energy",
    classification: "Energy and transportation business",
    referrer: "strict-origin-when-cross-origin",
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    openGraph: {
      type,
      locale: "en_NG",
      url,
      title: pageTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${pageTitle} social preview`,
        },
      ],
      ...(type === "article" && datePublished
        ? { publishedTime: datePublished }
        : {}),
      ...(type === "article" && dateModified
        ? { modifiedTime: dateModified }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [{ url: imageUrl, alt: `${pageTitle} social preview` }],
      creator: "@adesaenergy",
      site: "@adesaenergy",
    },
    alternates: {
      canonical: url,
      types: {
        "application/rss+xml": [
          { url: absoluteUrl("/feed.xml"), title: "Adesa Energy Blog RSS" },
        ],
      },
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
      yahoo: process.env.YAHOO_SITE_VERIFICATION || undefined,
      yandex: process.env.YANDEX_SITE_VERIFICATION || undefined,
      me: unique([siteConfig.links.linkedin, siteConfig.links.twitter]),
      other: Object.keys(otherVerification).length
        ? otherVerification
        : undefined,
    },
    formatDetection: {
      telephone: false,
      email: false,
      address: false,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      nocache: noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
      ],
      shortcut: "/favicon.ico",
      apple: "/adesa-energy.png",
    },
  };
}

export function buildWebPageJsonLd({
  path,
  name,
  description,
  type = "WebPage",
}) {
  const url = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "en-NG",
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#organization` },
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}
