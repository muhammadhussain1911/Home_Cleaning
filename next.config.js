/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for cPanel hosting (no Node.js required)
  output: "export",

  // Image optimization disabled for static export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  // Ensure trailing slashes for static routing
  trailingSlash: true,
};

module.exports = nextConfig;
