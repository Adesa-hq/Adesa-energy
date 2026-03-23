import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Contact Adesa Energy",
  description:
    "Contact Adesa Energy for mobile CNG conversion, on-demand refueling, and fleet fuel solutions across Nigeria.",
  path: "/contact",
});

export default function ContactLayout({ children }) {
  return (
    <main role="main">
      <h1 className="sr-only">Contact Adesa Energy</h1>
      <section>{children}</section>
    </main>
  );
}
