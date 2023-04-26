import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Roboto } from 'next/font/google'
import Layout from '@/layouts'
import { DefaultSeo } from 'next-seo'
import ErrorBoundary from '@/components/ErrorBoundary'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Set default seo */}
      <DefaultSeo
        defaultTitle={process.env.NEXT_PUBLIC_APP_NAME || ''}
        titleTemplate={`%s - ${process.env.NEXT_PUBIC_APP_NAME || ''}`}
        description={process.env.NEXT_PUBLIC_APP_DESCRIPTION || ''}
      />

      {/* Set viewport meta tag */}
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>

      {/* inject next/font into html css style */}
      <style jsx global>
        {`
          html {
            font-family: ${roboto.style.fontFamily};
          }
        `}
      </style>

      {/* Set layout */}
      <ErrorBoundary>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ErrorBoundary>
    </>
  )
}

export default MyApp
