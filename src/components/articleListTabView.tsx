/* eslint-disable tailwindcss/no-custom-classname */
import Image from "next/image";
import Link from "next/link";
import type { VFC } from "react";

type ArticleListTabView = {
  title: string;
  image: string;
  url: string;
};

export const ArticleListTabView: VFC<ArticleListTabView> = (props) => {
  return (
    <div className="pt-5 pb-10 mb-10 bg-white ">
      <h1 className="p-8 text-2xl font-bold text-center">{props.title}</h1>
      <h3 className="py-5 pr-5 text-right text-gray-600 text-md">更新日：2021-08-29</h3>

      <Image src={props.image} width={600} height={350} alt="No Image" className="mx-auto bg-black" />

      <p className="p-10">
        WordPressテーマの「Manablog
        Copy」の販売ページです。SEOと読みやすさを追求したテーマです。このテーマは「マナブログ」の運営にも使われており、マナブログは「月間100万PV」を超えています。実際に成果の出ているテーマなので、信頼性も高いはず。ブログは人生の母艦になりますので、徐々に育てましょう。
      </p>

      <Link href={`/news/${props.url}`}>
        <a className="block content-center p-5 mx-auto w-1/3 text-center ring-1 hover:ring-2 hover:ring-blue-400">
          READ MORE
        </a>
      </Link>
    </div>
  );
};
