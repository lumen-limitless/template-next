const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  output: undefined,
  transpilePackages: undefined,
  images: {
    formats: ['image/webp', 'image/avif'],
  },

  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: { dimensions: false, typescript: true },
        },
      ],
    })

    return config
  },
}

const nextConfigWithBundleAnalyzer = withBundleAnalyzer(nextConfig)
module.exports = nextConfigWithBundleAnalyzer
