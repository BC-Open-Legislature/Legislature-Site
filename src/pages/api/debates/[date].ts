import { NextApiRequest, NextApiResponse } from 'next';

import { getDebateDataByIndex } from '../../../lib/debatesFetcher';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { date } = req.query;
  const { page } = req.query;
  getDebateDataByIndex(+page.toString(), +date.toString())
    .then((debateData) => {
      res.status(200).json(debateData);
    })
    .catch(() => {
      res.status(500).json([]);
    });
};

export default { handler };
