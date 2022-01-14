import React from 'react';
import { useRouter } from 'next/router';

import Tag from './Tag';

interface debatesDateInterface {
  time: string,
  text: string,
  shortName: string,
  image: string,
  name: string,
  event: string,
  subEvent: string,
  location: string,
  party: string,
}

// FIXME: Find the correct naming conventions I used before when I get wifi
const partyToColour = {
  'BC Green Party': 'green',
  'BC NDP': 'NDP',
  'BC Liberal Party': 'liberal',
  independent: 'independent',
};

const DebatePortion = (props: debatesDateInterface) => {
  const {
    time,
    text,
    shortName,
    image,
    name,
    event,
    subEvent,
    location,
    party,
  } = props;
  const router = useRouter();

  const dateTime = new Date(0, 0, 0, +time.substring(0, 2), +time.substring(2, 4));

  return (
    <div id={time} className="max-w-6xl w-full h-min grid grid-cols-5 gap-4 main-col mx-auto pb-8">
      <div className="flex flex-col justify-center main-col-sidebar h-max">
        <a href={`/mlas/${shortName}`} className="flex justify-center">
          <img className="border-4 border-black-800 h-44" src={image !== '' ? image : '/default_image.svg'} alt={`${name}`} />
        </a>
        <h1 className="text-center font-bold text-lg">{event}</h1>
        <h1 className="text-center font-medium text-base">{subEvent}</h1>
        <h1 className="text-center pb-2">{dateTime.toLocaleDateString('en-US', { hour: 'numeric', minute: '2-digit' }).split(', ')[1]}</h1>
        <Tag className={`bg-party-${partyToColour[party] ?? 'other'}`.toLowerCase()} name={partyToColour[party] ?? 'other'} />
      </div>
      <div className="main-col-main col-span-3">
        {
          image !== '' 
            ? <a href={`/mlas/${shortName}`} className="font-bold text-link text-lg hover:underline max-w-2xl">{`${name} | ${location}`}</a>
            : <h1 className="font-bold text-link text-lg max-w-2xl">{`${name} | ${location}`}</h1>
        }
        <h1 className="max-w-2xl">{text}</h1>
      </div>
      <div className="main-col-main align-self-top justify-self-end">
        <button
          onClick={() => { navigator.clipboard.writeText(`${document.location.href.split('/')[2]}${window.location.pathname}${window.location.search}#${time}`); router.push(`${window.location.pathname}${window.location.search}#${time}`); }}
          className="font-extralight text-xs underline text-opacity-85 text-link"
          type="button"
        >
          COPY LINK
        </button>
      </div>
    </div>
  );
};

export default DebatePortion;
