import React from 'react';
import { useRouter } from 'next/router';

const NavigationBar = () => {
  const { asPath } = useRouter();
  const routes = [
    {
      link: '/mlas',
      name: 'MLAs',
    },
    {
      link: '/bills',
      name: 'Bills',
    },
    {
      link: '/debates',
      name: 'Debates',
    },
  ];

  return (
    <div className="h-14 w-screen bg-primary-800 text-xl md:text-lg text-secondary-800 font-semibold flex">
      <div className="w-1/3 flex justify-center h-full">
        <a href="/" className="h-full w-full flex place-content-center text-2xl">
          <h1 className="my-auto w-min h-min">open</h1>
          <h1 className="my-auto w-min h-min font-normal">legislature</h1>
          <h1 className="my-auto w-min h-min font-normal text-secondary-700">.ca</h1>
        </a>
      </div>
      <div className="w-1/3 flex justify-center h-full">
        {
          routes.map((route) => (
            <a
              href={route.link}
              key={route.name}
              className={`h-full w-full flex place-content-center hover:underline
                ${
                  asPath.split(/(\/\w*)/gm)[1] === route.link
                    ? 'text-tertiary-800'
                    : 'text-secondary-800'
                }
              `}
            >
              <h1 className="m-auto w-min h-min">{route.name.replace('/', '')}</h1>
            </a>
          ))
        }
      </div>
    </div>
  );
};

export default NavigationBar;
