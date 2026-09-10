import { constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

export const metadata = constructMetadata({
  title: "Careers at Adesa Energy | Join Our Clean Energy Mission",
  description:
    "Explore career opportunities at Adesa Energy. Join our team of engineers, operators, and sustainability experts building the future of mobile CNG conversion and refueling in Nigeria.",
  path: "/careers",
  keywords: [
    "Adesa Energy careers",
    "clean energy jobs Nigeria",
    "CNG company jobs Lagos",
    "energy startup jobs Nigeria",
    "software engineer Lagos energy",
    "sustainability jobs Nigeria",
    "product designer Lagos",
    "green energy careers Africa",
    "renewable energy jobs Nigeria",
    "Adesa Energy job openings",
  ],
});

export default function CareerLayout({ children }) {
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
        "name": "Careers",
        "item": `${siteConfig.url}/careers`,
      },
    ],
  };

  const jobPostings = siteConfig.careers.jobs.jobListings.map((job) => {
    const isRemote = job.location.includes("Remote");

    return {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      "title": job.title,
      "description": job.description,
      "identifier": {
        "@type": "PropertyValue",
        "name": "Adesa Energy",
        "value": `adesa-energy-${job.slug}`,
      },
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Adesa Energy",
        "sameAs": siteConfig.url,
        "logo": `${siteConfig.url}/adesa-energy.png`,
      },
      ...(!isRemote && {
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "2 Isheri Road, Ojodu Berger",
            "addressLocality": "Ikeja",
            "addressRegion": "Lagos State",
            "postalCode": "101233",
            "addressCountry": "NG",
          },
        },
      }),
      ...(isRemote && {
        "jobLocationType": "TELECOMMUTE",
        "applicantLocationRequirements": {
          "@type": "Country",
          "name": "Nigeria",
        },
      }),
      "employmentType": job.type.toUpperCase().replace("-", "_"),
      "datePosted": job.datePosted,
      "validThrough": job.validThrough,
      "url": `${siteConfig.url}/careers#${job.slug}`,
      "directApply": true,
    };
  });

  return (
    <div>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, ...jobPostings]),
        }}
      />
    </div>
  );
}
