/* eslint-disable @typescript-eslint/naming-convention */
import type { VFC } from "react";
import { ImageField } from "src/pages/article/_component/Article/ImageField";
import { ParagraphField } from "src/pages/article/_component/Article/ParagraphField";
import type { NewsResponse } from "src/types/microcms";

export const Main: VFC<{ bodys: NewsResponse["bodys"] }> = (props) => {
  return (
    <div className="space-y-3">
      {props.bodys.map((body) => {
        if (body.fieldId === "image")
          return <ImageField key={body.alt} fieldId={body.fieldId} image={body.image} alt={body.alt} />;
        if (body.fieldId === "paragraph") {
          return (
            <ParagraphField
              key={body.h2_title}
              fieldId={body.fieldId}
              h2_title={body.h2_title}
              h2_content={body.h2_content}
            />
          );
        }
      })}
    </div>
  );
};
