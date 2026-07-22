

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/resume',
        destination: 'https://shorturl.at/yUCLq',
      },
    ];
  },
};

export default nextConfig;

