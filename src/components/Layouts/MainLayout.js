import React from 'react';
import Header from '../Header';
import Head from 'next/head';

const mainLayoutStyle = {
  margin: 20,
  padding: 20,
  boxSizing: 'border-box',
  height: 'calc(100vh - 40px)',
  border: '1px solid #DDD',
  overflowX: 'hidden'
};

const MainLayout = ({ children, title }) => {

  return (
    <div id="root" style={ mainLayoutStyle }>
      <Head>
        <title>{title}</title>
        <link rel='stylesheet' href='./public/style.css' />
      </Head>

      <Header/>

      <div>
        { children }
      </div>
    </div>
  );
};

export default MainLayout;
