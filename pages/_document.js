import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Social sharing image */}
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:title" content="Innovate – Fueling the Future of Ideas" />
        <meta property="og:description" content="Submit and launch your best startup ideas here." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
