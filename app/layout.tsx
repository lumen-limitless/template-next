import { cn } from "@/lib/utils";
import { Viewport } from "next";
import { Roboto } from "next/font/google";
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>

      <body
        className={cn(
          "flex min-h-screen touch-manipulation flex-col",
          roboto.className,
        )}
      >
        <a
          href="#main"
          className="sr-only absolute top-[-999px] left-[-999px] block border bg-[#ffc] text-black focus:not-sr-only focus:top-0 focus:bottom-0 focus:border-[#990000]"
          aria-label="skip"
          id="skip"
        >
          Skip Content
        </a>

        <header
          id="header"
          className="sticky top-0 z-20 flex h-16 w-full items-center border-b px-5"
        >
          <div className="flex w-full justify-between">
            <object title="vercel" data="/vercel.svg" width={100} height={24} />
          </div>
        </header>

        <main id="main" className="grow">
          {props.children}
        </main>

        <footer id="footer" className="flex h-16 items-center border-t px-5">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Lumen Limitless. All rights
            reserved.
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
