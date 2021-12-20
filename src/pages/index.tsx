import React from 'react';

const IndexPage = () => (
  <div className="h-full flex flex-col gap-2 text-black-800 m-12 font-light">
    <div className="max-w-6xl w-full h-min font-bold text-4xl grid grid-cols-5 gap-4 main-col mx-auto mb-5">
      <h1 className="main-col-main col-span-3">Keeping tabs on our Legislature.</h1>
    </div>
    <div className="max-w-6xl w-full h-min grid grid-cols-5 gap-4 main-col mx-auto">
      <h1 className="main-col-sidebar text-3xl text-black-600">What we&rsquo;re doing</h1>
      <h1 className="main-col-main col-span-3 text-lg">
        <p>Finding out what our representatives in Victoria are up to can be tough.</p>
        <p>
          That&rsquo;s why we&rsquo;re trying to adapt the
          {' '}
          <a className="text-link font-bold" href="https://openparliament.ca/">Open Parliament</a>
          {' '}
          project for BC&rsquo;s Legislature
        </p>
        <br />
        <p>
          See what your representatives are
          {' '}
          <a className="text-link font-bold" href="/debates">saying</a>
          , and what
          {' '}
          <a className="text-link font-bold" href="/bills">laws</a>
          {' '}
          they&rsquo;re proposing.
          Poke around.
        </p>
      </h1>
    </div>
    <div className="max-w-6xl w-full h-min grid grid-cols-5 gap-4 main-col mx-auto">
      <h1 className="main-col-sidebar text-3xl text-black-600">What they&rsquo;re talking about</h1>
    </div>
    <div className="max-w-6xl w-full h-min grid grid-cols-5 gap-4 main-col mx-auto">
      <h1 className="main-col-sidebar text-3xl text-black-600">Recent votes</h1>
    </div>
  </div>
);

export default IndexPage;
