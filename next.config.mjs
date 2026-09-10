/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.facebook.com" },
    ],
  },
  experimental: {
    globalNotFound: true,
  },
  async redirects() {
    return [
      // Fix GSC 404: Malformed URLs crawled by bots (/$, /&)
      {
        source: "/$",
        destination: "/",
        permanent: true,
      },
      {
        source: "/&",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
