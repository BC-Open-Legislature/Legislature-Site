import React from 'react';

import { apiURL } from '../../../../constants/constants';
import DebatePortion from '../../../../components/DebatePortion';

interface debatesDateInterface {
  text: string,
  short_name: string,
  image: string,
  name: string,
  event: string,
  sub_event: string,
  time: string,
  party: string,
  location: string,
}

const DateDebatesPage = (props: { debatesDateData: debatesDateInterface[] }) => {
  const { debatesDateData } = props;

  return (
    <div className="h-full flex flex-col gap-2 text-black-800 m-12 font-light">
      {
        debatesDateData.map((debateEvent) => (
          <DebatePortion
            image={debateEvent.image}
            short_name={debateEvent.short_name}
            name={debateEvent.name}
            text={debateEvent.text}
            event={debateEvent.event}
            sub_event={debateEvent.sub_event}
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

  const debatesDateRes = await fetch(`${apiURL}/debates/${year}${month}${day}?page=${page ?? 1}`);
  const debatesDateData = await debatesDateRes.json();

  return { props: { debatesDateData } };
}

export default DateDebatesPage;
