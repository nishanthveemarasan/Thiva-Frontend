/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // reactCompiler is experimental in some Next 15 versions
  output: 'standalone', // Crucial: This bundles dependencies
  reactStrictMode: true,
  // basePath: '/next',
  // assetPrefix: '/next',

  // MUST BE INSIDE THE OBJECT
  images: {
    unoptimized: true, 
  },
};

module.exports = nextConfig;
