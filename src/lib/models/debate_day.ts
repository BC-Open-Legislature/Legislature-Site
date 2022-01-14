import mongoose from 'mongoose';

const DebatesSchema = new mongoose.Schema({
  _id: String,
  date: String,
  data: [
    {
      short_name: {
        type: String,
        default: '',
      },
      text: {
        type: String,
        default: '',
      },
      type: {
        type: String,
        default: '',
      },
      time: {
        type: String,
        default: '',
      },
    },
  ],
});

const DebatesModel = mongoose.models.debates || mongoose.model('debates', DebatesSchema, 'Debates');

export default DebatesModel;
