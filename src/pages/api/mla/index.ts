import { NextApiRequest, NextApiResponse } from 'next';

import { getActiveMembers } from '../../../lib/mlaFetcher';

const handler = (_: NextApiRequest, res: NextApiResponse) => {
  getActiveMembers()
    .then((activeMembers) => {
      res.status(200).json(activeMembers);
    })
    .catch(() => {
      res.status(500).json([]);
    });
};

export default handler;
