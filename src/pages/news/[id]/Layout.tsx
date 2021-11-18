/* eslint-disable @typescript-eslint/naming-convention */
import Head from "next/head";
import type { VFC } from "react";
import { Pan } from "src/Layout/Pan";
import type { MicroCMSCustomField } from "src/pages/news/types";

// import type { NewsResponse } from "src/pages/news/types";
import { ContentsShare } from "../ContentsShare";
import { NewsArticleMain } from "./NewsArticleMain";
import { NewsArticleMainImage } from "./NewsArticleMainImage";
import { NewsArticleTop } from "./NewsArticleTop";

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

      <Pan title={mainTitle} />

      <div className="px-2 md:px-0 pt-5 pb-10 md:mr-4 mb-7 bg-white">
        <NewsArticleTop mainTitle={mainTitle} updatedAt={updatedAt} />
        <NewsArticleMainImage mainImage={mainImage} />
        <NewsArticleMain bodys={bodys} />
        <ContentsShare title={mainTitle} url={`https://findnext.news/news/${id}`} size={50} />
      </div>
    </div>
  );
};
