/* eslint-disable react/destructuring-assignment */
/* eslint-disable react-hooks/rules-of-hooks */
import type { GetStaticProps } from "next";
import type { CustomNextPage } from "next";
import { useSWRState } from "src/hooks/useSWRState";
import { Layout } from "src/Layout";
import { client } from "src/libs/microcms";
import { NewsTab } from "src/pages/news/component/NewsTab";
import type { NewsResponse } from "src/types/microcms";

export const getStaticProps: GetStaticProps = async () => {
  const datas: { contents: NewsResponse[] } = await client.get({
    endpoint: "blog",
  });

  return {
    props: {
      datas,
    },
    revalidate: 3,
  };
};

const Index: CustomNextPage<{
  datas: { contents: NewsResponse[] };
}> = (props) => {
  //一度、静的レンダリングしたデータをSWRでキャッシュ保存
  //他で使い回すため
  const [blog] = useSWRState("/microcms", props.datas.contents);

  return (
    <div className="flex flex-wrap justify-between md:justify-start items-start p-2 md:p-0">
      {blog ? (
        blog.map((blog: NewsResponse) => {
          return (
            <NewsTab
              key={blog.id}
              id={blog.id}
              updatedAt={blog.updatedAt ? blog.updatedAt.substring(0, 10) : "nothing"}
              mainTitle={blog.mainTitle}
              image={blog.mainImage ? blog.mainImage.image.url : "/torii.jpg"}
            />
          );
        })
      ) : (
        <h2>undefined</h2>
      )}
    </div>
  );
};

Index.getLayout = Layout;

export default Index;
