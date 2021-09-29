import type { GetStaticProps } from "next";
import type { VFC } from "react";
import { ArticleList } from "src/components/articleList";
import { Layout } from "src/components/layout";
import type { MicroCMSContent } from "src/components/types";
import { client } from "src/libs/microcms";

const Index: VFC<{ datas: MicroCMSContent[] }> = (props) => {
  return (
    <Layout>
      <ArticleList items={props.datas} />
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
