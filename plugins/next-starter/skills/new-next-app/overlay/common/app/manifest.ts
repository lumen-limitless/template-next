import type { MetadataRoute } from "next";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/metadata";

export default function manifest(): MetadataRoute.Manifest {
  return {
    background_color: "#ffffff",
    description: APP_DESCRIPTION,
    display: "standalone",
    icons: [],
    name: APP_NAME,
    short_name: APP_NAME,
    start_url: "/",
    theme_color: "#ffffff",
  };
}
