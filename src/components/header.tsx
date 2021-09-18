/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/jsx-handler-names */
import Link from "next/link";
import type { VFC } from "react";

const items = [
  { href: "/", label: "HOME" },
  { href: "/#", label: "TECH" },
  { href: "/#", label: "MEDICAL" },
  { href: "/#", label: "SPORT" },
  { href: "/#", label: "CONTACT" },
];

export const Header: VFC = () => {
  return (
    <header className="bg-white">
      <h1 className="p-5 w-full text-2xl font-bold text-center">
        <Link href="/">
          <a>YOSHIBLOG</a>
        </Link>
      </h1>

      <nav className="flex overflow-scroll md:overflow-auto fixed md:static bottom-0 z-10 md:flex-none w-full bg-white border-t border-blue-300 md:border-none scrollbar-hide">
        {items.map(({ href, label }) => {
          return (
            <Link key={href} href={href}>
              <a className="inline-block p-5 hover:text-black hover:bg-white">{label}</a>
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
