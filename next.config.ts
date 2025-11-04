import withBundleAnalyzer from "@next/bundle-analyzer"
import { NextConfig } from "next"

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  output: undefined,
  transpilePackages: undefined,
  typedRoutes: true,
  cacheComponents: true,

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    qualities: [75, 100],
    formats: ["image/webp", "image/avif"],
    deviceSizes: undefined,
  },
}

// bundle-analyzer
export default withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" })(
  nextConfig
)
