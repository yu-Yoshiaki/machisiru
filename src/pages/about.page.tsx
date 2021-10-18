import type { CustomNextPage } from "next";
import { Layout } from "src/Layout/";

const About: CustomNextPage = () => {
  return <p className="font-bold text-center">About</p>;
};

About.getLayout = Layout;

export default About;
