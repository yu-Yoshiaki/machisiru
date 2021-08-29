import Image from "next/image";
import Link from "next/link";
import type { VFC } from "react";
import type { MicroCMSContent } from "src/pages";

export const Topic: VFC<{ items: MicroCMSContent[] }> = (props) => {
  return (
    <div className="col-span-3">
      <div className="grid grid-cols-3 gap-x-10">
        {props.items.map((item) => {
          const topImageURL = "/resort.jpg"; //item.images ? item.images[0].image.url :
          // eslint-disable-next-line react/jsx-key
          return (
            // eslint-disable-next-line react/jsx-key
            <div className="pt-5 pb-5 mb-10 bg-white rounded-md">
              <Image src={topImageURL} width={600} height={350} alt="No Image" className="" />
              <p className="p-8 text-lg font-bold text-center">{item.mainTitle}</p>
              <Link href={`/news/${item.id}`}>
                <a className="block content-center p-3 mx-auto w-1/3 text-center ring-1 hover:ring-2 hover:ring-blue-400">
                  READ MORE
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
