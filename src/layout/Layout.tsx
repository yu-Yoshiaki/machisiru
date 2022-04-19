import type { CustomLayout } from "next";
import { useGetWindowSize } from "src/hooks/useGetWindowSizze";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { Profile } from "./Profile";

export const Layout: CustomLayout = (page) => {
  const { windowSize } = useGetWindowSize();

  return (
    <div className="font-mono">
      <Header />
      {windowSize.width > 425 ? (
        <div className="flex items-center justify-center h-screen">
          <p>すみません。スマートフォン専用サイトになります。PCでの閲覧はできません。</p>
        </div>
      ) : (
        <main className="space-y-4 bg-gray-50 lg:grid lg:grid-cols-[1fr,20%] w-full justify-center pt-[100px] mx-auto md:w-[95%] md:max-w-[1440px] min-h-screen">
          {page}
          <Profile />
        </main>
      )}{" "}
      <Footer />
    </div>
  );
};
