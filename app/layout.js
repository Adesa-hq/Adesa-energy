import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Providers from "./provider";
import AppShell from "./appshell";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://www.adesaenergy.com"),
  title: {
    default: "Adesa Energy | Mobile CNG Conversion and Refueling",
    template: "%s | Adesa Energy",
  },
  description:
    "Adesa Energy delivers mobile CNG conversion and on-demand refueling services. Cut fuel costs. Improve efficiency. Power fleets and personal vehicles across Nigeria.",
  keywords: [
    "Adesa Energy",
    "CNG conversion Nigeria",
    "mobile CNG refueling",
    "compressed natural gas",
    "fleet fuel solutions",
    "alternative fuel Nigeria",
  ],
  authors: [{ name: "Adesa Energy" }],
  creator: "Adesa Energy",
  publisher: "Adesa Energy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://www.adesaenergy.com",
    siteName: "Adesa Energy",
    title: "Adesa Energy | Powering Progress, Fueling Tomorrow",
    description:
      "Mobile CNG conversion and refueling built for savings, efficiency, and cleaner transport.",
    images: [
      {
        url: "/adesa-energy.png",
        width: 1200,
        height: 630,
        alt: "Adesa Energy Mobile CNG Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adesa Energy | Mobile CNG Solutions",
    description:
      "Mobile CNG conversion and refueling for fleets and individuals.",
    images: ["/adesa-energy.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#22244E",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#59C6E5" },
    { media: "(prefers-color-scheme: dark)", color: "#22244E" },
  ],
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${montserrat.variable} bg-background text-foreground transition-colors`}
      >
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="dark"
        >
          <Providers>
            <AppShell>{children}</AppShell>
          </Providers>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
