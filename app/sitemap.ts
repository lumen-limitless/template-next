import { MetadataRoute } from 'next'

export default function Sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.NEXT_PUBLIC_APP_URL || '',
      lastModified: new Date(),
    },
  ]
}
