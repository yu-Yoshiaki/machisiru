import type { VFC } from "react";
import type { NewsResponse } from "src/pages/news/types";
import useSWR from "swr";

import { NewsTab } from "./NewsTab";

export const NewsList: VFC = () => {
  const { data: blog, error } = useSWR<NewsResponse[]>("/api/microcms");

  if (error) return <div>error</div>;
  if (!blog && !error) return <div>isLoding</div>;
  if (blog && blog.length === 0) return <div>isEmpty</div>;

  return (
    <div className="flex flex-wrap justify-between md:justify-start items-start p-2 md:p-0">
      {blog ? (
        blog.map((blog) => {
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
