/* eslint-disable no-console */
import type { GetStaticProps } from "next";
import { List } from "src/components/articles";
import { fetcher } from "src/libs/fetcher";
import { client } from "src/libs/microcms";
import type { MicroCMSContent } from "src/types";
import useSWR from "swr";

const API = "/api/microcms";

/*--------------------------------------
①ポイント → 対策
・getStaticPropsはサーバー側で呼ばれるので、環境変数可 →→→ 通常フェッチし、返り値をSWRの初期値へ代入
・SWRはクライアント側で呼ばれるので、環境変数不可 →→→ SWRからAPIRouteを経由、APIRouteから通常フェッチ
--------------------------------------*/

//microCMS SDKからISR
export const getStaticProps: GetStaticProps = async () => {
  const datas: { contents: MicroCMSContent[] } = await client.get({
    endpoint: "blog",
  });

  return {
    props: {
      contents: datas.contents,
    },
    revalidate: 3,
  };
};

//ISRだけだと古いデータが呼ばれるので、SWRで再フェッチ
const Index = (props: { contents: MicroCMSContent[] }) => {
  const { data: contents, error } = useSWR(API, fetcher, { fallbackData: props.contents });
  if (error) return <div>error</div>;
  if (!error && !contents) return <div>isLoding</div>;
  if (contents && contents.length === 0) return <div>isEmpty</div>;

  if (contents) {
    //   console.log("length: ", contents.length);
    //   console.log("contents: ", contents);
    return <List items={contents} />;
  }
};

export default Index;
