import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'data.riche.skin',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
