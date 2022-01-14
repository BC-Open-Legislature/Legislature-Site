import { NextApiRequest, NextApiResponse } from 'next';

import { getSpecificMember } from '../../../lib/mlaFetcher';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { mla } = req.query;
  getSpecificMember(mla.toString())
    .then((memberData) => {
      res.status(200).json(memberData);
    })
    .catch(() => {
      res.status(500).json({});
    });
};

export default { handler };
