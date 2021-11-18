/* eslint-disable @typescript-eslint/naming-convention */
import type { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line import/no-default-export
export default async (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ test: "hello" });
};
