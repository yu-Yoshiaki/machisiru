/* eslint-disable @typescript-eslint/naming-convention */
import type { VFC } from "react";
import { ContentsShare } from "src/components/contentsShare";
import { McImage } from "src/components/mc_image";
import { Pragraph } from "src/components/paragraph";
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
    htmlField: MicroCMSField["textArea"];
    h2_title: MicroCMSField["text"];
    h2_content: MicroCMSField["textArea"];
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
        ) : body.fieldId == "image" ? (
          <McImage image={body.image} alt={body.alt} />
        ) : (
          body.fieldId == "paragraph" && <Pragraph title={body.h2_title} content={body.h2_content} />
        );
      })}
      <ContentsShare title={props.bodys[0].text} url={`https://findnext.news/news/${props.id}`} size={50} />
    </div>
  );
};
