import mongoose from 'mongoose';
import dotenv from 'dotenv';

import DebatesModel from './models/debate_day';

dotenv.config();
mongoose.connect(process.env.MONG_PSWRD);

const getRecentDebatesIndexes = async () => {
  const debateIndexes = (await DebatesModel.find({}, 'date').sort({ date: -1 }).limit(16)).flatMap((x) => x.date);
  return (debateIndexes);
};

const getDebatesYearlyIndexes = async () => {
  const debateIndexes = (await DebatesModel.find({}, 'date')).flatMap((x) => x.date);
  const foundYears = {};
  const filteredDebateIndexes = debateIndexes.map(
    (dateIndex) => {
      const dateIndexYear = dateIndex.substring(0, 4);
      if (!(dateIndexYear in foundYears)) {
        foundYears[dateIndexYear] = '';
        return dateIndexYear;
      }
      return null;
    },
  )
    .filter((dateIndex) => dateIndex != null)
    .reverse();

  return (filteredDebateIndexes);
};

const getDebateIndexesByYear = async (year: number) => {
  const debateIndexes = (await DebatesModel.find({}, 'date')).flatMap((debateIndex) => debateIndex.date).filter((date) => year === +date.substring(0, 4));
  const filteredDebateIndexes: string[][] = [[], [], [], [], [], [], [], [], [], [], [], []];

  debateIndexes.forEach((index) => {
    filteredDebateIndexes[+index.substring(4, 6)].push(index);
  });

  return (filteredDebateIndexes);
};

const getDebateDataByIndex = async (page: number, date: number) => {
  const debateDataAtDate: {data: any[]} = await DebatesModel.findOne({ _id: date }, 'data');
  return (
    {
      data: debateDataAtDate.data.slice(page, page + 25),
      length: Math.ceil(debateDataAtDate.data.length / 25),
    }
  );
};

export {
  getRecentDebatesIndexes,
  getDebatesYearlyIndexes,
  getDebateIndexesByYear,
  getDebateDataByIndex,
};
