import Image from "next/image";
import type { VFC } from "react";
import type { MicroCMSCustomField, MicroCMSField } from "src/pages/news/types";

//カスタムフィールド「画像」の型
type ImageCustomField = MicroCMSCustomField<"image", { image: MicroCMSField["image"]; alt: string }>;

export const ImageCustomField: VFC<ImageCustomField> = (props) => {
  return (
    <div className="w-full">
      <Image src={props.image.url} width={600} height={600} layout={"responsive"} alt={props.alt} className="mx-auto" />
    </div>
  );
};
