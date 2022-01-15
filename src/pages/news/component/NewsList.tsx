import type { VFC } from "react";
import { useSWRState } from "src/hooks/useSWRState";
import type { NewsResponse } from "src/types/microcms";

import { NewsTab } from "./NewsTab";

export const NewsList: VFC = () => {
  const [blog] = useSWRState("/microcms");

  // eslint-disable-next-line no-console
  console.log(blog, " props in [List]");

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
