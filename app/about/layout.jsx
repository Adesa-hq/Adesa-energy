import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "About Adesa Energy",
  description:
    "Learn about Adesa Energy, a mobile CNG conversion and refueling company focused on reducing fuel costs and improving transport efficiency in Nigeria.",
  path: "/about",
});

export default function AboutLayout({ children }) {
  return (
    <main role="main">
      <h1 className="sr-only">About Adesa Energy</h1>
      <section>{children}</section>
    </main>
  );
}
