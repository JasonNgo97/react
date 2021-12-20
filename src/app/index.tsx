/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { RequireAuth } from './containers/Authenticate';

//pages
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';

// containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Lytesnap"
        defaultTitle="Lytesnap"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="Lytesnap" />
      </Helmet>
      <React.Suspense fallback={loading}>
        <Routes>
          <Route
            path="/*"
            element={
              <RequireAuth>
                <TheLayout />
              </RequireAuth>
            }
          />
          {/* <Route element={<NotFoundPage />} /> */}
        </Routes>
      </React.Suspense>

      <GlobalStyle />
    </BrowserRouter>
  );
}
