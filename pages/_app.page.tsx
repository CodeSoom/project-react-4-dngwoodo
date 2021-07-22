import { Provider } from 'react-redux';
import { AnimateSharedLayout } from 'framer-motion';

import type { AppProps } from 'next/app';
import { store } from '../redux/store';

import Header from '../layout/Header';

import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AnimateSharedLayout>
        <Header />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </Provider>
  );
}

export default MyApp;
