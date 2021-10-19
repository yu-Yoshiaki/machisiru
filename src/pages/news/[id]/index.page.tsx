/* eslint-disable no-console */
import type { GetStaticPaths, GetStaticProps } from "next";
import type { CustomNextPage } from "next";
import Head from "next/head";
import { Layout } from "src/Layout";
import { client } from "src/libs/microcms";
import type { NewsResponse } from "src/pages/news/types";

import { NewsArticle } from "./NewsArticle";
/* 
MicroCMS使用
*/

const NewsDetail: CustomNextPage<{ datas: NewsResponse }> = (props) => {
  const datas = props.datas;
  const updatedAt = datas.updatedAt ? datas.updatedAt.substring(0, 10) : "nothing";

  console.log(props, " props in [id]");

  return (
    <div>
      <Head>
        <title>{datas.mainTitle}</title>
      </Head>

      <NewsArticle
        mainTitle={datas.mainTitle}
        bodys={datas.bodys}
        updatedAt={updatedAt}
        author={datas.author ?? "Yoshiaki"}
        id={datas.id}
      />
    </div>
  );
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
