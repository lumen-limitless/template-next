import './globals.css'
import Image from 'next/image'
import { Roboto } from 'next/font/google'
import { APP_DESCRIPTION, APP_NAME, APP_URL } from '@/constants'
import { Metadata } from 'next'
import { defaultMetadata } from './DefaultMetadata'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export const metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>

      <body className={`${roboto.className}`}>
        <a href="#main" className="sr-only" aria-label="skip">
          skip to main content
        </a>

        <header
          className={
            'sticky top-0 z-20 flex h-16 w-full items-center border-b border-secondary px-5'
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
          className="flex h-16 items-center border-t border-secondary px-5"
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
