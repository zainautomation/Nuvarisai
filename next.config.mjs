/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // BASE_PATH is injected by the GitHub Pages configure-pages action
  basePath:    process.env.BASE_PATH || '',
  assetPrefix: process.env.BASE_PATH || '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
