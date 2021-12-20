import React from 'react';
import { TheContent, TheFooter, TheHeader } from './index';
import { Outlet } from 'react-router-dom';

const TheLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <TheHeader />
      <TheContent />
      <TheFooter />
      <Outlet />
    </div>
  );
};

export default TheLayout;
