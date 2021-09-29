import Image from "next/image";
import Link from "next/link";
import type { VFC } from "react";

type ArticleListTabView = {
  title: string;
  image: string;
  url: string;
  updatedAt: string;
};

export const ArticleTab: VFC<ArticleListTabView> = (props) => {
  const updatedAt = props.updatedAt.substring(0, 10);

  return (
    <article className="md:mr-4 mb-4 w-[49%] md:w-[30%] md:h-80 bg-white">
      <Link href={`/news/${props.url}`}>
        <a>
          <Image src={props.image} width={350} height={300} layout={"responsive"} alt="No Image" className="mx-auto" />
          <p className="pt-2 pl-3 text-xs text-left text-gray-600">{updatedAt}</p>
          <h2 className="overflow-hidden p-3 md:h-14 text-xs font-bold overflow-ellipsis">{props.title}</h2>
        </a>
      </Link>
    </article>
  );
};
