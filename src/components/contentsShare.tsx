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

export const ContentsStare: VFC<SocialProps> = (props) => {
  const title = props.title + "- FIND NEXT";
  return (
    <div className="flex justify-around ">
      <FacebookShareButton url={props.url} className="flex items-center space-x-4">
        <FacebookIcon size={props.size ? props.size : config.size} round />
        <p>Facebookでシェア</p>
      </FacebookShareButton>
      <TwitterShareButton url={props.url} title={title} className="flex items-center space-x-4">
        <TwitterIcon size={props.size ? props.size : config.size} round />
        <p>Twitterでシェア</p>
      </TwitterShareButton>
      <LineShareButton url={props.url} title={title} className="flex items-center space-x-4">
        <LineIcon size={props.size ? props.size : config.size} round />
        <p>Lineでシェア</p>
      </LineShareButton>
    </div>
  );
};
