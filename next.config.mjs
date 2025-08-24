/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: 'export', // Temporarily disabled for build fix
  // trailingSlash: true, // Temporarily disabled for build fix
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // unoptimized: true, // Temporarily disabled for build fix
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint warnings (but not errors).
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Warning: This allows production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
