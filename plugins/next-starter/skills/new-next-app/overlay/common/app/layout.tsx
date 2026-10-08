import type { Viewport } from "next";
import { Geist_Mono, Roboto } from "next/font/google";
import { APP_AUTHOR, defaultMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import "./globals.css";

// Roboto is applied with `className` so it works with both the shadcn and the
// plain create-next-app globals.css; the CSS variables feed `font-sans`/`font-mono`.
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata = defaultMetadata;

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      className={cn("scroll-smooth", roboto.variable, geistMono.variable)}
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={cn(
          "flex min-h-screen touch-manipulation flex-col antialiased",
          roboto.className
        )}
      >
        <a
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:border focus:bg-white focus:px-4 focus:py-2 focus:text-black"
          href="#main"
        >
          Skip to content
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
          {children}
        </main>

        <footer className="flex h-16 items-center border-t px-5" id="footer">
          <p className="text-sm">&copy; {APP_AUTHOR}. All rights reserved.</p>
        </footer>

        <TailwindIndicator />
      </body>
    </html>
  );
}

const TailwindIndicator = () => {
  if (process.env.NODE_ENV === "production") {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 z-50 bg-black p-2 font-mono text-sm text-white">
      <span className="block sm:hidden">XS</span>
      <span className="hidden sm:block md:hidden">SM</span>
      <span className="hidden md:block lg:hidden">MD</span>
      <span className="hidden lg:block xl:hidden">LG</span>
      <span className="hidden xl:block 2xl:hidden">XL</span>
      <span className="hidden 2xl:block">2XL</span>
    </div>
  );
};
