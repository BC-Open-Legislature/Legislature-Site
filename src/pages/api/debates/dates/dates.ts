import { NextApiRequest, NextApiResponse } from 'next';

import { getDebatesYearlyIndexes } from '../../../../lib/debatesFetcher';

const handler = (_: NextApiRequest, res: NextApiResponse) => {
  getDebatesYearlyIndexes()
    .then((yearlyDebateIndexes) => {
      res.status(200).json(yearlyDebateIndexes);
    })
    .catch(() => {
      res.status(500).json([]);
    });
};

export default { handler };
