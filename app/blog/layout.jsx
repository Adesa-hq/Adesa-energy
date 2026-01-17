export const metadata = {
  title: "Adesa Energy Blog",
  description:
    "Insights on CNG conversion, fuel cost savings, energy efficiency, and transport solutions in Nigeria from Adesa Energy.",
  alternates: {
    canonical: "https://www.adesaenergy.com/blog",
  },
};

export default function BlogLayout({ children }) {
  return (
    <main role="main">
      <h1 className="sr-only">Adesa Energy Blog</h1>
      <section>{children}</section>
    </main>
  );
}
