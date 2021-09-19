/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import type { GetStaticProps } from "next";
import Head from "next/head";
import type { VFC } from "react";
import { ArticleList } from "src/components/articleList";
import { Layout } from "src/components/layout";
import { Profile } from "src/components/profile";
//import { Topic } from "src/components/topic";
import { client } from "src/libs/microcms";

//MicroCMS側の各フィールドに割り当てられた型
type MicroCMSField = {
  text: string;
  textArea: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
};

//カスタムフィールド型
type MicroCMSCustomField<T, U> = {
  fieldId: T;
} & Partial<U>;

//各カスタムフィールドの型 --------------------------------------------------------------------------------------

type ImageInSlide = MicroCMSCustomField<"imageInSlide", { image: MicroCMSField["image"]; imageInfo: string }>;
type ImageSlide = MicroCMSCustomField<"imageSlide", ImageInSlide[]>;
type RichText = MicroCMSCustomField<"richText", { text: string }>;

//カスタムフィールド --------------------------------------------------------------------------------------

export type MicroCMSContent = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  mainTitle: string;
  author?: string;
  bodys: [];
};

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
