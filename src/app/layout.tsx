import './globals.css'
import { Roboto } from 'next/font/google'
import { defaultMetadata } from './metadata'

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
          skip to content
        </a>

        <header id="header">
          <div className="flex w-full justify-between">
            <object data="/vercel.svg" width={100} height={24} />
          </div>
        </header>

        <main id="main">{children}</main>
        <footer id="footer">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Lumen Limitless. All rights
            reserved.
          </p>
        </footer>
      </body>
    </html>
  )
}
