import { Metadata } from 'next'

const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || ''
const APP_DESCRIPTION = process.env.NEXT_PUBLIC_APP_DESCRIPTION || ''
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || ''

export const defaultMetadata: Metadata = {
  title: {
    absolute: APP_NAME,
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  applicationName: APP_NAME,
  description: APP_DESCRIPTION,
  themeColor: '#FFFFFF',
  metadataBase: new URL(APP_URL),
  generator: 'Next.js',
  keywords: [],
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-icon-57x57.png',
      sizes: '57x57',
    },
    { rel: 'apple-touch-icon', url: '/apple-icon-60x60.png', sizes: '60x60' },
    { rel: 'apple-touch-icon', url: '/apple-icon-72x72.png', sizes: '72x72' },
    { rel: 'apple-touch-icon', url: '/apple-icon-76x76.png', sizes: '76x76' },
    {
      rel: 'apple-touch-icon',
      url: '/apple-icon-114x114.png',
      sizes: '114x114',
    },
    {
      rel: 'apple-touch-icon',
      url: '/apple-icon-120x120.png',
      sizes: '120x120',
    },
    {
      rel: 'apple-touch-icon',
      url: '/apple-icon-144x144.png',
      sizes: '144x144',
    },
    {
      rel: 'apple-touch-icon',
      url: '/apple-icon-152x152.png',
      sizes: '152x152',
    },
    {
      rel: 'apple-touch-icon',
      url: '/apple-icon-180x180.png',
      sizes: '180x180',
    },
    {
      rel: 'icon',
      url: '/android-icon-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      rel: 'icon',
      url: '/favicon-32x32.png',
      sizes: '32x32',
      type: 'image/png',
    },
    {
      rel: 'icon',
      url: '/favicon-96x96.png',
      sizes: '96x96',
      type: 'image/png',
    },
    {
      rel: 'icon',
      url: '/favicon-16x16.png',
      sizes: '16x16',
      type: 'image/png',
    },
  ],

  viewport:
    'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',

  openGraph: {
    type: 'website',
    url: APP_URL,
    siteName: APP_NAME,
    title: APP_NAME,
    description: APP_DESCRIPTION,
    locale: 'en_US',
  },

  twitter: {
    title: APP_NAME,
    site: APP_URL,
    creator: '@lumenlimitless',
    description: APP_DESCRIPTION,
    card: 'summary_large_image',
  },

  appleWebApp: {
    statusBarStyle: 'black-translucent',
    title: APP_NAME,
    capable: true,
  },

  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: '/manifest.json',

  other: {
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#FFFFFF',
    'msapplication-TileImage': '/ms-icon-144x144.png',
    'msapplication-config': '/browserconfig.xml',
    'msapplication-tap-highlight': 'no',
  },
}
