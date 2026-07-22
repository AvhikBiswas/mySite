import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/resume',
        destination: 'https://shorturl.at/yUCLq',
        permanent: false,
      },
    ];
  },
};


export default nextConfig;
