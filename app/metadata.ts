import { APP_DESCRIPTION, APP_NAME, APP_URL } from '@/lib/constants'
import { type Metadata } from 'next'

export const defaultMetadata: Metadata = {
  title: {
    absolute: APP_NAME,
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  applicationName: APP_NAME,
  description: APP_DESCRIPTION,
  metadataBase: new URL(APP_URL),
  generator: 'Next.js',
  keywords: [],
  manifest: null,

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
    creator: '@LumenLimitless',
    description: APP_DESCRIPTION,
    card: 'summary_large_image',
  },

  appleWebApp: {
    statusBarStyle: 'black-translucent',
    title: APP_NAME,
    capable: false,
  },

  robots: {
    index: true,
    follow: true,
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}
