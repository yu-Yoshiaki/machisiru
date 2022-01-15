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
    <div className="flex justify-center mt-8 space-x-5 md:space-x-5">
      <FacebookShareButton url={props.url}>
        <FacebookIcon size={props.size ? props.size : config.size} round />
      </FacebookShareButton>
      <TwitterShareButton url={props.url} title={title}>
        <TwitterIcon size={props.size ? props.size : config.size} round />
      </TwitterShareButton>
      <LineShareButton url={props.url} title={title}>
        <LineIcon size={props.size ? props.size : config.size} round />
      </LineShareButton>
    </div>
  );
};
