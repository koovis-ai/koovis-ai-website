/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Koovis AI became a film studio on 2026-10-01 (D47). Retired pages go home.
      { source: "/pulse", destination: "/", permanent: true },
      { source: "/services", destination: "/", permanent: true },
      { source: "/services/:path*", destination: "/", permanent: true },
      { source: "/pricing", destination: "/", permanent: true },
      { source: "/careers", destination: "/", permanent: true },
      { source: "/faq", destination: "/", permanent: true },
      { source: "/products", destination: "/", permanent: true },
      { source: "/products/studios", destination: "/studios", permanent: true },
      { source: "/products/:path*", destination: "/", permanent: true },
      // Temporary: Workforce is dormant (D47.3); /papers may return with film research.
      { source: "/workforce", destination: "/", permanent: false },
      { source: "/workforce/:path*", destination: "/", permanent: false },
      { source: "/papers", destination: "/", permanent: false },
      { source: "/research", destination: "/", permanent: false },
      { source: "/research/:path*", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
