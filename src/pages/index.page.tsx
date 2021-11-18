import type { CustomNextPage } from "next";
import { Layout } from "src/Layout";

const Index: CustomNextPage = () => {
  return <div>ようこそ</div>;
};

Index.getLayout = Layout;

export default Index;
