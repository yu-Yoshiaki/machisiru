/* eslint-disable @typescript-eslint/naming-convention */
import "src/style/index.css";

import type { CustomAppProps } from "next/app";
import Head from "next/head";

const App = (props: CustomAppProps) => {
  const getLayout =
    props.Component.getLayout ||
    ((page: any) => {
      return page;
    });

  return (
    <>
      <Head>
        <title>MACHISIRU</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      {getLayout(<props.Component {...props.pageProps} />)}
    </>
  );
};

export default App;
