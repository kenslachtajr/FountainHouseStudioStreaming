import React from 'react';

import { PlayerDrawerFooter } from './player-drawer-footer';
import { PlayerDrawerHeader } from './player-drawer-header';

export const PlayerContentFeature: React.FC<unknown> = () => {
  return (
    <div className="w-full max-w-sm mx-auto mt-5 space-y-7">
      <PlayerDrawerHeader />
      <PlayerDrawerFooter />
    </div>
  );
};
