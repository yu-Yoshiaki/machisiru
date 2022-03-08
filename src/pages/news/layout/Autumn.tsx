import type { ReactChild, VFC } from "react";
import { Footer } from "src/layout/Footer";
import { Header } from "src/layout/Header";

export const Autumn: VFC<{ children: ReactChild }> = (props) => {
  return (
    <div>
      <Header />
      <main className="grid grid-cols-[min(500px),250px] gap-x-8 pt-[120px] max-w-[1110px] min-h-screen">
        {props.children}
      </main>
      <Footer />
    </div>
  );
};
