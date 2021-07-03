import Link from "next/link";
import type { VFC } from "react";
import { ArticleListTabView } from "src/components/articleListTabView";
import type { MicroCMSContent } from "src/pages";

export const ArticleListView: VFC<{ items: MicroCMSContent[] }> = (props) => {
  return (
    <div className="p-10 ">
      {props.items.map((item) => {
        const title = item.mainTitle;
        const topImageURL = item.images ? item.images[0].image.url : "/snow.jpg";
        return (
          // eslint-disable-next-line react/jsx-key
          <Link href={`/news/${item.id}`}>
            <a>
              <ArticleListTabView image={topImageURL} title={title} />
            </a>
          </Link>
        );
      })}
    </div>
  );
};
