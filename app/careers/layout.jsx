import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Careers at Adesa Energy | Mobile CNG Conversion & Refueling",
  description:
    "Join Adesa Energy to power smarter, more sustainable transport. Explore careers in mobile CNG conversion and refueling services across Nigeria.",
  path: "/careers",
});

export default function CareerLayout({ children }) {
  return (
    <main role="main">
      <h1 className="sr-only">Careers at Adesa Energy</h1>
      <section>{children}</section>
    </main>
  );
}
