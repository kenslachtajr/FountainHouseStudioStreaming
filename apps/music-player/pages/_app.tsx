import './styles.css';

import { PlayerFeature } from '@workspace/player/feature/player';
import { AppProps } from 'next/app';
import Head from 'next/head';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to music-player!</title>
      </Head>
      <main>
        <Component {...pageProps} />
        <PlayerFeature />
      </main>
    </>
  );
}

export default CustomApp;
