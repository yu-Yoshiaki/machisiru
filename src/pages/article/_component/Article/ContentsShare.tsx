import type { VFC } from "react";
import * as ReactShare from "react-share";

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
      <ReactShare.FacebookShareButton url={props.url}>
        <ReactShare.FacebookIcon size={props.size ? props.size : config.size} round />
      </ReactShare.FacebookShareButton>
      <ReactShare.TwitterShareButton url={props.url} title={title}>
        <ReactShare.TwitterIcon size={props.size ? props.size : config.size} round />
      </ReactShare.TwitterShareButton>
      <ReactShare.LineShareButton url={props.url} title={title}>
        <ReactShare.LineIcon size={props.size ? props.size : config.size} round />
      </ReactShare.LineShareButton>
    </div>
  );
};
