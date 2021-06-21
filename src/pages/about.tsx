/* eslint-disable @typescript-eslint/naming-convention */
import Image from "next/image";
import type { VFC } from "react";
import { Layout } from "src/components/layout";

const greeting =
  "テレワーク化が進み、地方への関心が増えている。\n 東京一強時代の終わりだ。都心部にいなくとも、いい仕事ができるようになった。 \n\n\n\n 25才の夏、僕はヒッチハイクで東京→鹿児島へ向かった。\n東京→京都→広島→鹿児島→屋久島を観光しながらトータル1週間の旅だった。\n「僕の知らなかった世界がこんなにあったのか」\n夢中になりながらそんなことを考えていた。\n\n よく「海外行けば世界観が変わる」という人もいるが、それは完全に灯台下暗しだ。\n日本にもまだ「僕らの知らない世界」が存在する。\n\nそんな世界をもっと知りたい。もっと日本をしりたい。\nそんな思いで僕はこのメディアを作ることにした。   代表 湯本好明";
const result = greeting.replace("\n", "<br/>");

const About: VFC = () => {
  return (
    <Layout>
      <div id="top" className="relative text-center text-white bg-black">
        <Image src="/street.jpg" width={1000} height={700} className="" />
        <div className="absolute top-0 left-0 px-96">
          <h1 className="p-8 text-2xl">
            僕らの知らない<strong>日本</strong>がここにある
          </h1>
          <p className="md:mx-auto md:w-2/3 text-left " dangerouslySetInnerHTML={{ __html: result }}></p>
        </div>
      </div>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default About;
