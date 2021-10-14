import type { GetStaticPaths, GetStaticProps } from "next";
import type { VFC } from "react";
import { Article } from "src/components/articles";
import { client } from "src/libs/microcms";
import type { MicroCMSContent } from "src/types";

const NewsDetail: VFC<{ datas: MicroCMSContent }> = (props) => {
  const author = props.datas.author ? props.datas.author : "Yoshiaki";
  const updatedAt = props.datas.updatedAt.substring(0, 10);

  return (
    <Article
      title={props.datas.mainTitle}
      bodys={props.datas.bodys}
      updatedAt={updatedAt}
      author={author}
      id={props.datas.id}
    />
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

  return { paths, fallback: "blocking" };
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
      notFound: true,
    };
  }
};

export default NewsDetail;
