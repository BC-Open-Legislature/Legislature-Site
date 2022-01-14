import mongoose from 'mongoose';
import dotenv from 'dotenv';

import Members from './models/members';

dotenv.config();
mongoose.connect(process.env.MONG_PSWRD);

const getActiveMembers = async () => {
  const members = await Members.find({ active: true });
  return (members);
};

const getSpecificMember = async (id: string) => {
  const mla = id.replace('-', ' ');
  const member = await Members.findOne({ _id: mla });
  return (member);
};

export { getActiveMembers, getSpecificMember };
