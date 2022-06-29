import '../styles/index.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { APP_DESCRIPTION, APP_NAME } from '../constants'
import Layout from '../layouts'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta name="description" content={APP_DESCRIPTION} />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
