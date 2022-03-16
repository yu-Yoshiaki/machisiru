import { Layout } from "layout";
import type { CustomNextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

const Index: CustomNextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/news");
  }, [router]);

  return <div></div>;
};

Index.getLayout = Layout;

export default Index;
