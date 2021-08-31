import "tailwindcss/tailwind.css";

import type { AppProps } from "next/app";
import Head from "next/head";

const App = (props: AppProps) => {
  return (
    <>
      <Head>
        <title>YOSHIBLOG</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <props.Component {...props.pageProps} />
    </>
  );
};

export default App;
