import type { NextConfig } from "next";

const IMAGE_QUALITY_STANDARD = 75;
const IMAGE_QUALITY_HIGH = 100;

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  trailingSlash: false,
  output: undefined,
  transpilePackages: undefined,
  typedRoutes: true,
  cacheComponents: true,

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    qualities: [IMAGE_QUALITY_STANDARD, IMAGE_QUALITY_HIGH],
    formats: ["image/webp", "image/avif"],
    deviceSizes: undefined,
  },
};

export default nextConfig;
