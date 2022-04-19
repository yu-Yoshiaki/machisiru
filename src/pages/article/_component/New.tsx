import Image from "next/image";
import Link from "next/link";
import type { VFC } from "react";
import type { NewsResponse } from "src/types/microcms";

export const New: VFC<{ datas: NewsResponse[] }> = (props) => {
  return (
    <div>
      <h3 className="pl-4 text-xl font-bold">最新記事</h3>
      <div className="grid grid-cols-1 gap-4 px-4">
        {props.datas.map((data) => {
          return (
            <article key={data.id} className="py-4 tracking-wide bg-white hover:bg-gray-200 rounded-lg shadow-sm">
              <Link href={`/article/${data.id}`}>
                <a>
                  <div className="flex">
                    <div className="w-[50%] h-[100px]">
                      <Image
                        src={data.mainImage?.image.url ?? "/torii.jpg"}
                        width={500}
                        height={300}
                        alt={data.mainImage?.alt ?? "No Image"}
                        objectFit="contain"
                        className="rounded-lg"
                      />
                    </div>
                    <div>
                      <h2 className="overflow-hidden px-3 text-sm font-bold text-ellipsis">{data.mainTitle}</h2>
                      <p className="pt-2 pl-3 text-xs text-left text-blue-600">
                        {data.tag.length > 0 ? data.tag[0].name : ""}
                      </p>
                    </div>
                  </div>
                </a>
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
};
