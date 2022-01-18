import type { VFC } from "react";
import { Sponse } from "src/Layout/Sponser";

import { Profile } from "./Profile";
import { TwitterTimeline } from "./TwitterTimeline";

export const Side: VFC = () => {
  return (
    <div className="space-y-8">
      <Sponse />
      <Profile />
      <TwitterTimeline />
    </div>
  );
};
