import type { ReactChild, VFC } from "react";
import { Footer } from "src/layout/Footer";
import { Header } from "src/layout/Header";
import { Side } from "src/layout/Side";
import Snowfall from "react-snowfall";

export const Winter: VFC<{ children: ReactChild }> = (props) => {
  return (
    <div className="md:grid grid-rows-[auto,1fr,auto] gap-y-8 justify-center font-mono bg-[#330066]">
      <Header />
      <main className="grid grid-cols-[min(500px),250px] gap-x-8 pt-[120px] max-w-[1110px] min-h-screen">
        {props.children}
        <Snowfall speed={[2, 5]} />
        <Side />
      </main>
      <Footer />
    </div>
  );
};
