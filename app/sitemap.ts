import { type MetadataRoute } from 'next';

const baseUrl = new URL(
  process.env.NEXT_PUBLIC_APP_URL
    ? `https://${process.env.NEXT_PUBLIC_APP_URL}`
    : process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : 'http://localhost:3000',
);

export default function Sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl.toString(),
      lastModified: new Date(),
    },
  ];
}
