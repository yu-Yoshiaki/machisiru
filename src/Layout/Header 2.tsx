/* eslint-disable tailwindcss/no-custom-classname */
import Link from "next/link";
import type { VFC } from "react";

const items = [
  { href: "/", label: "HOME" },
  // { href: null, label: "TECH" },
  // { href: null, label: "MEDICAL" },
  // { href: null, label: "SPORT" },
  // { href: null, label: "CONTACT" },
  // { href: "/shopify", label: "SHOP" },
  { href: "/about", label: "About" },
];

export const Header: VFC = () => {
  return (
    <header className="bg-white">
      <h1 className="pt-5 w-full text-3xl font-bold text-center">
        <Link href="/">
          <a>
            FIND <span className="text-red-500">NEXT</span>
          </a>
        </Link>
      </h1>
      <h2 className="md:p-0 px-2 pb-4 md:pb-0 w-full text-sm md:text-base text-center">ー新しい次が見つかるー</h2>

      <nav className="flex overflow-scroll md:overflow-auto fixed md:static bottom-0 z-10 md:flex-none w-full bg-white border-t border-blue-300 md:border-none scrollbar-hide ">
        {items.map(({ href, label }) => {
          return (
            <Link key={href} href={href}>
              <a className="inline-block p-4 hover:text-red-300 hover:bg-white">{label}</a>
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
