import React from 'react';
import Header from '../Header';

const mainLayoutStyle = {
  margin: 20,
  padding: 20,
  boxSizing: 'border-box',
  height: 'calc(100vh - 40px)',
  border: '1px solid #DDD',
  overflowX: 'hidden'
};

const MainLayout = ({ children }) => {

  return (
    <div style={ mainLayoutStyle }>
      <Header/>

      <div>
        { children }
      </div>
    </div>
  );
};

export default MainLayout;
