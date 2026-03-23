import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "CNG Resources and Guides",
  description:
    "Explore CNG guides, fuel cost insights, and educational resources from Adesa Energy to help you reduce fuel spend and improve vehicle efficiency.",
  path: "/resources",
});

export default function ResourcesLayout({ children }) {
  return (
    <main role="main">
      <h1 className="sr-only">CNG Resources and Guides</h1>
      <section>{children}</section>
    </main>
  );
}
