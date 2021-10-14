/* eslint-disable @typescript-eslint/naming-convention */
import type { VFC } from "react";
import type { MicroCMSField } from "src/types/microcms";

export const RichText: VFC<{ text: MicroCMSField["richEditor"] }> = (props) => {
  return (
    <div>
      <p className="p-1 md:p-10" dangerouslySetInnerHTML={{ __html: props.text }}></p>
      <br />
    </div>
  );
};
