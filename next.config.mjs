/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/services", destination: "/workforce", permanent: true },
      { source: "/services/:path*", destination: "/workforce", permanent: true },
      { source: "/products", destination: "/", permanent: true },
      { source: "/products/wealthpilot", destination: "/", permanent: true },
      // WealthPilot archived 2026-09-28 (koovis-hq D45): temporary, so a revival can reuse /research
      { source: "/research", destination: "/", permanent: false },
      { source: "/research/:path*", destination: "/", permanent: false },
      { source: "/products/studios", destination: "/studios", permanent: true },
      { source: "/products/pa", destination: "/workforce", permanent: true },
    ];
  },
};

export default nextConfig;
