/* eslint-disable @typescript-eslint/naming-convention */
import Head from "next/head";
import type { VFC } from "react";
import { useEffect, useState } from "react";
import Snowfall from "react-snowfall";
import { Pan } from "src/layout/Pan";
import * as ArticleComponent from "src/pages/article/_component/";
import type { NewsResponse } from "src/types/microcms";

export const ArticleLayout: VFC<{ datas: NewsResponse }> = (props) => {
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
      <Pan title={mainTitle} />
      <div className="px-2 pb-10 space-y-5 w-full text-white bg-gray-800 md:px-0">
        <ArticleComponent.Top mainTitle={mainTitle} updatedAt={updatedAt} />
        <ArticleComponent.MainImage mainImage={mainImage} />
        <ArticleComponent.Main bodys={bodys} />
        <ArticleComponent.ContentsShare title={mainTitle} url={`https://findnext.news/news/${id}`} size={50} />
      </div>
    </div>
  );
};
