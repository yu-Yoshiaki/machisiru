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
    <div className="col-span-2">
      <div className="pt-5 pb-10 bg-white ">
        <h1 className="p-8 text-2xl font-bold text-center">{props.title}</h1>
        <h3 className="py-5 pr-5 text-right text-gray-600">{props.updatedAt}</h3>

        <Image
          src={props.image}
          width={600}
          height={350}
          layout={"responsive"}
          alt="No Image"
          className="mx-auto bg-black"
        />

        <p className="p-10" dangerouslySetInnerHTML={{ __html: props.body }}></p>
      </div>
    </div>
  );
};
