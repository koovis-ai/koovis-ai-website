/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/services", destination: "/workforce", permanent: true },
      { source: "/services/:path*", destination: "/workforce", permanent: true },
      { source: "/products", destination: "/", permanent: true },
      { source: "/products/wealthpilot", destination: "/research", permanent: true },
      { source: "/products/studios", destination: "/studios", permanent: true },
      { source: "/products/pa", destination: "/workforce", permanent: true },
    ];
  },
};

export default nextConfig;
