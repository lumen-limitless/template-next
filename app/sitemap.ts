import type { MetadataRoute } from "next";
import { baseUrl } from "../lib/metadata";

export default function Sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl.toString(),
      lastModified: new Date(),
    },
  ];
}
