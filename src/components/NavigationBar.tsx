import React, { useState } from 'react';
import { useRouter } from 'next/router';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    <div className="h-14 w-screen bg-primary-800 text-xl md:text-lg text-secondary-800 font-semibold flex fixed">
      <div className="w-2/3 sm:w-1/3 flex justify-center h-full">
        <a href="/" className="h-full w-full flex place-content-center text-2xl">
          <h1 className="my-auto w-min h-min">BCopen</h1>
          <h1 className="my-auto w-min h-min font-normal">legislature</h1>
          <h1 className="my-auto w-min h-min font-normal text-secondary-700">.ca</h1>
        </a>
      </div>
      <button className="w-1/3 flex flex-col justify-center items-end px-7 sm:hidden" type="button" onClick={() => { setIsMenuOpen(!isMenuOpen); }}>
        <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 0 24 24" width="32px" fill="#fff">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" />
        </svg>
      </button>
      <div className={`${isMenuOpen || 'hidden'} sm:hidden flex flex-col w-full fixed px-7 pb-4 mt-14 bg-primary-800`}>
        {
          routes.map((route) => (
            <a
              href={route.link}
              key={route.name}
              className={`h-min w-full flex hover:underline place-content-end
                ${
                  asPath.split(/(\/\w*)/gm)[1] === route.link
                    ? 'text-tertiary-800'
                    : 'text-secondary-800'
                }
              `}
            >
              <h1 className="w-min h-min">{route.name.replace('/', '')}</h1>
            </a>
          ))
        }
      </div>
      <div className="w-1/3 sm:flex justify-center h-full hidden">
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
