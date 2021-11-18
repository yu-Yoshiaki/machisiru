/* eslint-disable @typescript-eslint/naming-convention */
import type { VFC } from "react";
import { ImageCustomField } from "src/pages/news/microcms/ImageCustomField";
import { ParagraphCustomField } from "src/pages/news/microcms/ParagraphCustomField";
import type { MicroCMSCustomField } from "src/pages/news/types";

export const NewsArticleMain: VFC<{
  bodys: (
    | MicroCMSCustomField<
        "image",
        {
          image: {
            url: string;
            height: number;
            width: number;
          };
          alt: string;
        }
      >
    | MicroCMSCustomField<
        "paragraph",
        {
          h2_title: string;
          h2_content: string;
        }
      >
  )[];
}> = (props) => {
  return (
    <div>
      {props.bodys.map((body) => {
        if (body.fieldId === "image")
          return <ImageCustomField fieldId={body.fieldId} image={body.image} alt={body.alt} />;
        if (body.fieldId === "paragraph")
          return <ParagraphCustomField fieldId={body.fieldId} h2_title={body.h2_title} h2_content={body.h2_content} />;
      })}
    </div>
  );
};
