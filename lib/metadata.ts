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
  title: {
    absolute: APP_NAME,
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  applicationName: APP_NAME,
  description: APP_DESCRIPTION,
  metadataBase: baseUrl,
  generator: "Next.js",
  keywords: ["nextjs", "template"],

  openGraph: {
    type: "website",
    url: baseUrl,
    siteName: APP_NAME,
    title: APP_NAME,
    description: APP_DESCRIPTION,
    locale: "en_US",
  },

  twitter: {
    title: APP_NAME,
    creator: "@LumenLimitless",
    description: APP_DESCRIPTION,
    card: "summary_large_image",
  },

  appleWebApp: {
    statusBarStyle: "default",
    title: APP_NAME,
    capable: false,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};
