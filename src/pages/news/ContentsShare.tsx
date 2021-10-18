import type { VFC } from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  LineIcon,
  LineShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

const config = {
  size: 32,
};

type SocialProps = {
  url: string;
  title: string;
  size?: number;
  via?: string;
};

export const ContentsShare: VFC<SocialProps> = (props) => {
  const title = props.title + "- FIND NEXT";
  return (
    <div className="flex justify-around mt-8">
      <FacebookShareButton url={props.url} className="md:flex md:items-center space-y-1 space-x-1 md:space-x-4">
        <FacebookIcon size={props.size ? props.size : config.size} round />
        <p className="text-xs md:text-base">Facebookでシェア</p>
      </FacebookShareButton>
      <TwitterShareButton
        url={props.url}
        title={title}
        className="md:flex md:items-center space-y-1 space-x-1 md:space-x-4"
      >
        <TwitterIcon size={props.size ? props.size : config.size} round />
        <p className="text-xs md:text-base">Twitterでシェア</p>
      </TwitterShareButton>
      <LineShareButton
        url={props.url}
        title={title}
        className="md:flex md:items-center space-y-1 space-x-1 md:space-x-4"
      >
        <LineIcon size={props.size ? props.size : config.size} round />
        <p className="text-xs md:text-base">Lineでシェア</p>
      </LineShareButton>
    </div>
  );
};
