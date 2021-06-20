/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import type { GetStaticProps } from "next";
import type { VFC } from "react";
import { ArticleListView } from "src/components/articleListView";
import { Layout } from "src/components/layout";
import { client } from "src/libs/microcms";

const items = [
  { image: "/sea.jpg", title: "I love Sea!", id: 0 },
  { image: "/resort.jpg", title: "I want to live resort!", id: 1 },
  { image: "/snow.jpg", title: "Snow is WorldWide.", id: 2 },
  { image: "/sea.jpg", title: "I love Sea!", id: 4 },
  { image: "/resort.jpg", title: "I want to live resort!", id: 5 },
  { image: "/snow.jpg", title: "Snow is WorldWide.", id: 6 },
];

type Datas<T> = {
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
  images: string[];
};

const News: VFC<{ datas: MicroCMSContent[] }> = (props) => {
  return (
    <Layout>
      <ArticleListView items={props.datas} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const datas: Datas<MicroCMSContent> = await client.get({
    endpoint: "blog",
  });
  console.log(datas);

  return {
    props: {
      datas: datas.contents,
    },
  };
};

export default News;
