import Image from "next/image";
import type { VFC } from "react";
import type { MicroCMSField } from "src/types/microcms";

//カスタムフィールド「画像」の型
type McImage = {
  image: MicroCMSField["image"];
  alt: string;
};

export const McImage: VFC<McImage> = (props) => {
  return (
    <div className="w-full ">
      <Image src={props.image.url} width={600} height={600} layout={"responsive"} alt={props.alt} className="mx-auto" />
    </div>
  );
};
