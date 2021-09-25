/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type McCustomImage from "next/image";
import type { VFC } from "react";
import { ContentsShare } from "src/components/contentsShare";
import { McImage } from "src/components/mc_image";
import { RichText } from "src/components/richtext";
import type { MicroCMSField } from "src/components/types";

type Article = {
  title: string;
  author: string;
  updatedAt: string;
  id: string;
  bodys: {
    fieldId: string;
    text: MicroCMSField["richEditor"];
    image: MicroCMSField["image"];
    alt: MicroCMSField["text"];
  }[];
};

export const Article: VFC<Article> = (props) => {
  return (
    <div className="px-2 md:px-0 pt-5 pb-10 md:mr-4 mb-7 bg-white">
      <h1 className="md:p-8 text-xl md:text-2xl font-bold text-center">{props.title}</h1>
      <p className="py-5 pr-5 text-right text-gray-600">{props.updatedAt}</p>

      {props.bodys.map((body) => {
        return body.fieldId == "richText" ? (
          <RichText text={body.text} />
        ) : (
          body.fieldId == "image" && <McImage image={body.image} alt={body.alt} />
        );
      })}
      <ContentsShare title={props.title} url={`https://findnext.news/news/${props.id}`} size={50} />
    </div>
  );
};
