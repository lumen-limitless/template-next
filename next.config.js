/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  trailingSlash: true,
  il8n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    formats: ['image/webp', 'image/avif'],
  },
})
