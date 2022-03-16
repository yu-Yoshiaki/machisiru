/* eslint-disable tailwindcss/no-custom-classname */
import Link from "next/link";
import type { VFC } from "react";

export const Header: VFC = () => {
  return (
    <header className="fixed top-0 z-20 w-full h-[100px] bg-white">
      <h1 className="flex items-center pl-8 h-full font-bold">
        <Link href="/">
          <a className="text-3xl">
            FIND<span className="text-red-500">NEXT</span>
          </a>
        </Link>
      </h1>
    </header>
  );
};
