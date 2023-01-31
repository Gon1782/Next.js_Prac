import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  id?: string | string[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { query } = req;
  const { id } = query;

  res.status(200).json({ name: "test", id });
}
