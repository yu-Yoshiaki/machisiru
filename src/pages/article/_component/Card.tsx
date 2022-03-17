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
    <article className="min-h-[280px] tracking-wide bg-white hover:bg-gray-200 rounded-lg shadow-sm">
      <Link href={`/article/${props.id}`}>
        <a>
          <div>
            <Image
              src={props.image}
              width={200}
              height={150}
              layout={"responsive"}
              alt="No Image"
              className="rounded-t-lg"
            />
          </div>
          <p className="pt-2 pl-3 text-xs text-left text-gray-600">{props.updatedAt.substring(0, 10)}</p>
          <h2 className="overflow-hidden px-3 font-bold text-ellipsis ">{props.mainTitle}</h2>
        </a>
      </Link>
    </article>
  );
};
