import Image from "next/image";
import Link from "next/link";
import type { VFC } from "react";
import type { NewsResponse } from "src/types/microcms";

export const Recommend: VFC<{ datas: NewsResponse[] }> = (props) => {
  return (
    <div>
      <h3 className="pl-4 text-xl font-bold">おすすめ</h3>
      <div className="grid grid-cols-2 gap-4 px-4">
        {props.datas.map((data) => {
          return (
            <article key={data.id} className="h-[240px] tracking-wide bg-white hover:bg-gray-200 rounded-lg shadow-sm">
              <Link href={`/article/${data.id}`}>
                <a>
                  <div>
                    <Image
                      src={data.mainImage?.image.url ?? "/torii.jpg"}
                      width={200}
                      height={150}
                      layout={"responsive"}
                      alt={data.mainImage?.alt ?? "No Image"}
                      className="rounded-t-lg"
                    />
                  </div>
                  <p className="pt-2 pl-3 text-xs text-left text-gray-600">{data.publishedAt?.substring(0, 10)}</p>
                  <h2 className="overflow-hidden px-3 text-sm font-bold text-ellipsis ">{data.mainTitle}</h2>
                </a>
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
};
