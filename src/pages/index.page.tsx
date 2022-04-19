import type { CustomNextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { Layout } from "src/layout";

const Index: CustomNextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/article/list");
  }, [router]);

  return <div>Loding...</div>;
};

Index.getLayout = Layout;

export default Index;
