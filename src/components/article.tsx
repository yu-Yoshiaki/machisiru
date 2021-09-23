/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import type { VFC } from "react";
import { ContentsStare } from "src/components/contentsShare";

type Article = {
  image: string;
  title: string;
  bodys: { fieldId: string; text: string }[];
  author: string;
  updatedAt: string;
  id: string;
};

export const Article: VFC<Article> = (props) => {
  return (
    <div className="px-2 md:px-0 pt-5 pb-10 md:mr-4 mb-7 bg-white">
      <h1 className="md:p-8 text-xl md:text-2xl font-bold text-center">{props.title}</h1>
      <p className="py-5 pr-5 text-right text-gray-600">{props.updatedAt}</p>
      <Image
        src={props.image}
        width={600}
        height={450}
        layout={"responsive"}
        alt="No Image"
        className="mx-auto bg-black"
      />
      {props.bodys.map(({ text }) => {
        // eslint-disable-next-line react/jsx-key
        return <p className="p-1 md:p-10" dangerouslySetInnerHTML={{ __html: text }}></p>;
      })}
      <ContentsStare title={props.title} url={`https://findnext.news/news/${props.id}`} size={50} />
    </div>
  );
};
