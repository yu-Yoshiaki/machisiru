/* eslint-disable react/destructuring-assignment */
/* eslint-disable react-hooks/rules-of-hooks */
import type { GetStaticProps } from "next";
import type { CustomNextPage } from "next";
import Image from "next/image";
import { useSWRState } from "src/hooks/useSWRState";
import { Layout } from "src/layout";
import { client } from "src/libs/microcms";
import { New } from "src/pages/article/_component/new";
import { Recommend } from "src/pages/article/_component/Recommend";
import type { NewsResponse } from "src/types/microcms";

export const getStaticProps: GetStaticProps = async () => {
  const datas: { contents: NewsResponse[] } = await client.get({
    endpoint: "blog",
  });

  return {
    props: {
      datas,
    },
    revalidate: 5,
  };
};

const Index: CustomNextPage<{
  datas: { contents: NewsResponse[] };
}> = (props) => {
  //一度、静的レンダリングしたデータをSWRでキャッシュ保存
  //他で使い回すため
  const [blog]: NewsResponse[][] = useSWRState("/microcms", props.datas.contents);

  return (
    <div className="h-full">
      <div className="relative">
        <Image src={"/torii.jpg"} alt={"サービストップ画像"} width={1000} height={800} />
        <p className="absolute top-[50%] text-xl text-white">僕たちはまだ「日本」を知らない。</p>
      </div>
      <h2 className="py-[40px] px-4 text-2xl font-bold">日本の魅力、文化を発信し「暮らし」をアップデートする</h2>

      <div className="space-y-12">
        {blog ? <Recommend datas={blog} /> : <h2>undefined</h2>}
        {blog ? <New datas={blog} /> : <h2>undefined</h2>}
      </div>
    </div>
  );
};

Index.getLayout = Layout;

export default Index;
