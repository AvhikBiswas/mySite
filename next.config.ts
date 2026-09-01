import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/resume',
        destination: 'https://drive.google.com/file/d/1sEV_RqYCZlQzE71FYRb_K9pP4yox5JLa/view?usp=sharing',
        permanent: false,
      },
    ];
  },
};


export default nextConfig;
