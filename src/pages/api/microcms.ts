/* eslint-disable @typescript-eslint/naming-convention */
import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "src/libs/microcms";
import type { MicroCMSContent } from "src/types";

const api = async (req: NextApiRequest, res: NextApiResponse<MicroCMSContent[]>) => {
  const datas: { contents: MicroCMSContent[] } = await client.get({
    endpoint: "blog",
  });

  return res.status(200).json(datas.contents);
};
// eslint-disable-next-line import/no-default-export
export default api;
