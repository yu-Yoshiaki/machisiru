import type { CustomLayout } from "next";

import { Header } from "./Header";
import { Side } from "./Side";
import { Footer } from "./Footer";

export const Layout: CustomLayout = (page) => {
  return (
    <div className="md:grid grid-rows-[auto,1fr,auto] gap-y-8 font-mono bg-gray-100 justify-center">
        <Header />
        <main className="grid grid-cols-[min(500px),250px] gap-x-8 min-h-screen max-w-[1110px] pt-[120px]">
          {page}
          <Side />
        </main>
        <Footer />
      </div>
  );
};
