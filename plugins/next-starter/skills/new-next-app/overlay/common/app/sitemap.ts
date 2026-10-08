import type { MetadataRoute } from "next";
import { baseUrl } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl.toString(),
    },
  ];
}
