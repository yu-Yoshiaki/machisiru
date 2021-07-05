import type { ReactNode, VFC } from "react";
import { Footer } from "src/components/footer";
import { Header } from "src/components/header";

export const Layout: VFC<{ children: ReactNode }> = (props) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};
