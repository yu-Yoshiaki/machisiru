/* eslint-disable react/destructuring-assignment */
/* eslint-disable react-hooks/rules-of-hooks */
import type { GetStaticProps } from "next";
import type { CustomNextPage } from "next";
import { useSWRState } from "src/hooks/useSWRState";
import { Layout } from "src/layout";
import { client } from "src/libs/microcms";
import { Card } from "src/pages/news/component/Card";
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
    <div className="h-full">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-x-4 gap-y-4">
        {blog ? (
          blog.map((blog: NewsResponse) => {
            return (
              <Card
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
    </div>
  );
};

Index.getLayout = Layout;

export default Index;
