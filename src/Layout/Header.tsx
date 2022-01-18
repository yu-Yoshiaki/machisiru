/* eslint-disable tailwindcss/no-custom-classname */
import Link from "next/link";
import type { VFC } from "react";

import { Navigation } from "./Navigation";

export const Header: VFC = () => {
  return (
    <header className="py-3 h-20 bg-white">
      <h1 className="w-full text-3xl font-bold text-center">
        <Link href="/">
          <a>
            FIND <span className="text-red-500">NEXT</span>
          </a>
        </Link>
      </h1>
      <h2 className="md:p-0 px-2 pb-4 md:pb-0 w-full text-sm md:text-base text-center">ー新しい次が見つかるー</h2>

      <Navigation />
    </header>
  );
};
