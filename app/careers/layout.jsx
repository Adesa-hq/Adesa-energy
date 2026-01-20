export const metadata = {
  title: "Careers at Adesa Energy | Mobile CNG Conversion & Refueling",
  description:
    "Join Adesa Energy to power smarter, more sustainable transport. Explore careers in mobile CNG conversion and refueling services across Nigeria.",
  alternates: {
    canonical: "https://www.adesaenergy.com/careers",
  },
};

export default function CareerLayout({ children }) {
  return (
    <main role="main">
      <h1 className="sr-only">Careers at Adesa Energy</h1>
      <section>{children}</section>
    </main>
  );
}
