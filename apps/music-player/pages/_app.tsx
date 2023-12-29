import './styles.css';

import { PlayerFeature } from '@workspace/player/feature/player';
import { BottomNav } from '@workspace/ui-kit/ui';
import { icons } from 'lucide-react';
import { AppProps } from 'next/app';
import Head from 'next/head';

const NAV_ITEMS = [
  {
    href: '#',
    icon: 'Home',
  },
  {
    href: '#',
    icon: 'Search',
  },
  {
    href: '#',
    icon: 'Compass',
  },
  {
    href: '#',
    icon: 'Library',
  },
] satisfies { href: string; icon: keyof typeof icons }[];

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to music-player!</title>
      </Head>
      <main className="min-h-screen bg-background">
        <Component {...pageProps} />
        <div className="fixed bottom-0 w-full">
          <PlayerFeature />
          <BottomNav navItems={NAV_ITEMS} />
        </div>
      </main>
    </>
  );
}

export default CustomApp;
