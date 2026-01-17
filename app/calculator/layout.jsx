export const metadata = {
  title: "CNG Fuel Savings Calculator",
  description:
    "Estimate fuel cost savings when switching to CNG. Use the Adesa Energy calculator to compare petrol, diesel, and CNG expenses in Nigeria.",
  alternates: {
    canonical: "https://www.adesaenergy.com/calculator",
  },
};

export default function CalculatorLayout({ children }) {
  return (
    <main role="main">
      <h1 className="sr-only">CNG Fuel Savings Calculator in Nigeria</h1>
      <section>{children}</section>
    </main>
  );
}
