import type { ReactChild, VFC } from "react";
import { Footer } from "src/Layout/Footer";
import { Header } from "src/Layout/Header";
import { Side } from "src/Layout/Side";

export const Summer: VFC<{ children: ReactChild }> = (props) => {
  return (
    <div className="md:grid grid-rows-[auto,1fr,auto] gap-y-8 justify-center font-mono bg-red-500">
      <Header />
      <main className="grid grid-cols-[min(500px),250px] gap-x-8 pt-[120px] max-w-[1110px] min-h-screen">
        {props.children}
        <Side />
      </main>
      <Footer />
    </div>
  );
};
