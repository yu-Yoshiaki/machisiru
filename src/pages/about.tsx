/* eslint-disable @typescript-eslint/naming-convention */
import Image from "next/image";
import type { VFC } from "react";
import { Layout } from "src/components/layout";

const greeting =
  "日本の魅力ある街の情報を発信していくWEBメディアです。\n 日本には、僕たちの知らない街がたくさん存在します。\n テレワーク化が進む昨今、地方の需要が見直されています。\n 今や「住む」ことの重要性が変化しつつあり、好きな街で暮らせる時代に突入しました。\n そこで僕たちは、「地方で暮らすとは？」「移住の楽しさ、魅力とは？」ということ発信していきたいと考えています。  代表 湯本好明";
const result = greeting.replace("\n", "<br/>");

const About: VFC = () => {
  return (
    <Layout>
      <div id="top" className="relative text-center">
        <Image src="/street.jpg" width={1000} height={1000} layout={"intrinsic"} />
        <div className="absolute top-0 left-0 px-5 text-white" id="message">
          <h1 className="p-8 text-2xl">
            僕らの知らない<strong>日本</strong>がここにある
          </h1>
          <p className="md:mx-auto md:w-2/3 text-left bg-red-100" dangerouslySetInnerHTML={{ __html: result }}></p>
        </div>
        <div id="profile">
          <Image
            src="/torii.jpg"
            width={200}
            height={200}
            layout={"intrinsic"}
            className="rounded-full ring-2 ring-black"
          />
          <p>YOSHIAKI</p>
          <p>1992年生まれ。kazukazu</p>
        </div>
      </div>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default About;
