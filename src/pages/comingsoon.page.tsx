import type { CustomNextPage } from "next";
import { Layout } from "src/pages/layout";

const Comingsoon: CustomNextPage = () => {
  return <p className="font-bold text-center">Coming soon...</p>;
};

Comingsoon.getLayout = Layout;

export default Comingsoon;
