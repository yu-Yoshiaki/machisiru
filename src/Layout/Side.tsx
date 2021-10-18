import type { VFC } from "react";

import { Profile } from "./Profile";

export const Side: VFC = () => {
  return (
    <div className="grid grid-rows-[,500px] gap-y-8">
      <Profile />
    </div>
  );
};
