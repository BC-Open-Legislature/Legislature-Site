import React from 'react';

import { getActiveMembers } from '../../lib/mlaFetcher';
import MemberPortion from '../../components/MemberPortion';

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

const MLAPage = (props: { mlaData: specificMLAData[] }) => {
  const { mlaData } = props;

  return (
    <div className="h-max flex flex-col gap-2 text-black-800 sm:m-12 mx-12 my-4 font-light">
      <div className="max-w-6xl w-full h-min font-bold text-4xl mx-auto mb-5">
        <h1>Current Members of the Legislative Assembly</h1>
      </div>
      <div className="max-w-6xl w-full h-max mx-auto mb-5 flex gap-10 flex-wrap">
        {
          mlaData.map((memberData) => (
            <MemberPortion mlaData={memberData} />
          ))
        }
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const mlaData = await getActiveMembers();
  const mlaParsedData = mlaData.map((mla: specificMLAData) => (
    {
      abreviated_name: mla.abreviated_name,
      name: mla.name,
      image: mla.image,
      member_data: {
        titles: mla.member_data.titles,
        location: mla.member_data.location,
        party: mla.member_data.party,
      },
    }
  ));

  return { props: { mlaData: mlaParsedData } };
}

export default MLAPage;
