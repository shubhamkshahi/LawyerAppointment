import React from 'react';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <>
      <nav>Home Page </nav>
        <Outlet />
      
    </>
  )
}

export default HomeLayout