export const metadata = {
  title: "Contact Adesa Energy",
  description:
    "Contact Adesa Energy for mobile CNG conversion, on-demand refueling, and fleet fuel solutions across Nigeria.",
  alternates: {
    canonical: "https://www.adesaenergy.com/contact",
  },
};

export default function ContactLayout({ children }) {
  return (
    <main role="main">
      <h1 className="sr-only">Contact Adesa Energy</h1>
      <section>{children}</section>
    </main>
  );
}
