import Image from "next/image";
import type { VFC } from "react";

export const MainImage: VFC<{ mainImage: any | undefined }> = (props) => {
  const mainImage = props.mainImage;
  return (
    <div>
      {mainImage && (
        <div className="p-5 w-full">
          <Image
            src={mainImage.image.url}
            width={400}
            height={400}
            layout={"responsive"}
            alt={mainImage.alt}
            className="mx-auto"
          />
        </div>
      )}
    </div>
  );
};
