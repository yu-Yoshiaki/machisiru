/* eslint-disable tailwindcss/no-custom-classname */
import Link from "next/link";
import type { VFC } from "react";

export const Pan: VFC<{ title: string }> = (props) => {
  return (
    <div className="md:col-span-3 space-x-2 md:space-x-4 ">
      <nav className="flex overflow-scroll md:overflow-visible md:py-4 px-2 md:px-4 w-[95%] text-sm md:text-base whitespace-nowrap scrollbar-hide">
        <Link href="/">
          <a className="font-bold">HOME</a>
        </Link>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
        </svg>
        <p className="md:before:mr-2">{props.title}</p>
      </nav>
    </div>
  );
};
