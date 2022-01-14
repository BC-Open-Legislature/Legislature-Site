import mongoose from 'mongoose';

const MembersSchema = new mongoose.Schema({
  _id: String,
  abreviated_name: String,
  name: String,
  image: String,
  about: String,
  member_data: {
    titles: {
      type: String,
      default: '',
    },
    location: {
      type: String,
      default: '',
    },
    elected: {
      type: String,
      default: '',
    },
    party: {
      type: String,
      default: 'Other',
    },
    speaker: {
      type: String,
      default: false,
    },
  },
  active: Boolean,
});

const MembersModel = mongoose.models.members || mongoose.model('members', MembersSchema, 'Members');
export default MembersModel;
