import { APP_URL } from '@/lib/constants'
import { MetadataRoute } from 'next'

export default function Sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: APP_URL,
      lastModified: new Date(),
    },
  ]
}
