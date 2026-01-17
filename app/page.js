import HomePage from "@/components/Sections/HomeSection";

export const metadata = {
  title: "Adesa Energy | Mobile CNG Conversion and Refueling",
  description:
    "Save fuel costs with Adesa Energy mobile CNG conversion and on-demand refueling. Built for fleets and personal vehicles across Nigeria.",
  alternates: {
    canonical: "https://www.adesaenergy.com/",
  },
};

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
