/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import type { GetStaticProps } from "next";
import type { VFC } from "react";
import { ArticleListView } from "src/components/articleListView";
import { Layout } from "src/components/layout";
import { Topic } from "src/components/topic";
import { client } from "src/libs/microcms";

export type Datas<T> = {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type MicroCMSContent = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  mainTitle: string;
  bodys: string;
  author?: string;
  images:
    | {
        fieldId: string;
        image: {
          url: string;
          height: number;
          width: number;
        };
      }[]
    | null;
};

const News: VFC<{ datas: MicroCMSContent[] }> = (props) => {
  return (
    <Layout>
      {/* <Topic items={props.datas} /> */}
      <ArticleListView items={props.datas} /> {/* メインコンテンツ */}
      <div id="Sidebar" className="bg-white">
        sidebar
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const datas: Datas<MicroCMSContent> = await client.get({
    endpoint: "blog",
  });

  return {
    props: {
      datas: datas.contents,
    },
  };
};

export default News;
