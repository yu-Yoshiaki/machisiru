/* eslint-disable @typescript-eslint/naming-convention */
import type { VFC } from "react";
import type { MicroCMSCustomField, MicroCMSField } from "src/pages/news/types";

type ParagraphCustomField = MicroCMSCustomField<
  "paragraph",
  { h2_title: MicroCMSField["textField"]; h2_content: MicroCMSField["richEditor"] }
>;

export const ParagraphCustomField: VFC<ParagraphCustomField> = (props) => {
  return (
    <div>
      <h2 className="text-lg md:text-xl font-bold text-center bg-red-100">{props.h2_title}</h2>
      <p className="p-1 md:p-10" dangerouslySetInnerHTML={{ __html: props.h2_content }}></p>
    </div>
  );
};
