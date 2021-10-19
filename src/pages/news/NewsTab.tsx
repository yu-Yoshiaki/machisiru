import Image from "next/image";
import Link from "next/link";
import type { VFC } from "react";

type Props = {
  key: string;
  image: string;
  updatedAt: string;
  mainTitle: string;
};

export const NewsTab: VFC<Props> = (props) => {
  return (
    <article className="md:mr-4 mb-4 w-[49%] md:w-[30%] md:h-80 bg-white">
      <Link href={`/news/${props.key}`}>
        <a>
          <Image src={props.image} width={350} height={300} layout={"responsive"} alt="No Image" className="mx-auto" />
          <p className="pt-2 pl-3 text-xs text-left text-gray-600">{props.updatedAt.substring(0, 10)}</p>
          <h2 className="overflow-hidden p-3 md:h-14 text-xs font-bold overflow-ellipsis">{props.mainTitle}</h2>
        </a>
      </Link>
    </article>
  );
};
