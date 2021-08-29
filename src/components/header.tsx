import Link from "next/link";
import type { VFC } from "react";
// import { useState } from "react";

const items = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
];

export const Header: VFC = () => {
  return (
    <header className="w-full bg-white border-b border-gray-300">
      <h1 className="w-full bg-white">
        <Link href="/">
          <a className="block p-5 text-xl font-bold hover:bg-blue-50">YOSHIBLOG</a>
        </Link>
      </h1>

      <nav className="text-white bg-black">
        {items.map(({ href, label }) => {
          return (
            <Link key={href} href={href}>
              <a className="inline-block p-5 hover:bg-blue-50">{label}</a>
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
