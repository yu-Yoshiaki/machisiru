/* eslint-disable react/destructuring-assignment */
/* eslint-disable react-hooks/rules-of-hooks */
import type { GetStaticProps } from "next";
import type { CustomNextPage } from "next";
import { Layout } from "src/Layout";
import { client } from "src/libs/microcms";
import { BlogList } from "src/pages/news/BlogList";
import type { MicroCMSContent } from "src/types";
import { SWRConfig } from "swr";

const MicroCMS_APIRoute = "/api/microcms";

export const getStaticProps: GetStaticProps = async () => {
  const datas: { contents: MicroCMSContent[] } = await client.get({
    endpoint: "blog",
  });

  return {
    props: {
      fallback: {
        [MicroCMS_APIRoute]: datas.contents,
      },
    },
    revalidate: 3,
  };
};

const Index: CustomNextPage = ({ fallback }: any) => {
  return (
    <SWRConfig value={{ fallback }}>
      <BlogList />
    </SWRConfig>
  );
};

Index.getLayout = Layout;

export default Index;
