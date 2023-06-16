import './globals.css'
import { Roboto } from 'next/font/google'
import { defaultMetadata } from './metadata'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

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

        <Header />

        <Main>{children}</Main>

        <Footer />
      </body>
    </html>
  )
}
