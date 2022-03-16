/* eslint-disable tailwindcss/no-custom-classname */
import Link from "next/link";
import type { VFC } from "react";

export const Header: VFC = () => {
  return (
    <header className="fixed top-0 z-20 w-full h-[90px] bg-white border-b">
      <h1 className="flex items-center pl-8 h-full font-bold">
        <Link href="/">
          <a className="text-xl md:text-3xl text-red-500">MACHISIRU /「こんな街に住みたい」が見つかるメディア</a>
        </Link>
      </h1>
    </header>
  );
};
