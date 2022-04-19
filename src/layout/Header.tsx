/* eslint-disable tailwindcss/no-custom-classname */
import Link from "next/link";
import type { VFC } from "react";

export const Header: VFC = () => {
  return (
    <header className="fixed top-0 z-20 h-[90px] w-full">
      <h1 className="flex items-center pl-4 h-full font-bold">
        <Link href="/">
          <a className="text-xl md:text-3xl text-gray-600">MACHISIRU</a>
        </Link>
      </h1>
    </header>
  );
};
