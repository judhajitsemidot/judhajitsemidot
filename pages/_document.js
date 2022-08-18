import Document, { Html, Head, Main, NextScript } from "next/document";
import { appendBasePathOnProd } from "../src/common";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            async
            src={appendBasePathOnProd("static/js/checkBrowser.js")}
          />
          <link
            rel="icon"
            type="image/png"
            href={appendBasePathOnProd("images/favicon.png")}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
