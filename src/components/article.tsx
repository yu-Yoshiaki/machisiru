/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import type { ReactNode, VFC } from "react";

type Article = {
  children: ReactNode;
  image: string;
  width: number;
};

export const Article: VFC<Article> = (props) => {
  return (
    <>
      <Image src={props.image} width={props.width} height={600} />

      <div className="mx-auto mt-3 mb-10 md:w-2/3">
        <h1 className="text-lg" id="title">
          記事タイトル
        </h1>
        <div className="text-lg">{props.children}</div>
      </div>
    </>
  );
};
