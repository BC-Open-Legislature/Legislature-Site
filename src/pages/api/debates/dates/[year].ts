import { NextApiRequest, NextApiResponse } from 'next';

import { getDebateIndexesByYear } from '../../../../lib/debatesFetcher';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { year } = req.query;
  getDebateIndexesByYear(+year.toString())
    .then((yearlyDebateIndexes) => {
      res.status(200).json(yearlyDebateIndexes);
    })
    .catch(() => {
      res.status(500).json([]);
    });
};

export default { handler };
