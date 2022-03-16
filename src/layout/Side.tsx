import type { VFC } from "react";

import { Profile } from "./Profile";

export const Side: VFC = () => {
  return (
    <div className="space-y-8 w-[250px] mx-auto">
      <Profile />
    </div>
  );
};
