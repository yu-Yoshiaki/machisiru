/* eslint-disable tailwindcss/no-custom-classname */
import Link from "next/link";
import type { VFC } from "react";

export const Pan: VFC<{ title: string }> = (props) => {
  return (
    <div className="md:col-span-3 space-x-2 md:space-x-4 bg-white">
      <nav className="flex overflow-scroll md:overflow-auto md:py-4 px-2 md:px-4 mx-auto w-[95%] md:w-auto text-sm md:text-base whitespace-nowrap bg-gray-50 md:bg-white scrollbar-hide">
        <Link href="/">
          <a className="font-bold">HOME</a>
        </Link>
        <p className="md:before:mr-2 before:content-['▶︎']">{props.title}</p>
      </nav>
    </div>
  );
};
