export const metadata = {
  title: "CNG Resources and Guides",
  description:
    "Explore CNG guides, fuel cost insights, and educational resources from Adesa Energy to help you reduce fuel spend and improve vehicle efficiency.",
  alternates: {
    canonical: "https://www.adesaenergy.com/resources",
  },
};

export default function ResourcesLayout({ children }) {
  return (
    <main role="main">
      <h1 className="sr-only">CNG Resources and Guides</h1>
      <section>{children}</section>
    </main>
  );
}
