import { NextApiRequest, NextApiResponse } from 'next';

import { getRecentDebatesIndexes } from '../../../lib/debatesFetcher';

const handler = (_: NextApiRequest, res: NextApiResponse) => {
  getRecentDebatesIndexes()
    .then((recentDebatesIndexes) => {
      res.status(200).json(recentDebatesIndexes);
    })
    .catch(() => {
      res.status(500).json([]);
    });
};

export default { handler };
