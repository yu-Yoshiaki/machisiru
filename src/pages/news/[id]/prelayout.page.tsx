/* eslint-disable @typescript-eslint/naming-convention */
import { Layout } from "layout";
import type { MicroCMSCustomField } from "src/types/microcms";

import { NewsArticleLayout } from "./Layout";

type Props = {
  mainTitle: string;
  updatedAt: string;
  mainImage:
    | MicroCMSCustomField<
        "image",
        {
          image: {
            url: string;
            height: number;
            width: number;
          };
          alt: string;
        }
      >
    | undefined;
  bodys: MicroCMSCustomField<
    "paragraph",
    {
      h2_title: string;
      h2_content: string;
    }
  >[];
  id: string;
};

const datas: Props = {
  mainTitle: "初心者は引っかかる！NextJsで気をつけること",
  mainImage: {
    fieldId: "image",
    image: {
      url: "/torii.jpg",
      height: 100,
      width: 200,
    },
    alt: "thisis ",
  },

  bodys: [
    {
      fieldId: "paragraph",
      h2_title: "クライアントとサーバーサイド",
      h2_content:
        "<p>NextJsでは、クライアント側で動く処理とサーバー側で動く処理があり、先に選ぶことができる。また、一つのファイルで共存可能である。(SSG×SWRなど)<br>そのため、初めのうちは、どれがクライアントでどれがサーバーサイドかが分からず、エラーが発生することがある。<br><br>例えば環境変数を使用する場合、<br>環境変数はサーバーにデータが存在するので、基本はサーバー側でしか読み込むことができません。<br><br>これが意外とつまづくポイントなので、ぜひ覚えておきたい。</p>",
    },
    {
      fieldId: "paragraph",
      h2_title: "getStaticProps,getServerSideProps",
      h2_content:
        "<p>NextJsでは、クライアント側で動く処理とサーバー側で動く処理があり、先に選ぶことができる。また、一つのファイルで共存可能である。(SSG×SWRなど)<br>そのため、初めのうちは、どれがクライアントでどれがサーバーサイドかが分からず、エラーが発生することがある。<br><br>例えば環境変数を使用する場合、<br>環境変数はサーバーにデータが存在するので、基本はサーバー側でしか読み込むことができません。<br><br>これが意外とつまづくポイントなので、ぜひ覚えておきたい。</p>",
    },
    {
      fieldId: "paragraph",
      h2_title: "API Route",
      h2_content:
        "<p>NextJsでは、クライアント側で動く処理とサーバー側で動く処理があり、先に選ぶことができる。また、一つのファイルで共存可能である。(SSG×SWRなど)<br>そのため、初めのうちは、どれがクライアントでどれがサーバーサイドかが分からず、エラーが発生することがある。<br><br>例えば環境変数を使用する場合、<br>環境変数はサーバーにデータが存在するので、基本はサーバー側でしか読み込むことができません。<br><br>これが意外とつまづくポイントなので、ぜひ覚えておきたい。</p>",
    },
    {
      fieldId: "paragraph",
      h2_title: "まとめ",
      h2_content:
        "<p>NextJsでは、クライアント側で動く処理とサーバー側で動く処理があり、先に選ぶことができる。また、一つのファイルで共存可能である。(SSG×SWRなど)<br>そのため、初めのうちは、どれがクライアントでどれがサーバーサイドかが分からず、エラーが発生することがある。<br><br>例えば環境変数を使用する場合、<br>環境変数はサーバーにデータが存在するので、基本はサーバー側でしか読み込むことができません。<br><br>これが意外とつまづくポイントなので、ぜひ覚えておきたい。</p>",
    },
  ],
  updatedAt: "2022-01-20",
  id: "0001",
};

const PreLayout = () => {
  return (
    <NewsArticleLayout
      mainTitle={datas.mainTitle}
      mainImage={datas.mainImage}
      bodys={datas.bodys}
      updatedAt={datas.updatedAt}
      id={datas.id}
    />
  );
};
PreLayout.getLayout = Layout;

export default PreLayout;
