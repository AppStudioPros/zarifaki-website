import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about/", destination: "/about", permanent: true },
      { source: "/sample-page/", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
