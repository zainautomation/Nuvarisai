/** @type {import('next').NextConfig} */
const basePath = process.env.BASE_PATH || '';
const isGitHubPages = !!process.env.BASE_PATH;

const nextConfig = {
  ...(isGitHubPages && {
    output: 'export',
    basePath,
    assetPrefix: basePath,
  }),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
