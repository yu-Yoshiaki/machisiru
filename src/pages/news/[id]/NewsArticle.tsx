/* eslint-disable @typescript-eslint/naming-convention */
import type { VFC } from "react";
import { Pan } from "src/Layout/Pan";
import type { NewsResponse } from "src/pages/news/types";

import { ContentsShare } from "../ContentsShare";
import { ImageCustomField } from "../microcms/ImageCustomField";
import { ParagraphCustomField } from "../microcms/ParagraphCustomField";

export const NewsArticle: VFC<NewsResponse> = (props) => {
  return (
    <>
      <Pan title={props.mainTitle} />
      <div className="px-2 md:px-0 pt-5 pb-10 md:mr-4 mb-7 bg-white">
        <h1 className="md:p-8 text-xl md:text-2xl font-bold text-center">{props.mainTitle}</h1>
        <p className="py-5 pr-5 text-right text-gray-600">{props.updatedAt}</p>

        {props.bodys.map((body) => {
          if (body.fieldId == "image")
            return <ImageCustomField fieldId={body.fieldId} image={body.image} alt={body.alt} />;
          if (body.fieldId == "paragraph")
            return (
              <ParagraphCustomField fieldId={body.fieldId} h2_title={body.h2_title} h2_content={body.h2_content} />
            );
        })}

        <ContentsShare title={props.mainTitle} url={`https://findnext.news/news/${props.id}`} size={50} />
      </div>
    </>
  );
};
