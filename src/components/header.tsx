import Link from "next/link";
import type { VFC } from "react";

const items = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/shop", label: "SHOP" },
];

export const Header: VFC = () => {
  return (
    <header className="fixed z-10 w-full bg-white border-b border-gray-300 ">
      <h1>
        <Link href="/">
          <a className="block p-5 w-40 text-xl font-bold text-center align-middle hover:bg-blue-50 ">MACHISIRU</a>
        </Link>
      </h1>
      <nav>
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
