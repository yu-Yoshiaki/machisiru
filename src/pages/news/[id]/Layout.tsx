/* eslint-disable @typescript-eslint/naming-convention */
import Head from "next/head";
import type { VFC } from "react";
import { useEffect, useState } from "react";
import Snowfall from "react-snowfall";
import { Pan } from "src/layout/Pan";
import { NewsArticleMainImage } from "src/pages/news/component/NewsArticle/MainImage";
import { NewsArticleTop } from "src/pages/news/component/NewsArticle/Top";
import type { NewsResponse } from "src/types/microcms";

// import type { NewsResponse } from "src/pages/news/types";
import { ContentsShare } from "../component/ContentsShare";
import { NewsArticleMain } from "../component/NewsArticle/Main";

export const NewsArticleLayout: VFC<{ datas: NewsResponse }> = (props) => {
  const [snowflakeCount, setSnowflakeCount] = useState<number>(150);

  useEffect(() => {
    if (window) {
      {
        window.screen.width < 500 && setSnowflakeCount(50);
      }
    }
  }, [snowflakeCount]);

  const mainTitle = props.datas.mainTitle;
  const updatedAt = props.datas.updatedAt;
  const mainImage = props.datas.mainImage;
  const bodys = props.datas.bodys;
  const id = props.datas.id;
  const season = props.datas.season;

  return (
    <div>
      <Head>
        <title>{mainTitle}</title>
      </Head>

      {season && season[0] === "冬" && (
        <Snowfall color={"white"} style={{ position: "fixed", zIndex: "30" }} snowflakeCount={snowflakeCount} />
      )}

      <div className="px-2 pb-10 space-y-5 w-full text-white bg-gray-800 md:px-0">
        <Pan title={mainTitle} />
        <NewsArticleTop mainTitle={mainTitle} updatedAt={updatedAt} />
        <NewsArticleMainImage mainImage={mainImage} />
        <NewsArticleMain bodys={bodys} />
        <ContentsShare title={mainTitle} url={`https://findnext.news/news/${id}`} size={50} />
      </div>
    </div>
  );
};
