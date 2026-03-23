import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Our Team - Adesa Energy Leadership and Operations",
  description:
    "Meet the team behind Adesa Energy. Engineers, operators, and leaders focused on mobile CNG conversion and refueling across Nigeria.",
  path: "/team",
});

export default function OurTeamLayout({ children }) {
  return (
    <main role="main">
      <h1 className="sr-only">Adesa Energy Leadership and Operations Team</h1>
      <section>{children}</section>
    </main>
  );
}
