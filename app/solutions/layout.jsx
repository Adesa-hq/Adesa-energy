export const metadata = {
  title: "CNG Solutions for Vehicles and Fleets",
  description:
    "Explore Adesa Energy CNG solutions including mobile vehicle conversion and on-demand refueling for fleets and individuals in Nigeria.",
  alternates: {
    canonical: "https://www.adesaenergy.com/solutions",
  },
};

export default function SolutionsLayout({ children }) {
  return (
    <main role="main">
      <h1 className="sr-only">
        Mobile CNG Solutions for Vehicles and Fleets in Nigeria
      </h1>
      <section>{children}</section>
    </main>
  );
}
