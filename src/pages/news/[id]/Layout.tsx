/* eslint-disable @typescript-eslint/naming-convention */
import { Pan } from "layout/Pan";
import Head from "next/head";
import type { VFC } from "react";
import { NewsArticleMainImage } from "src/pages/news/component/NewsArticle/MainImage";
import { NewsArticleTop } from "src/pages/news/component/NewsArticle/Top";
import type { MicroCMSCustomField } from "src/types/microcms";

// import type { NewsResponse } from "src/pages/news/types";
import { ContentsShare } from "../component/ContentsShare";
import { NewsArticleMain } from "../component/NewsArticle/Main";

type Props = {
  mainTitle: string;
  updatedAt: string;
  mainImage:
    | MicroCMSCustomField<
        "image",
        {
          image: {
            url: string;
            height: number;
            width: number;
          };
          alt: string;
        }
      >
    | undefined;
  bodys: (
    | MicroCMSCustomField<
        "image",
        {
          image: {
            url: string;
            height: number;
            width: number;
          };
          alt: string;
        }
      >
    | MicroCMSCustomField<
        "paragraph",
        {
          h2_title: string;
          h2_content: string;
        }
      >
  )[];
  id: string;
};

export const NewsArticleLayout: VFC<Props> = (props) => {
  const mainTitle = props.mainTitle;
  const updatedAt = props.updatedAt;
  const mainImage = props.mainImage;
  const bodys = props.bodys;
  const id = props.id;

  return (
    <div>
      <Head>
        <title>{mainTitle}</title>
      </Head>

      <div className="px-2 pb-10 mb-7 space-y-5 bg-white md:px-0 md:mr-4">
        <Pan title={mainTitle} />
        <NewsArticleTop mainTitle={mainTitle} updatedAt={updatedAt} />
        <NewsArticleMainImage mainImage={mainImage} />
        <NewsArticleMain bodys={bodys} />
        <ContentsShare title={mainTitle} url={`https://findnext.news/news/${id}`} size={50} />
      </div>
    </div>
  );
};
