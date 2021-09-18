import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import type { VFC } from "react";
import { Article } from "src/components/article";
import { Layout } from "src/components/layout";
import { client } from "src/libs/microcms";
import type { MicroCMSContent } from "src/pages";

const NewsDetail: VFC<{ datas: MicroCMSContent }> = (props) => {
  const author = props.datas.author ? props.datas.author : "No Name";
  const updatedAt = props.datas.updatedAt.substring(0, 10);
  // const Images = props.datas.bodys.map((body) => {
  //   return body?.fieldId === "imageSlide";
  // });

  //console.log("------", Images);

  return (
    <>
      <Head>
        <title>{props.datas.mainTitle}</title>
      </Head>

      <Layout>
        <Article
          image="/sea.jpg"
          title={props.datas.mainTitle}
          bodys={props.datas.bodys}
          updatedAt={updatedAt}
          author={author}
        />
      </Layout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const datas: { contents: MicroCMSContent[] } = await client.get({
    endpoint: "blog",
  });

  const paths = datas.contents.map((post) => {
    return {
      params: { id: post.id },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params !== undefined) {
    const datas: MicroCMSContent = await client.get({
      endpoint: `blog/${params.id}`,
    });

    return {
      props: {
        datas: datas,
      },
    };
  } else {
    return {
      props: {
        datas: "No Data",
      },
    };
  }
};

export default NewsDetail;
