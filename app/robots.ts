import type { MetadataRoute } from "next";
import { baseUrl } from "../lib/metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    host: baseUrl.host,
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${baseUrl.origin}/sitemap.xml`,
  };
}
