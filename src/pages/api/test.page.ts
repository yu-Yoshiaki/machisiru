import type { NextApiRequest, NextApiResponse } from "next";

export const A = async (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ test: "hello" });
};
