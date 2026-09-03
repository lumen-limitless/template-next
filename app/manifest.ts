import type { MetadataRoute } from "next";
import { APP_DESCRIPTION } from "@/lib/metadata";

export default function manifest(): MetadataRoute.Manifest {
  return {
    background_color: "#ffffff",
    description: APP_DESCRIPTION,
    display: "standalone",
    icons: [],
    name: "Next.js Starter",
    screenshots: [],
    short_name: "Next.js Starter",
    start_url: "/",
    theme_color: "#000000",
  };
}
