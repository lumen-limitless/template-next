import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../layouts'
import { DefaultSeo } from 'next-seo'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        defaultTitle={process.env.NEXT_PUBLIC_APP_NAME || ''}
        titleTemplate={`%s - ${process.env.NEXT_PUBIC_APP_NAME || ''}`}
        description={process.env.NEXT_PUBLIC_APP_DESCRIPTION || ''}
      />
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
