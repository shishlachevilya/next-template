import React from 'react';
import Header from '../Header';

const defaultLayout = {

};

const DefaultLayout = ({ children }) => (
  <div className={defaultLayout}>
    <Header/>

    <div>
      { children }
    </div>
  </div>
);

export default DefaultLayout;
