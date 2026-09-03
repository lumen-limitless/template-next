import type { NextConfig } from "next";

const IMAGE_QUALITY_STANDARD = 75;
const IMAGE_QUALITY_HIGH = 100;

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    deviceSizes: undefined,
    formats: ["image/webp", "image/avif"],
    qualities: [IMAGE_QUALITY_STANDARD, IMAGE_QUALITY_HIGH],
  },
  output: undefined,
  reactCompiler: true,
  reactStrictMode: true,
  trailingSlash: false,
  transpilePackages: undefined,
  typedRoutes: true,

  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
