/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.plantstore.ie",
        pathname: "/cdn/**", // allow all images under /cdn/
      },
    ],
  },
};

export default nextConfig;
