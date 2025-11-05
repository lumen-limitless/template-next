import type { Viewport } from "next";
import { Roboto } from "next/font/google";
import { cn } from "@/lib/utils";
import { defaultMetadata } from "../lib/metadata";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = defaultMetadata;

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout(props: LayoutProps<"/">) {
  return (
    <html className="scroll-smooth" lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      </head>

      <body
        className={cn(
          "flex min-h-screen touch-manipulation flex-col",
          roboto.className
        )}
      >
        <a
          aria-label="skip"
          className="sr-only absolute top-[-999px] left-[-999px] block border bg-[#ffc] text-black focus:not-sr-only focus:top-0 focus:bottom-0 focus:border-[#990000]"
          href="#main"
          id="skip"
        >
          Skip Content
        </a>

        <header
          className="sticky top-0 z-20 flex h-16 w-full items-center border-b px-5"
          id="header"
        >
          <div className="flex w-full justify-between">
            <object data="/vercel.svg" height={24} title="vercel" width={100} />
          </div>
        </header>

        <main className="grow" id="main">
          {props.children}
        </main>

        <footer className="flex h-16 items-center border-t px-5" id="footer">
          <p className="text-sm">
            &copy; Lumen Limitless. All rights reserved.
          </p>
        </footer>

        <TailwindIndicator />
      </body>
    </html>
  );
}

const TailwindIndicator = () => {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="fixed bottom-0 left-0 z-50 bg-black p-2 font-mono text-sm text-white">
      <span className="block sm:hidden">XS</span>
      <span className="hidden sm:block md:hidden">SM</span>
      <span className="hidden md:block lg:hidden">MD</span>
      <span className="hidden lg:block xl:hidden">LG</span>
      <span className="hidden xl:block 2xl:hidden">XL</span>
      <span className="3xl:hidden hidden 2xl:block">2XL</span>
      <span className="3xl:block hidden">3XL</span>
    </div>
  );
};
