import React from 'react';

const IndexPage = () => (
  <div className="h-full flex flex-col gap-2 text-black-800 m-12 font-light">
    <div className="max-w-6xl w-full h-min font-bold text-4xl grid grid-cols-5 gap-4 main-col mx-auto mb-5">
      <h1 className="main-col-main col-span-3 max-w-2xl">The Debates of the BC Legislature</h1>
    </div>
    <div className="max-w-6xl w-full h-min grid grid-cols-5 gap-4 main-col mx-auto">
      <h1 className="main-col-main col-span-3 text-lg max-w-2xl">
        When the Legislature is in session, every word spoken by a member is faithfully transcribed,
        and published in a document called a
        {' '}
        <a className="text-link font-bold hover:underline" href="https://en.wikipedia.org/wiki/Hansard#British_Columbia">Hansard</a>
        . Browse through them below, or search via
        the box above.
      </h1>
    </div>
    <br />
    <div className="max-w-6xl w-full h-min grid grid-cols-5 gap-4 main-col mx-auto">
      <h1 className="main-col-sidebar text-3xl text-black-600">Recent</h1>
      <h1 className="main-col-main col-span-3 text-lg">
      </h1>
    </div>
  </div>
);

export default IndexPage;
