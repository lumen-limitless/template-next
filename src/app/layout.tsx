import '@/styles/globals.css'
import Image from 'next/image'
import { Roboto } from 'next/font/google'
import { APP_DESCRIPTION, APP_NAME, APP_URL } from '@/constants'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export const metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className="m-0 box-border touch-manipulation scroll-smooth bg-gray-50 p-0 text-zinc-900 antialiased"
    >
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta key="description" name="description" content={APP_DESCRIPTION} />
        <meta name="application-name" content={APP_NAME} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content={APP_NAME} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#FFFFFF" />
        <meta key="twitter:card" name="twitter:card" content="app" />
        <meta key="twitter:title" name="twitter:title" content={APP_NAME} />
        <meta key="twitter:url" name="twitter:url" content={APP_URL} />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={APP_DESCRIPTION}
        />
        <meta key="twitter:image" name="twitter:image" content="" />
        <meta key="twitter:creator" name="twitter:creator" content="" />
        <meta key="og:type" property="og:type" content="website" />
        <meta key="og:site_name" property="og:site_name" content={APP_NAME} />
        <meta key="og:url" property="og:url" content={APP_URL} />
        <meta key="og:image" property="og:image" content="" />
        <meta
          key="og:description"
          property="og:description"
          content={APP_DESCRIPTION}
        />

        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </head>

      <body className={`flex min-h-screen flex-col ${roboto.className}`}>
        <a href="#main" className="sr-only" aria-label="skip">
          skip to main content
        </a>

        <header
          className={
            'sticky top-0 z-20 flex h-16 w-full items-center border-b border-gray-200 px-5 '
          }
        >
          <div className="flex w-full justify-between">
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={100}
              height={24}
              priority
            />
          </div>
        </header>

        <main id="main" className="flex h-full w-full flex-grow flex-col">
          {children}
        </main>
        <footer
          id="footer"
          className="flex h-16 items-center border-t border-gray-200 px-5"
        >
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Lumen Limitless. All rights
            reserved.
          </p>
        </footer>
      </body>
    </html>
  )
}
