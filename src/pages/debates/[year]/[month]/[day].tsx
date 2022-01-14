import React from 'react';
import ReactPaginate from 'react-paginate';
import { useRouter } from 'next/router';

import DebatePortion from '../../../../components/DebatePortion';
import { getDebateDataByIndex } from '../../../../lib/debatesFetcher';

interface debatesDateInterface {
  text: string,
  short_name: string,
  image: string,
  name: string,
  proceedingHeading: string,
  procedureHeading: string,
  time: string,
  party: string,
  location: string,
}

const DateDebatesPage = (
  props: { debatesDateData: { data: debatesDateInterface[], length: number, }, debateDate: string },
) => {
  const router = useRouter();

  const { debatesDateData, debateDate } = props;
  const { data, length } = debatesDateData;
  const {
    year,
    month,
    day,
    page,
  } = router.query;

  return (
    <div className="h-full flex flex-col gap-2 text-black-800 m-12 font-light">
      <div className="max-w-6xl w-full h-min font-bold text-4xl grid grid-cols-5 gap-4 main-col mx-auto mb-5">
        <h1 className="main-col-main col-span-3 max-w-2xl">{`Debates of ${debateDate}`}</h1>
      </div>
      <ReactPaginate
        previousLabel="&#xab; Previous"
        nextLabel="Next &#xbb;"
        pageCount={length}
        initialPage={+page}
        marginPagesDisplayed={4}
        onPageChange={
          ({ selected }) => {
            router.push({
              query: {
                page: selected, year, month, day,
              },
            });
          }
        }
        hrefBuilder={(hrefPage, pageCount) => (hrefPage >= 1 && hrefPage <= pageCount ? `?page=${hrefPage - 1}` : '#')}
        activeClassName="bg-link px-2 text-center text-secondary-800 hover:cursor-default hover:no-underline"
        activeLinkClassName="hover:cursor-default"
        disabledLinkClassName="hover:cursor-not-allowed text-secondary-500"
        pageClassName="text-center hover:underline"
        containerClassName="flex gap-3 justify-center font-semibold main-col-main col-span-3 mb-5"
        previousClassName="hover:underline"
        nextClassName="hover:underline"
      />
      {
        data.map((debateEvent) => (
          <DebatePortion
            image={debateEvent.image}
            shortName={debateEvent.short_name}
            name={debateEvent.name}
            text={debateEvent.text}
            event={debateEvent.proceedingHeading}
            subEvent={debateEvent.procedureHeading}
            time={debateEvent.time}
            location={debateEvent.location}
            party={debateEvent.party}
          />
        ))
      }
    </div>
  );
};

export async function getServerSideProps({ query }) {
  const {
    year,
    month,
    day,
    page,
  } = query;

  const debateDate = new Date(year, month - 1, day);
  const formattedDebateDate = `${debateDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}${['th', 'st', 'nd', 'rd'][(day > 3 && day < 21) || day % 10 > 3 ? 0 : day % 10]}, ${year}`;

  const debateData = await getDebateDataByIndex(
    +(page ?? 0) + 1,
    +`${year}${month}${day}`,
  );

  return ({
    props: {
      debatesDateData: JSON.parse(JSON.stringify(debateData)),
      debateDate: formattedDebateDate,
    },
  });
}

export default DateDebatesPage;
