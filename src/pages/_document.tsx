import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Ropa+Sans:ital@0;1&family=Rum+Raisin&family=Saira+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap"            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/fav.svg" type="image/svg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
