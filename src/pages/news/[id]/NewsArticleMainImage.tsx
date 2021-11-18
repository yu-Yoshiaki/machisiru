import Image from "next/image";
import type { VFC } from "react";

export const NewsArticleMainImage: VFC<{ mainImage: any | undefined }> = (props) => {
  const mainImage = props.mainImage;
  return (
    <div>
      {mainImage && (
        <div className="w-full">
          <Image
            src={mainImage.image.url}
            width={600}
            height={600}
            layout={"responsive"}
            alt={mainImage.alt}
            className="mx-auto"
          />
        </div>
      )}
    </div>
  );
};
