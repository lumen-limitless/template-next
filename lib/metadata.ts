import type { Metadata } from "next";
import { env } from "./env";

export const APP_DESCRIPTION =
  "A Next.js starter with TypeScript, TailwindCSS, ultracite (biome), Jest, and more.";

export const APP_NAME = env.NEXT_PUBLIC_APP_NAME || "Next.js Starter";

const getBaseUrl = (): string => {
  if (env.NEXT_PUBLIC_APP_URL) {
    const url = env.NEXT_PUBLIC_APP_URL;
    return url.startsWith("http") ? url : `https://${url}`;
  }

  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    const url = process.env.NEXT_PUBLIC_VERCEL_URL;
    return url.startsWith("http") ? url : `https://${url}`;
  }

  return "http://localhost:3000";
};

export const baseUrl = new URL(getBaseUrl());

export const defaultMetadata: Metadata = {
  appleWebApp: {
    capable: false,
    statusBarStyle: "default",
    title: APP_NAME,
  },
  applicationName: APP_NAME,
  description: APP_DESCRIPTION,

  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
  generator: "Next.js",
  keywords: ["nextjs", "template"],
  metadataBase: baseUrl,

  openGraph: {
    description: APP_DESCRIPTION,
    locale: "en_US",
    siteName: APP_NAME,
    title: APP_NAME,
    type: "website",
    url: baseUrl,
  },

  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true,
    },
    index: true,
  },
  title: {
    absolute: APP_NAME,
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },

  twitter: {
    card: "summary_large_image",
    creator: "@LumenLimitless",
    description: APP_DESCRIPTION,
    title: APP_NAME,
  },
};
