import type { VFC } from "react";

import { Profile } from "./Profile";

export const Side: VFC = () => {
  return (
    <div className="mx-auto space-y-8 w-[250px]">
      <Profile />
    </div>
  );
};
