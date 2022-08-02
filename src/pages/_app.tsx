import '../styles/index.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { APP_DESCRIPTION, APP_NAME } from '../constants'
import Layout from '../layouts'
import { DefaultSeo } from 'next-seo'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        defaultTitle={APP_NAME}
        titleTemplate={`%s | ${APP_NAME}`}
        description={APP_DESCRIPTION}
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
