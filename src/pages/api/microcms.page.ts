/* eslint-disable @typescript-eslint/naming-convention */
import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "src/libs/microcms";
import type { NewsResponse } from "src/pages/news/types";

const api = async (req: NextApiRequest, res: NextApiResponse<NewsResponse[]>) => {
  const datas: { contents: NewsResponse[] } = await client.get({
    endpoint: "blog",
  });

  if (datas && undefined) return res.status(404).redirect("/");

  return res.status(200).json(datas.contents);
};
// eslint-disable-next-line import/no-default-export
export default api;
