import React, { Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from './routes';

export default function TheContent() {
  return (
    <div className="">
      {/* <div className="pl-3">
        <Breadcrumb pages={breadcrumbPages} />
      </div> */}
      {/* {loaderVisible && <Loader />} */}
      <Routes>
        {routes.map((route: any, idx: number) => {
          return (
            route.component && (
              <Route
                key={idx}
                path={route.path}
                element={<route.component />}
              />
            )
          );
        })}
        {/* <Route path="/" render={() => < to="/" />} /> */}
      </Routes>
    </div>
  );
}
