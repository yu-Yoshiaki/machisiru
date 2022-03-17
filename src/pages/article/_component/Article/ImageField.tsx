import Image from "next/image";
import type { VFC } from "react";
import type { ImageCustomField } from "src/types/microcms";

export const ImageField: VFC<{ image: ImageCustomField }> = (props) => {
  return (
    <div className="w-full">
      <Image
        src={props.image.image.url}
        width={400}
        height={400}
        layout={"responsive"}
        alt={props.image.alt}
        className="mx-auto"
      />
    </div>
  );
};
