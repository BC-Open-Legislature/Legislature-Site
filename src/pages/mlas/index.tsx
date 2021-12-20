import React from 'react';

import { apiURL } from '../../constants/constants';

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
    <div className="h-full" />
  );
};

export async function getServerSideProps() {
  const res = await fetch(`${apiURL}/mla`);
  const mlaJSON = await res.json();
  const mlaData = mlaJSON.map((mla: specificMLAData) => (
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

  return { props: { mlaData } };
}

export default MLAPage;
