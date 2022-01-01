import React from 'react';
import { useRouter } from 'next/router';

import { apiURL } from '../../../constants/constants';

const outputDateOptions: Intl.DateTimeFormatOptions = {
  month: 'long',
  day: 'numeric',
};

const DebatesPage = (props: { archiveMonths: string[][] }) => {
  const router = useRouter();
  const { archiveMonths } = props;
  const { year } = router.query;

  return (
    <div className="h-full flex flex-col gap-2 text-black-800 m-12 font-light">
      <div className="max-w-6xl w-full h-min font-bold text-4xl grid grid-cols-5 gap-4 main-col mx-auto mb-5">
        <h1 className="main-col-main col-span-3 max-w-2xl">{`Debates from ${year}`}</h1>
      </div>
      <br />
      {archiveMonths.map((month, index) => (
        month.length > 0 ? (
          <div className="max-w-6xl w-full h-min grid grid-cols-5 gap-4 main-col mx-auto">
            <div className="max-w-6xl w-full h-min grid grid-cols-5 gap-4 main-col mx-auto">
              <h1 className="main-col-sidebar text-3xl text-black-600">{new Date(0, +index).toLocaleString('default', { month: 'long' })}</h1>
            </div>
            <div className="main-col-main col-span-3 text-lg grid grid-cols-4">
              {month.map((date) => {
                const yearDate = +date.substring(0, 4);
                const monthDate = +date.substring(4, 6) - 1;
                const dayDate = +date.substring(6, 8);
                const debateDate = new Date(yearDate, monthDate, dayDate);

                // SOURCE: https://stackoverflow.com/questions/15397372
                return (<a href={`/debates/${yearDate}/${monthDate + 1}/${dayDate}`} className="pb-4 text-link font-bold hover:underline">{`${debateDate.toLocaleDateString('en-US', outputDateOptions)}${['th', 'st', 'nd', 'rd'][(dayDate > 3 && dayDate < 21) || dayDate % 10 > 3 ? 0 : dayDate % 10]}`}</a>);
              })}
            </div>
          </div>
        ) : undefined
      ))}
    </div>
  );
};

export async function getServerSideProps({ query }) {
  const { year } = query;

  const archiveRes = await fetch(`${apiURL}/debates/indexes/${year}`);
  const archiveMonths = await archiveRes.json();

  return { props: { archiveMonths } };
}

export default DebatesPage;
