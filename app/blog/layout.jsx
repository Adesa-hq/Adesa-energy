import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Adesa Energy Blog",
  description:
    "Read insights, updates, and practical resources on CNG conversion, mobile refueling, fuel savings, and cleaner transport in Nigeria.",
  path: "/blog",
});

export default function BlogLayout({ children }) {
  return (
    <main role="main">
      <h1 className="sr-only">Adesa Energy Blog</h1>
      <section>{children}</section>
    </main>
  );
}
