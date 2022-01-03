import React from 'react';

interface specificMLAData {
  abreviated_name: string,
  name: string,
  image: string,
  member_data: {
    titles: string,
    location: string,
    party: string,
  },
}

const MemberPortion = (props: {mlaData: specificMLAData}) => {
  const { mlaData } = props;
  return (
    <a href={`/mlas/${mlaData.abreviated_name}`} className="flex flex-row w-max hover:underline">
      <img className="border-4 border-black-800 h-44" src={mlaData.image} alt={`${mlaData.name}'s Icon`} />
      <div className="w-52 ml-3 my-auto h-fit">
        <h1 className="text-link text-xl font-semibold">{mlaData.name}</h1>
        <h1>{mlaData.member_data.titles !== '' ? mlaData.member_data.titles : ''}</h1>
        <h1>{`${mlaData.member_data.party} MLA for`}</h1>
        <h1>{mlaData.member_data.location}</h1>
      </div>
    </a>
  );
};

export default MemberPortion;
