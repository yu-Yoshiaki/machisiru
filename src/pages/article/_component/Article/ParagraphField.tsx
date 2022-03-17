/* eslint-disable @typescript-eslint/naming-convention */
import type { VFC } from "react";
import type { ParagraphCustomField } from "src/types/microcms";

export const ParagraphField: VFC<ParagraphCustomField> = (props) => {
  return (
    <div className="px-3 space-y-3 w-full">
      <p className="text-2xl font-bold text-justify break-words md:px-10 md:pt-4 ">{props.h2_title}</p>
      <p
        className="overflow-x-auto p-3 tracking-wide leading-7 text-justify break-words md:p-10"
        dangerouslySetInnerHTML={{ __html: props.h2_content }}
      ></p>
    </div>
  );
};
