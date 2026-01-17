export const metadata = {
  title: "Our Team - Adesa Energy Leadership and Operations",
  description:
    "Meet the team behind Adesa Energy. Engineers, operators, and leaders focused on mobile CNG conversion and refueling across Nigeria.",
  alternates: {
    canonical: "https://www.adesaenergy.com/team",
  },
};

export default function OurTeamLayout({ children }) {
  return (
    <main role="main">
      <h1 className="sr-only">Adesa Energy Leadership and Operations Team</h1>
      <section>{children}</section>
    </main>
  );
}
