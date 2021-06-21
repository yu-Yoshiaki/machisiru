/* eslint-disable tailwindcss/no-custom-classname */
import Image from "next/image";
import type { VFC } from "react";

type ArticleListTabView = {
  title: string;
  image: string;
};

export const ArticleListTabView: VFC<ArticleListTabView> = (props) => {
  return (
    <div className="md:inline-block relative pb-5 mx-5 mb-3 md:w-3/10 hover:bg-white">
      <Image src={props.image} width={500} height={300} className="rounded-md shadow-lg" alt="No Image" />
      {/* <h1 className="absolute top-1 left-2 text-lg text-white" id="title">
        <strong>サムネイルメッセージ</strong>
      </h1> */}
      <p className="text-lg font-bold truncate ">{props.title}</p>
      <ul id="tag" className="flex">
        <li className="mr-2">#海のある暮らし</li>
        <li className="mr-2">#海風</li>
        <li className="mr-2">#サーフィン</li>
      </ul>
    </div>
  );
};
