/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { AppProps } from 'next/app';

import NavigationBar from '../components/NavigationBar';
import '../styles/globals.css';

const MainApp = ({ Component, pageProps }: AppProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <div className="bg-secondary-900 font-helvetica flex flex-col h-screen">
    <NavigationBar />
    <div className="mb-14" />
    <Component {...pageProps} />
  </div>
);

export default MainApp;
