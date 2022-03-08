/* eslint-disable no-console */
import type { GetStaticPaths, GetStaticProps } from "next";
import type { CustomNextPage } from "next";
import { Layout } from "src/Layout";
import { client } from "src/libs/microcms";
import type { NewsResponse } from "src/types/microcms";
import { Summer } from "src/pages/news/layout/Summer";
import { Winter } from "src/pages/news/layout/Winter";

import { NewsArticleLayout } from "./Layout";
/* 
MicroCMS使用
*/

const NewsDetail: CustomNextPage<{ datas: NewsResponse }> = (props) => {
  const datas = props.datas;

  return (
    <div>
      {datas ? (
        <div>
          {datas.season === "冬" ? (
            <Winter>
              <div className="bg-white ">
                <NewsArticleLayout
                  mainTitle={datas.mainTitle}
                  mainImage={datas.mainImage}
                  bodys={datas.bodys}
                  updatedAt={datas.updatedAt ? datas.updatedAt.substring(0, 10) : "nothing"}
                  id={datas.id}
                />
              </div>
            </Winter>
          ) : datas.season === "夏" ? (
            <Summer>
              <div className="bg-white">
                <NewsArticleLayout
                  mainTitle={datas.mainTitle}
                  mainImage={datas.mainImage}
                  bodys={datas.bodys}
                  updatedAt={datas.updatedAt ? datas.updatedAt.substring(0, 10) : "nothing"}
                  id={datas.id}
                />
              </div>
            </Summer>
          ) : (
            <NewsArticleLayout
              mainTitle={datas.mainTitle}
              mainImage={datas.mainImage}
              bodys={datas.bodys}
              updatedAt={datas.updatedAt ? datas.updatedAt.substring(0, 10) : "nothing"}
              id={datas.id}
            />
          )}
        </div>
      ) : (
        <div>Loding...</div>
      )}
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
