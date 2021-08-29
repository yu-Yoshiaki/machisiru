import type { VFC } from "react";
import { ArticleListTabView } from "src/components/articleListTabView";
import type { MicroCMSContent } from "src/pages";

export const ArticleListView: VFC<{ items: MicroCMSContent[] }> = (props) => {
  return (
    <div className="col-span-2">
      {props.items.map((item) => {
        const topImageURL = "/snow.jpg"; //item.images ? item.images[0].image.url :
        // eslint-disable-next-line react/jsx-key
        return <ArticleListTabView image={topImageURL} title={item.mainTitle} url={item.id} />;
      })}
    </div>
  );
};
