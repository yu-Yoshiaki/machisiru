import Image from "next/image";
import Link from "next/link";
import type { VFC } from "react";
import type { MicroCMSContent } from "src/types";
import useSWR from "swr";

export const BlogList: VFC = () => {
  const { data: blog, error } = useSWR<MicroCMSContent[]>("/api/microcms");

  if (error) return <div>error</div>;
  if (!blog && !error) return <div>isLoding</div>;
  if (blog && blog.length === 0) return <div>isEmpty</div>;

  return (
    <div className="flex flex-wrap justify-between md:justify-start items-start p-2 md:p-0">
      {blog ? (
        blog.map((blog) => {
          return (
            <article className="md:mr-4 mb-4 w-[49%] md:w-[30%] md:h-80 bg-white" key={blog.id}>
              <Link href={`/news/${blog.id}`}>
                <a>
                  <Image
                    src={"/torii.jpg"}
                    width={350}
                    height={300}
                    layout={"responsive"}
                    alt="No Image"
                    className="mx-auto"
                  />
                  <p className="pt-2 pl-3 text-xs text-left text-gray-600">{blog.updatedAt.substring(0, 10)}</p>
                  <h2 className="overflow-hidden p-3 md:h-14 text-xs font-bold overflow-ellipsis">{blog.mainTitle}</h2>
                </a>
              </Link>
            </article>
          );
        })
      ) : (
        <h2>undefined</h2>
      )}
    </div>
  );
};
