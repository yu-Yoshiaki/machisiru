import Image from "next/image";
import type { VFC } from "react";
import type { ImageCustomField } from "src/types/microcms";

export const ImageField: VFC<ImageCustomField> = (props) => {
  return (
    <div className="w-full">
      <Image src={props.image.url} width={400} height={400} layout={"responsive"} alt={props.alt} className="mx-auto" />
    </div>
  );
};
