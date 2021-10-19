/* eslint-disable react/destructuring-assignment */
/* eslint-disable react-hooks/rules-of-hooks */
import type { GetStaticProps } from "next";
import type { CustomNextPage } from "next";
import { Layout } from "src/Layout";
import { client } from "src/libs/microcms";
import { NewsList } from "src/pages/news/NewsList";
import type { NewsResponse } from "src/pages/news/types";
import { SWRConfig } from "swr";

/*
  MicroCMSからSWRの初期値を取得
*/

const MicroCMS_APIRoute = "/api/microcms";

export const getStaticProps: GetStaticProps = async () => {
  const datas: { contents: NewsResponse[] } = await client.get({
    endpoint: "blog",
  });

  return {
    props: {
      fallback: {
        [MicroCMS_APIRoute]: datas.contents,
      },
    },
    revalidate: 3,
  };
};

const Index: CustomNextPage = ({ fallback }: any) => {
  return (
    <SWRConfig value={{ fallback }}>
      <NewsList />
    </SWRConfig>
  );
};

Index.getLayout = Layout;

export default Index;
