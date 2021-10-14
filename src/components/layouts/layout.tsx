import type { ReactNode, VFC } from "react";

import { Footer } from "./footer";
import { Header } from "./header";
import { Side } from "./side";

export const Layout: VFC<{ children: ReactNode }> = (props) => {
  return (
    <>
      <div className="md:grid grid-rows-[auto,1fr,auto] gap-y-8 bg-gray-100 ">
        <Header />

        <main className="md:mx-auto md:w-5/6">
          <div className="md:grid grid-cols-[70%,1fr] gap-y-4">
            {props.children}
            <Side />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};
