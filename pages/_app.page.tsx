import { Provider } from 'react-redux';
import { AnimateSharedLayout } from 'framer-motion';

import type { AppProps } from 'next/app';
import { store } from '../redux/store';

import Layout from '../layout/Layout';

import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AnimateSharedLayout>
        <Layout />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </Provider>
  );
}

export default MyApp;
