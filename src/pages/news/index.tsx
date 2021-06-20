import type { VFC } from "react";
import { ArticleListView } from "src/components/articleListView";
import { Layout } from "src/components/layout";

const items = [
  { image: "/sea.jpg", title: "I love Sea!", id: 0 },
  { image: "/resort.jpg", title: "I want to live resort!", id: 1 },
  { image: "/snow.jpg", title: "Snow is WorldWide.", id: 2 },
  { image: "/sea.jpg", title: "I love Sea!", id: 4 },
  { image: "/resort.jpg", title: "I want to live resort!", id: 5 },
  { image: "/snow.jpg", title: "Snow is WorldWide.", id: 6 },
];

const News: VFC = () => {
  return (
    <Layout>
      <ArticleListView items={items} />
    </Layout>
  );
};

export default News;
