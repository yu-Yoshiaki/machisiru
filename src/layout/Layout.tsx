import type { CustomLayout } from "next";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { Side } from "./Side";

export const Layout: CustomLayout = (page) => {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] gap-y-8 justify-center font-mono bg-gray-100">
      <Header />
      <main className="grid grid-cols-1 md:grid-cols-[min(500px),250px] gap-x-8 gap-y-8 pt-[120px] max-w-[1110px] min-h-screen">
        {page}
        <Side />
      </main>
      <Footer />
    </div>
  );
};
