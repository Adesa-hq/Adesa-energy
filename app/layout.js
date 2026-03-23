import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Providers from "./provider";
import AppShell from "./appshell";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { constructMetadata } from "@/lib/metadata";

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

export const metadata = constructMetadata();

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Adesa Energy",
              url: "https://www.adesaenergy.com",
              logo: "https://www.adesaenergy.com/adesa-energy.png",
              sameAs: [
                "https://twitter.com/adesaenergy",
                "https://linkedin.com/company/adesa-energy",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
