import Image from "next/image";
import Link from "next/link";
import type { VFC } from "react";

type CardProps = {
  image: string;
  updatedAt: string;
  mainTitle: string;
  id: string;
};

export const Card: VFC<CardProps> = (props) => {
  return (
    <article className="pb-7 tracking-wide bg-white hover:bg-gray-200 rounded-md shadow-sm w-[250px]">
      <Link href={`/news/${props.id}`}>
        <a>
          <div className="p-3">
            <Image
              src={props.image}
              width={350}
              height={300}
              layout={"responsive"}
              alt="No Image"
              className="mx-auto"
            />
          </div>
          <p className="pt-2 pl-3 text-xs text-left text-gray-600">{props.updatedAt.substring(0, 10)}</p>
          <h2 className="overflow-hidden p-3 md:h-14 font-bold overflow-ellipsis ">{props.mainTitle}</h2>
        </a>
      </Link>
    </article>
  );
};
