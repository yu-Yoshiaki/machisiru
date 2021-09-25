/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import type { GetStaticProps } from "next";
import type { VFC } from "react";
import { ArticleList } from "src/components/articleList";
import { Layout } from "src/components/layout";
import { Profile } from "src/components/profile";
import type { MicroCMSContent } from "src/components/types";
//import { Topic } from "src/components/topic";
import { client } from "src/libs/microcms";

const Index: VFC<{ datas: MicroCMSContent[] }> = (props) => {
  return (
    <Layout>
      {/* <Topic items={props.datas} /> */}
      <ArticleList items={props.datas} /> {/* メインコンテンツ */}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const datas: { contents: MicroCMSContent[] } = await client.get({
    endpoint: "blog",
  });

  return {
    props: {
      datas: datas.contents,
    },
  };
};

export default Index;
