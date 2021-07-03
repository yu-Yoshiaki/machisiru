/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import type { ReactNode, VFC } from "react";

type Article = {
  image: string;
  width: number;
  title?: string;
  body: string;
  author: string;
  updatedAt: string;
};

export const Article: VFC<Article> = (props) => {
  return (
    <>
      <div className="text-center ">
        <Image src={props.image} width={props.width} height={700} />
      </div>
      <div className="px-5 pb-10 mx-auto mt-3 md:w-2/3 bg-white border-r border-l">
        <h1 className="pt-10 my-4 text-xl text-center" id="title">
          {props.title}
        </h1>

        <div className="flex justify-between my-10 md:mx-20 text-sm text-gray-500">
          <p>{props.author}</p>
          <p>{props.updatedAt}</p>
        </div>

        <div>
          <p
            className="my-3 md:mx-20 text-sm tracking-wide text-justify whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: props.body }}
          ></p>
        </div>
      </div>
    </>
  );
};
