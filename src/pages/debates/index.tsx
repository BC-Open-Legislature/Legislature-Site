import React from 'react';

import { apiURL } from '../../constants/constants';

const outputDateOptions: Intl.DateTimeFormatOptions = {
  month: 'long',
  day: 'numeric',
};

const DebatesPage = (props: { recentDebates: string[], archiveYears: string[] }) => {
  const { recentDebates, archiveYears } = props;

  return (
    <div className="h-full flex flex-col gap-2 text-black-800 m-12 font-light">
      <div className="max-w-6xl w-full h-min font-bold text-4xl grid grid-cols-5 gap-4 main-col mx-auto mb-5">
        <h1 className="main-col-main col-span-3 max-w-2xl">The Debates of the BC Legislature</h1>
      </div>
      <div className="max-w-6xl w-full h-min grid grid-cols-5 gap-4 main-col mx-auto">
        <h1 className="main-col-main col-span-3 text-lg max-w-2xl">
          When the Legislature is in session, every word spoken by a member is faithfully
          transcribed, and published in a document called a
          {' '}
          <a className="text-link font-bold hover:underline" href="https://en.wikipedia.org/wiki/Hansard#British_Columbia">Hansard</a>
          . Browse through them below.
        </h1>
      </div>
      <br />
      <div className="max-w-6xl w-full h-min grid grid-cols-5 gap-4 main-col mx-auto">
        <h1 className="main-col-sidebar text-3xl text-black-600">Recent</h1>
        <div className="main-col-main col-span-3 text-lg grid grid-cols-4">
          {recentDebates.map((debateIndex) => {
            const year = +debateIndex.substring(0, 4);
            const month = +debateIndex.substring(4, 6) - 1;
            const day = +debateIndex.substring(6, 8);
            const debateDate = new Date(year, month, day);

            // SOURCE: https://stackoverflow.com/questions/15397372
            return (
              <a href={`/debates/${year}/${month + 1}/${day}`} className="pb-4 text-link font-bold hover:underline">
                {`${debateDate.toLocaleDateString('en-US', outputDateOptions)}${['th', 'st', 'nd', 'rd'][(day > 3 && day < 21) || day % 10 > 3 ? 0 : day % 10]}`}
              </a>
            );
          })}
        </div>
      </div>
      <div className="max-w-6xl w-full h-min grid grid-cols-5 gap-4 main-col mx-auto">
        <h1 className="main-col-sidebar text-3xl text-black-600">Archive</h1>
        <div className="main-col-main col-span-3 text-lg grid grid-cols-4">
          {archiveYears.map((year) => (
            <a href={`/debates/${year}`} className="w-min pb-4 text-link font-bold hover:underline">{year}</a>
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const debatesRes = await fetch(`${apiURL}/debates`);
  const debatesJSON = await debatesRes.json();

  const archiveRes = await fetch(`${apiURL}/debates/indexes`);
  const archiveYears = await archiveRes.json();

  return { props: { recentDebates: debatesJSON, archiveYears } };
}

export default DebatesPage;
