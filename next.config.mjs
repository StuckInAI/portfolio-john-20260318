/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  serverExternalPackages: ['typeorm', 'better-sqlite3'],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
