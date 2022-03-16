import { Layout } from "layout";
import type { CustomNextPage } from "next";

const Comingsoon: CustomNextPage = () => {
  return <p className="font-bold text-center">Coming soon...</p>;
};

Comingsoon.getLayout = Layout;

export default Comingsoon;
