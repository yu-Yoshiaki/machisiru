import type { VFC } from "react";
import Link from "next/link";
const datas = [
  { href: "/comingsoon", title: "利用規約" },
  { href: "/comingsoon", title: "プライバシーポリシー" },
  { href: "/comingsoon", title: "私たちについて" },
  { href: "/comingsoon", title: "お問い合せ" },
];

export const Footer: VFC = () => {
  return (
    <footer className="text-xl text-center bg-white border-t py-12">
      <ul className="flex justify-around mb-12">
        {datas.map((data) => {
          return (
            <li key={data.title}>
              <Link href={data.href}>
                <a className="text-sm text-gray-700">{data.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
      <small>&copy; 2021 MACHISIRU</small>
    </footer>
  );
};
