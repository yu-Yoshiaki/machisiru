/* eslint-disable tailwindcss/no-custom-classname */
import Image from "next/image";
import Link from "next/link";
import type { VFC } from "react";

type ArticleListTabView = {
  title: string;
  image: string;
  url: string;
};

export const ArticleTab: VFC<ArticleListTabView> = (props) => {
  return (
    <div className="md:mr-4 mb-4 w-[45%] md:w-[30%] md:h-80 bg-white">
      <Link href={`/news/${props.url}`}>
        <a>
          <Image src={props.image} width={350} height={300} layout={"responsive"} alt="No Image" className="mx-auto" />
          <h3 className="pt-2 pl-3 text-sm text-left text-gray-600">2021-08-29</h3>
          <h1 className="py-2 px-3 font-bold truncate">{props.title}</h1>
        </a>
      </Link>
    </div>
  );
};
