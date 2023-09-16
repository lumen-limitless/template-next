export const APP_URL = process.env.NEXT_PUBLIC_APP_URL
  ? `${process.env.NEXT_PUBLIC_APP_URL}`
  : process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000'

export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Next App'

export const APP_DESCRIPTION = process.env.NEXT_PUBLIC_APP_DESCRIPTION || ''
