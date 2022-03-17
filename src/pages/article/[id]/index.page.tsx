/* eslint-disable no-console */
import type { GetStaticPaths, GetStaticProps } from "next";
import type { CustomNextPage } from "next";
import { Layout } from "src/layout";
import { client } from "src/libs/microcms";
import type { NewsResponse } from "src/types/microcms";

import { ArticleLayout } from "./Layout";
/* 
MicroCMS使用
*/

const NewsDetail: CustomNextPage<{ datas: NewsResponse }> = (props) => {
  return <ArticleLayout datas={props.datas} />;
};

//Dynamic Routing SSG
export const getStaticPaths: GetStaticPaths = async () => {
  const datas: { contents: NewsResponse[] } = await client.get({
    endpoint: "blog",
  });

  const paths = datas.contents.map((post) => {
    return {
      params: { id: post.id },
    };
  });

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params !== undefined) {
    const datas: NewsResponse = await client.get({
      endpoint: `blog/${params.id}`,
    });

    return {
      props: {
        datas,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

NewsDetail.getLayout = Layout;

export default NewsDetail;
