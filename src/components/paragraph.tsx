/* eslint-disable @typescript-eslint/naming-convention */
import type { VFC } from "react";
import type { MicroCMSField } from "src/components/types";

export const Pragraph: VFC<{ title: MicroCMSField["richEditor"]; content: MicroCMSField["richEditor"] }> = (props) => {
  return (
    <div>
      <h2 className="text-lg md:text-xl font-bold text-center bg-red-100">【{props.title}】</h2>
      <p className="p-1 md:p-10" dangerouslySetInnerHTML={{ __html: props.content }}></p>
    </div>
  );
};
