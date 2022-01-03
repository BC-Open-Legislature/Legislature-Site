/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import NavigationBar from '../components/NavigationBar';
import '../styles/globals.css';

// eslint-disable-next-line react/jsx-props-no-spreading
const MainApp = ({ Component, pageProps }: AppProps) => (
  <html lang="en">
    <Head>
      {/* <link rel="icon" href="/favicon.ico" /> */}
      <title>Keeping tabs on BC&rsquo;s Legislature | BCopenlegislature.ca</title>

      {/* Meta Tags */}
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />

      <meta property="og:title" content="Eroxl's Personal Website" />
    </Head>
    <div className="bg-secondary-900 font-helvetica flex flex-col h-screen">
      <NavigationBar />
      <div className="mb-14" />
      <Component {...pageProps} />
    </div>
  </html>
);

export default MainApp;
