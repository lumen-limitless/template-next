import type { Metadata } from "next";

export const APP_DESCRIPTION =
  "A Next.js starter with TypeScript, TailwindCSS, ESLint, Prettier, Jest, and more.";

export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Next.js Starter";

export const baseUrl = new URL(
  process.env.NEXT_PUBLIC_APP_URL
    ? process.env.NEXT_PUBLIC_APP_URL.startsWith("http")
      ? process.env.NEXT_PUBLIC_APP_URL
      : `https://${process.env.NEXT_PUBLIC_APP_URL}`
    : process.env.NEXT_PUBLIC_VERCEL_URL
      ? process.env.NEXT_PUBLIC_VERCEL_URL.startsWith("http")
        ? process.env.NEXT_PUBLIC_VERCEL_URL
        : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : "http://localhost:3000",
);

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
