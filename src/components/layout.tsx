import type { ReactNode, VFC } from "react";
import { Footer } from "src/components/footer";
import { Header } from "src/components/header";

export const Layout: VFC<{ children: ReactNode }> = (props) => {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] gap-y-8 bg-gray-100">
      <Header />
      {/* 列３の gridデザイン*/}
      <main className="grid grid-cols-3 gap-x-8 md:mx-auto w-5/6">{props.children}</main>
      <Footer />
    </div>
  );
};
