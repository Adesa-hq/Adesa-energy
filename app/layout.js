import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import AppShell from "./appshell";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { constructMetadata } from "@/lib/metadata";
import Image from "next/image";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata = constructMetadata({ titleTemplate: true });

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
    <html lang="en-NG" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(sessionStorage.getItem('adesa-energy-intro-seen'))document.documentElement.classList.add('adesa-intro-seen')}catch(e){}`,
          }}
        />
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;
            n.push=n;
            n.loaded=!0;
            n.version='2.0';
            n.queue=[];
            t=b.createElement(e);
            t.async=!0;
            t.src=v;
            s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s);
            }(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '1005345295218015');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>

      <body
        className={`${jakarta.variable} ${spaceGrotesk.variable} overflow-x-clip bg-background font-sans text-foreground antialiased transition-colors selection:bg-burnt-orange selection:text-white`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {/* Meta Pixel NoScript */}
        <noscript>
          <Image
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1005345295218015&ev=PageView&noscript=1"
            alt="facebook_meta"
          />
        </noscript>

        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="dark"
        >
          <AppShell>{children}</AppShell>
        </ThemeProvider>

        <Analytics />
        <SpeedInsights />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": "https://www.adesaenergy.com/#organization",
                "name": "Adesa Energy",
                "url": "https://www.adesaenergy.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.adesaenergy.com/adesa-energy.png",
                  "width": 400,
                  "height": 400,
                },
                "description": "Adesa Energy (a subsidiary of Adesa HQ) delivers mobile CNG conversion and on-demand refueling services across Nigeria, helping fleets and individuals reduce fuel costs by up to 50%.",
                "parentOrganization": {
                  "@type": "Organization",
                  "name": "Adesa HQ",
                  "email": "adeinfo@adesahq.com"
                },
                "foundingDate": "2024",
                "contactPoint": [
                  {
                    "@type": "ContactPoint",
                    "telephone": "+2348168823730",
                    "contactType": "customer service",
                    "areaServed": "NG",
                    "availableLanguage": "English",
                  },
                  {
                    "@type": "ContactPoint",
                    "email": "adeinfo@adesahq.com",
                    "contactType": "sales",
                    "areaServed": "NG",
                    "availableLanguage": "English",
                  },
                ],
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "2 Isheri road, Ojudu-Berger",
                  "addressLocality": "Lagos",
                  "addressRegion": "Lagos State",
                  "addressCountry": "NG",
                },
                "sameAs": [
                  "https://twitter.com/adesaenergy",
                  "https://www.linkedin.com/showcase/adesa-energy/",
                  "https://www.instagram.com/adesaenergy/?igsh=MWE2YWdvdWl2aWNvZg%3D%3D#",
                  "https://www.facebook.com/share/17HCMqGnz4/",
                ],
                "areaServed": {
                  "@type": "Country",
                  "name": "Nigeria",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://www.adesaenergy.com/#localbusiness",
                "name": "Adesa Energy",
                "image": "https://www.adesaenergy.com/adesa-energy.png",
                "url": "https://www.adesaenergy.com",
                "telephone": "+2348168823730",
                "email": "adeinfo@adesahq.com",
                "priceRange": "₦₦",
                "openingHours": "Mo-Sa 08:00-18:00",
                "description": "Mobile CNG vehicle conversion and on-demand refueling services across Nigeria.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "2 Isheri road, Ojudu-Berger",
                  "addressLocality": "Lagos",
                  "addressRegion": "Lagos State",
                  "addressCountry": "NG",
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 6.6194,
                  "longitude": 3.3501,
                },
                "hasMap": "https://maps.google.com/?q=Ojudu+Berger,Lagos",
                "department": [
                  {
                    "@type": "LocalBusiness",
                    "name": "Adesa Energy — Mile 2 Oke, Lagos",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Mile 2 Oke",
                      "addressRegion": "Lagos State",
                      "addressCountry": "NG",
                    },
                    "telephone": "+2348168823730",
                  },
                  {
                    "@type": "LocalBusiness",
                    "name": "Adesa Energy — Sango, Ilorin",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Sango",
                      "addressRegion": "Kwara State",
                      "addressCountry": "NG",
                    },
                    "telephone": "+2348168823730",
                  },
                  {
                    "@type": "LocalBusiness",
                    "name": "Adesa Energy — Kubwa, Abuja",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Kubwa",
                      "addressRegion": "FCT Abuja",
                      "addressCountry": "NG",
                    },
                    "telephone": "+2348168823730",
                  },
                ],
                "sameAs": [
                  "https://twitter.com/adesaenergy",
                  "https://www.linkedin.com/showcase/adesa-energy/",
                  "https://www.instagram.com/adesaenergy/?igsh=MWE2YWdvdWl2aWNvZg%3D%3D#",
                  "https://www.facebook.com/share/17HCMqGnz4/",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://www.adesaenergy.com/#website",
                "name": "Adesa Energy",
                "url": "https://www.adesaenergy.com",
                "description": "Adesa Energy — Mobile CNG Conversion & Refueling Services in Nigeria",
                "publisher": {
                  "@id": "https://www.adesaenergy.com/#organization",
                },
                "inLanguage": "en-NG",
              },
            ]),
          }}
        />
      </body>
    </html>
  );
}
