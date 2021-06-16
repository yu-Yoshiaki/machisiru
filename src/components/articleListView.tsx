import Link from "next/link";
import type { VFC } from "react";
import { ArticleListTabView } from "src/components/articleListTabView";

type Article = {
  image: string;
  title: string;
  id: number;
}[];

export const ArticleListView: VFC<{ items: Article }> = (props) => {
  return (
    <div className="my-3 mx-2">
      {props.items.map((item) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <Link href={`/news/${item.id}`}>
            <a className="">
              <ArticleListTabView image={item.image} title={item.title} />
            </a>
          </Link>
        );
      })}
    </div>
  );
};
