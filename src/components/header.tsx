import Link from "next/link";
import type { VFC } from "react";
// import { useState } from "react";

const items = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
];

// const smartPhoneMenu = (
//   <nav>
//     <ul>
//       <li>
//         <a href="/">HOME</a>
//       </li>
//       <li>
//         <a href="/about">ABOUT</a>
//       </li>
//     </ul>
//   </nav>
// );

export const Header: VFC = () => {
  return (
    <header className="w-full border-b border-gray-300">
      <h1 className="fixed z-10 w-full bg-white">
        <Link href="/">
          <a className="block p-5 w-40 text-xl font-bold hover:bg-blue-50">MACHISIRU</a>
        </Link>
      </h1>
      <nav className="pt-20">
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
