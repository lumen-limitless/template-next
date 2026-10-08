import type { Metadata } from "next";
import { env } from "@/lib/env";

export const APP_NAME = env.NEXT_PUBLIC_APP_NAME || "{{APP_NAME}}";

export const APP_DESCRIPTION = "{{APP_DESCRIPTION}}";

export const APP_AUTHOR = "Lumen Limitless";

const TWITTER_HANDLE = "@LumenLimitless";

// NEXT_PUBLIC_APP_URL wins, then the Vercel production domain, then the
// deployment URL (previews), then localhost.
const getBaseUrl = (): string => {
  const url =
    env.NEXT_PUBLIC_APP_URL ||
    env.VERCEL_PROJECT_PRODUCTION_URL ||
    env.VERCEL_URL;

  if (!url) {
    return "http://localhost:3000";
  }

  return url.startsWith("http") ? url : `https://${url}`;
};

export const baseUrl = new URL(getBaseUrl());

export const defaultMetadata: Metadata = {
  appleWebApp: {
    capable: false,
    statusBarStyle: "default",
    title: APP_NAME,
  },
  applicationName: APP_NAME,
  authors: [{ name: APP_AUTHOR }],
  description: APP_DESCRIPTION,
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
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
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  twitter: {
    card: "summary_large_image",
    creator: TWITTER_HANDLE,
    description: APP_DESCRIPTION,
    title: APP_NAME,
  },
};
