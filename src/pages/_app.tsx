import "tailwindcss/tailwind.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "src/components/layouts";

const App = (props: AppProps) => {
  return (
    <>
      <Head>
        <title>FIND NEXT</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>

      <Layout>
        <props.Component {...props.pageProps} />
      </Layout>
    </>
  );
};

export default App;
