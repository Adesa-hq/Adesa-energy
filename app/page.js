import HomePage from "@/components/Sections/HomeSection";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Adesa Energy | Mobile CNG Conversion and Refueling",
  description:
    "Save fuel costs with Adesa Energy mobile CNG conversion and on-demand refueling. Built for fleets and personal vehicles across Nigeria.",
  path: "/",
});

export default function Home() {
  return (
    <main
      className="min-h-screen bg-zinc-50 font-sans dark:bg-black"
      role="main"
    >
      <h1 className="sr-only">
        Mobile CNG Conversion and Refueling Services in Nigeria
      </h1>
      <HomePage />
    </main>
  );
}
