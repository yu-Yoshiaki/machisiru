/* eslint-disable @typescript-eslint/naming-convention */
import type { VFC } from "react";
import type { MicroCMSCustomField, MicroCMSField } from "src/types/microcms";

type ParagraphCustomField = MicroCMSCustomField<
  "paragraph",
  { h2_title: MicroCMSField["textField"]; h2_content: MicroCMSField["richEditor"] }
>;

export const ParagraphCustomField: VFC<ParagraphCustomField> = (props) => {
  return (
    <div className="px-3 space-y-3 w-full">
      <p className="md:px-10 md:pt-4 text-2xl font-bold text-justify break-words ">{props.h2_title}</p>
      <p
        className="overflow-x-auto p-3 md:p-10 tracking-wide leading-7 text-justify break-words"
        dangerouslySetInnerHTML={{ __html: props.h2_content }}
      ></p>
    </div>
  );
};
