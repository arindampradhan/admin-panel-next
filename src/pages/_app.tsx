import React from 'react';
import '../styles/globals.css';
import type { AppProps, NextWebVitalsMetric } from 'next/app';
import App, { AppContext } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { wrapper } from '../store';
import { CookiesProvider } from 'react-cookie';
import BaseLayout from '../components/Layouts/BaseLayout';

export function reportWebVitals(metric: NextWebVitalsMetric) {
  const DEBUG_WEB_VITALS = 0;
  DEBUG_WEB_VITALS && console.log(metric);
}

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <CookiesProvider>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </CookiesProvider>
  );
}
const MyTranslatedApp = appWithTranslation(MyApp);
const MyReduxApp = wrapper.withRedux(MyTranslatedApp);

export default MyReduxApp;
