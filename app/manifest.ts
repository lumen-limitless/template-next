import { APP_DESCRIPTION } from "@/lib/metadata"
import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Next.js Starter",
    short_name: "Next.js Starter",
    description: APP_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [],
    screenshots: [],
  }
}
