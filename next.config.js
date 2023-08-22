/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdnb.artstation.com", "cdna.artstation.com", "artstation.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
      // entry for cdnb.artstation.com
      {
        protocol: "https",
        hostname: "cdnb.artstation.com",
        path: "/*",
        port: "",
      },
      {
        protocol: "https",
        hostname: "artstation.com",
        path: "/*",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cdna.artstation.com",
        path: "/*",
        port: "",
      },
    ],
  },
  reactStrictMode: true,
};
const withVideos = require("next-videos");

module.exports = nextConfig;
module.exports = withVideos();
