/* eslint-disable tailwindcss/no-custom-classname */
import Link from "next/link";
import type { VFC } from "react";

export const Header: VFC = () => {
  return (
    <header className="fixed top-0 z-20 bg-white w-full h-[100px]">
      <h1 className="font-bold flex items-center h-full pl-8">
        <Link href="/">
          <a className="text-3xl">
            FIND<span className="text-red-500">NEXT</span>
          </a>
        </Link>
      </h1>
    </header>
  );
};
