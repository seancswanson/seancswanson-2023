/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  reactStrictMode: true,
};
const withVideos = require("next-videos");

module.exports = nextConfig;
module.exports = withVideos();
