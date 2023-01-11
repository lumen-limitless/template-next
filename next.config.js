const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
}

module.exports =
  process.env.NODE_ENV === 'production'
    ? nextConfig
    : withBundleAnalyzer(nextConfig)
