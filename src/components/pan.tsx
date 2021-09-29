/* eslint-disable tailwindcss/no-custom-classname */
import Link from "next/link";
import type { VFC } from "react";

export const Pan: VFC<{ title: string }> = (props) => {
  return (
    <nav className="flex overflow-scroll md:overflow-auto md:col-span-3 md:py-4 px-2 md:px-4 space-x-2 md:space-x-4 h-5 text-sm md:text-base bg-white">
      <Link href="/">
        <a className="font-bold">HOME</a>
      </Link>
      <p className="md:before:mr-2 before:content-['▶︎']">{props.title}</p>
    </nav>
  );
};
