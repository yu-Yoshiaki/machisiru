import type { CustomLayout } from "next";

import { Header } from "./Header";
import { Side } from "./Side";

export const Layout: CustomLayout = (page) => {
  return (
    <>
      <div className="md:grid grid-rows-[auto,1fr] gap-y-8 font-mono bg-gray-100 ">
        <Header />
        <main className="pt-3 pb-10 md:mx-auto md:w-5/6">
          <div className="md:grid grid-cols-[auto,30%] gap-x-4 gap-y-4">
            {page}
            <Side />
          </div>
        </main>
      </div>
    </>
  );
};
