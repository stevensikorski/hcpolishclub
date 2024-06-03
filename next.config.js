/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "gyazo.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media1.tenor.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
