import type { ReactNode, VFC } from "react";
import { Footer } from "src/components/footer";
import { Header } from "src/components/header";

export const Layout: VFC<{ children: ReactNode }> = (props) => {
  return (
    <div>
      <Header />
      <main className="min-h-screen font-bold">{props.children}</main>
      <Footer />
    </div>
  );
};
