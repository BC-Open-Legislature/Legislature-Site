import React from 'react';

import Tag from './Tag';

interface debatesDateInterface {
  time: string,
  text: string,
  short_name: string,
  name: string,
  event: string,
  sub_event: string,
}

// FIXME: Add Location And Proper Party
const DebatePortion = (props: debatesDateInterface) => {
  const {
    time,
    text,
    short_name: shortName,
    name,
    event,
    sub_event: subEvent,
  } = props;

  const image = `https://www.leg.bc.ca/assets/Members/42nd-Parliament/Large/${name.split(' ').reverse().join(' ').replace(/ /g, '-')}.jpg`;
  const dateTime = new Date(0, 0, 0, +time.substring(0, 2), +time.substring(2, 4));

  return (
    <div id={time} className="max-w-6xl w-full h-min grid grid-cols-5 gap-4 main-col mx-auto">
      <div className="flex flex-col justify-center main-col-sidebar h-max">
        <a href={`/mlas/${shortName}`} className="flex justify-center">
          <img className="border-4 border-black-800 h-44" src={image} alt={`${name}`} />
        </a>
        <h1 className="text-center font-bold text-lg">{event}</h1>
        <h1 className="text-center font-medium text-base">{subEvent}</h1>
        <h1 className="text-center pb-2">{dateTime.toLocaleDateString('en-US', { hour: 'numeric', minute: '2-digit' }).split(', ')[1]}</h1>
        <Tag className="bg-party-green" name="Green" />
      </div>
      <div className="main-col-main col-span-3">
        <a href={`/mlas/${shortName}`} className="font-bold text-link text-lg hover:underline max-w-2xl">{name}</a>
        <h1 className="max-w-2xl">{text}</h1>
      </div>
      <div className="main-col-main align-self-top justify-self-end">
        <button
          onClick={() => { navigator.clipboard.writeText(`${window.location.href}#${time}`); }}
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
