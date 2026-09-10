import { constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

export const metadata = constructMetadata({
  title: "Adesa Energy Blog — CNG Insights, News & Guides",
  description:
    "Read insights, updates, and practical resources on CNG conversion, mobile refueling, fuel savings, and cleaner transport in Nigeria. Stay informed with Adesa Energy.",
  path: "/blog",
  keywords: [
    "CNG blog Nigeria",
    "compressed natural gas news",
    "CNG conversion guide",
    "fuel savings tips Nigeria",
    "clean energy articles Nigeria",
    "CNG adoption 2025",
    "mobile refueling news",
    "vehicle fuel savings Nigeria",
    "Adesa Energy blog",
    "Nigerian clean transport news",
  ],
});

export default function BlogLayout({ children }) {
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
        "name": "Blog",
        "item": `${siteConfig.url}/blog`,
      },
    ],
  };

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${siteConfig.url}/blog/#blog`,
    "url": `${siteConfig.url}/blog`,
    "name": "Adesa Energy Blog",
    "description":
      "Insights, updates, and guides on CNG conversion, mobile refueling, and clean transport in Nigeria.",
    "publisher": {
      "@type": "Organization",
      "name": "Adesa Energy",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.url}/adesa-energy.png`,
      },
    },
    "inLanguage": "en-NG",
    "blogPost": siteConfig.blog.posts.map((post) => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "url": `${siteConfig.url}/blog/${post.slug}`,
      "datePublished": post.date,
      "author": {
        "@type": "Organization",
        "name": "Adesa Energy",
      },
    })),
  };

  return (
    <div>
      <section>{children}</section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, blogSchema]) }}
      />
    </div>
  );
}
