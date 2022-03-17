import type { CustomLayout } from "next";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { Side } from "./Side";

export const Layout: CustomLayout = (page) => {
  return (
    <div className="font-mono">
      <Header />

      <main className="lg:grid lg:grid-cols-[1fr,20%] w-full justify-center pt-[100px] mx-auto md:w-[95%] md:max-w-[1440px] min-h-screen">
        {page}
        <Side />
      </main>

      <Footer />
    </div>
  );
};
