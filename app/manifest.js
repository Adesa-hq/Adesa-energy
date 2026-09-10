import { siteConfig } from "@/config/site";

export default function manifest() {
  return {
    name: "Adesa Energy — CNG Conversion and Refueling",
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#081126",
    theme_color: "#22244E",
    lang: "en-NG",
    categories: ["business", "automotive", "utilities"],
    icons: [
      {
        src: "/adesa-energy.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
