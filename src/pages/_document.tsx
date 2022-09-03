import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="/fonts/Author_Complete/Fonts/WEB/css/author.css"
        />
        <link
          rel="stylesheet"
          href="/fonts/CabinetGrotesk_Complete/Fonts/WEB/css/cabinet-grotesk.css"
        />
        <link
          rel="stylesheet"
          href="/fonts/Chillax_Complete/Fonts/WEB/css/chillax.css"
        />
        <link
          rel="stylesheet"
          href="/fonts/Satoshi_Complete/Fonts/WEB/css/satoshi.css"
        />
        <link rel="stylesheet" href="/fonts/Lato/lato.css" />
        <link rel="stylesheet" href="/fonts/Montserrat/montserrat.css" />
        <link rel="stylesheet" href="/fonts/Roboto/roboto.css" />
        <link rel="stylesheet" href="/fonts/Poppins/poppins.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
