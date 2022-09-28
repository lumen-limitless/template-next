import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          key="description"
          name="description"
          content={process.env.NEXT_PUBLIC_APP_DESCRIPTION || ''}
        />
        <meta
          name="application-name"
          content={process.env.NEXT_PUBLIC_APP_NAME || ''}
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta
          name="apple-mobile-web-app-title"
          content={process.env.NEXT_PUBLIC_APP_NAME || ''}
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#FFFFFF" />
        <meta key="twitter:card" name="twitter:card" content="app" />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={process.env.NEXT_PUBLIC_APP_NAME || ''}
        />
        <meta
          key="twitter:url"
          name="twitter:url"
          content={process.env.NEXT_PUBLIC_APP_URL || ''}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={process.env.NEXT_PUBLIC_APP_DESCRIPTION || ''}
        />
        <meta key="twitter:image" name="twitter:image" content="" />
        <meta key="twitter:creator" name="twitter:creator" content="" />
        <meta key="og:type" property="og:type" content="website" />
        <meta
          key="og:site_name"
          property="og:site_name"
          content={process.env.NEXT_PUBLIC_APP_NAME || ''}
        />
        <meta
          key="og:url"
          property="og:url"
          content={process.env.NEXT_PUBLIC_APP_URL || ''}
        />
        <meta key="og:image" property="og:image" content="" />
        <meta
          key="og:description"
          property="og:description"
          content={process.env.NEXT_PUBLIC_APP_DESCRIPTION || ''}
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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
