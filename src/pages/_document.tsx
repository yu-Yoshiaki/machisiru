import Document, { Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <body>
          <Main />
          <NextScript />
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1033411179198037"
            crossOrigin="anonymous"
          ></script>
          <ins
            // eslint-disable-next-line tailwindcss/no-custom-classname
            className="adsbygoogle"
            data-ad-client={process.env.DATA_AD_CLIENT}
            data-ad-slot={process.env.DATA_AD_SLOT}
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
