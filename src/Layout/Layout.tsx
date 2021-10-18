import type { VFC } from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { Side } from "./Side";

export const Layout: VFC = (page) => {
  return (
    <>
      <div className="md:grid grid-rows-[auto,1fr,auto] gap-y-8 bg-gray-100 ">
        <Header />
        <main className="md:mx-auto md:w-5/6">
          <div className="md:grid grid-cols-[70%,1fr] gap-y-4">
            {page}
            <Side />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};
