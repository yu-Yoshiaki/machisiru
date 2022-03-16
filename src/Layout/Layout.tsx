import type { CustomLayout } from "next";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { Side } from "./Side";

export const Layout: CustomLayout = (page) => {
  return (
    <div className="font-mono bg-gray-300">
      <Header />

      <main className="pt-[150px] mx-auto w-[90%] md:max-w-[1440px] min-h-screen">
        {page}
        <Side />
      </main>

      <Footer />
    </div>
  );
};
