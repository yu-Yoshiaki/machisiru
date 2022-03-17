/* eslint-disable @typescript-eslint/naming-convention */
import type { VFC } from "react";
import { ImageField } from "src/pages/article/_component/Article/ImageField";
import { ParagraphField } from "src/pages/article/_component/Article/ParagraphField";
import { SpeechBubbleField } from "src/pages/article/_component/Article/SpeechBubble";
import type { NewsResponse } from "src/types/microcms";

export const Main: VFC<{ bodys: NewsResponse["bodys"] }> = (props) => {
  return (
    <div className="space-y-3">
      {props.bodys.map((body) => {
        if (body.fieldId === "image") {
          return <ImageField key={body.image.url} image={body} />;
        }
        if (body.fieldId === "paragraph") {
          return <ParagraphField key={body.h2_title} paragraph={body} />;
        }
        if (body.fieldId === "speechBubble") {
          return <SpeechBubbleField key={body.speechBody[0].speechText} bubble={body} />;
        }
      })}
    </div>
  );
};
