const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,

  webpack: (config, { isServer }) => {
    config.modules.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: { dimensions: false, typescript: true, icon: true },
        },
      ],
    })

    return config
  },
}

module.exports =
  process.env.NODE_ENV === 'production'
    ? nextConfig
    : withBundleAnalyzer(nextConfig)
