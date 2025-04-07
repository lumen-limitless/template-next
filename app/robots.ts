import { type MetadataRoute } from "next"
import { baseUrl } from "./metadata"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${baseUrl.origin}/sitemap.xml`,
    host: baseUrl.host,
  }
}
