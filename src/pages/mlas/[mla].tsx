import React, { useState } from 'react';

import { getSpecificMember } from '../../lib/mlaFetcher';

interface memberDataInterface {
  abreviated_name: string,
  name: string,
  image: string,
  about: string,
  member_data: {
    titles: string,
    location: string,
    party: string,
  },
}

// TODO: Fix this so it works on mobile / add mobile support
const MemberPage = (props: { memberData: memberDataInterface }) => {
  const { memberData } = props;
  const [isExpanded, setIsExapanded] = useState(false);

  return (
    <div className="h-full flex flex-col gap-2 text-black-800 sm:m-12 mx-12 font-light">
      <div className="max-w-6xl w-full h-min font-bold text-4xl grid grid-cols-5 gap-4 main-col mx-auto mb-5">
        <h1 className="main-col-main col-span-3">{memberData.name}</h1>
      </div>
      <div className="max-w-6xl w-full h-min grid grid-cols-5 gap-4 main-col mx-auto mb-5 text-lg">
        <div className="main-col-sidebar">
          <img className="sm:w-5/6 w-3/6  mx-auto border-4 border-black-800" src={memberData.image} alt="Profile Icon" />
        </div>
        <div className="main-col-main">
          <h1 className="font-bold">{`${memberData.member_data.party} MLA for ${memberData.member_data.location}`}</h1>
          <br />
          <div>
            <h1 className="font-bold text-link">About : </h1>
            <h1 className="ml-4 block whitespace-pre-wrap">
              {memberData.about.replace('\n', '\n\n').substring(0, isExpanded ? 10000 : 350)}
              {isExpanded ? '' : '...'}
            </h1>
            <button className="ml-4 mb-4 text-link" onClick={() => { setIsExapanded(!isExpanded); }} type="button">
              {isExpanded ? 'See less' : 'See more'}
            </button>
            <h1 className="font-bold text-link">Recent Activity : </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ query }) {
  const { mla } = query;

  const memberData = await getSpecificMember(mla);
  return { props: { memberData: JSON.parse(JSON.stringify(memberData)) } };
}

export default MemberPage;
