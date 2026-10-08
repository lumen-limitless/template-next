// Default Open Graph image. Add twitter-image.tsx if X/Twitter needs a different one.
import { ImageResponse } from "next/og";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/metadata";

export const alt = APP_NAME;
export const size = {
  height: 630,
  width: 1200,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "white",
        display: "flex",
        flexDirection: "column",
        gap: 24,
        height: "100%",
        justifyContent: "center",
        padding: 80,
        textAlign: "center",
        width: "100%",
      }}
    >
      <div style={{ fontSize: 96, fontWeight: 700 }}>{APP_NAME}</div>
      <div style={{ color: "#555", fontSize: 40 }}>{APP_DESCRIPTION}</div>
    </div>,
    size
  );
}
