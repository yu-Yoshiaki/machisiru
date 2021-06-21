import Link from "next/link";
import type { VFC } from "react";
import { ArticleListTabView } from "src/components/articleListTabView";
import type { MicroCMSContent } from "src/pages";

export const ArticleListView: VFC<{ items: MicroCMSContent[] }> = (props) => {
  return (
    <div className="p-10 my-3">
      {props.items.map((item) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <Link href={`/news/${item.id}`}>
            <a>
              <ArticleListTabView image="/sea.jpg" title={item.mainTitle} />
            </a>
          </Link>
        );
      })}
    </div>
  );
};
