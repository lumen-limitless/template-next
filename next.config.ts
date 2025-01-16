import withBundleAnalyzer from "@next/bundle-analyzer"
import { NextConfig } from "next"

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  output: undefined,
  transpilePackages: undefined,
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: undefined,
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            typescript: true,
            dimensions: false,
          },
        },
      ],
    })

    return config
  },
}

// bundle-analyzer
export default withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" })(
  nextConfig
)
