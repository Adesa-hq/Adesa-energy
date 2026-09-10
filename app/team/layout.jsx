import { constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

export const metadata = constructMetadata({
  title: "Our Team — Adesa Energy Leadership & Experts",
  description:
    "Meet the leadership team behind Adesa Energy. Engineers, legal advisers, financial experts, and operators dedicated to making CNG accessible across Nigeria.",
  path: "/team",
  keywords: [
    "Adesa Energy team",
    "Adesa Energy leadership",
    "Femi Adeleye Adesa Energy",
    "CNG company executives Nigeria",
    "clean energy team Nigeria",
    "Adesa Energy founders",
    "Adesa Energy management",
    "energy startup team Nigeria",
    "CNG experts Nigeria",
    "Adesa Energy operations team",
  ],
});

export default function OurTeamLayout({ children }) {
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
        "name": "Our Team",
        "item": `${siteConfig.url}/team`,
      },
    ],
  };

  const personSchemas = siteConfig.team.members.map((member) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": member.name,
    "jobTitle": member.role,
    "description": member.bio,
    "image": member.image.startsWith("/")
      ? `${siteConfig.url}${member.image}`
      : member.image,
    "worksFor": {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      "name": "Adesa Energy",
    },
    "url": `${siteConfig.url}/team`,
  }));

  return (
    <div>
      <h1 className="sr-only">Adesa Energy Leadership and Operations Team</h1>
      <section>{children}</section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, ...personSchemas]),
        }}
      />
    </div>
  );
}
