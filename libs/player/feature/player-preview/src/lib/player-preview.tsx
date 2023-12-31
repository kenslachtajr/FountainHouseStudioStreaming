import { useAudioTime } from '@workspace/player/util';
import { Button, LucideIcon, Progress } from '@workspace/ui-kit/ui';
import React from 'react';
import { useGlobalAudioPlayer } from 'react-use-audio-player';

import { PlayerPreviewDrawerTrigger } from './player-preview-drawer-trigger';

/* eslint-disable-next-line */
export interface PlayerPreviewProps {}

export const PlayerPreviewFeature: React.FC<
  React.PropsWithChildren<PlayerPreviewProps>
> = ({ children }) => {
  const time = useAudioTime();
  const { togglePlayPause, playing, duration } = useGlobalAudioPlayer();

  return (
    <div className="w-full bg-white border-b">
      <Progress value={(time / duration) * 100} />
      <div className="flex items-center justify-between h-full gap-1">
        <PlayerPreviewDrawerTrigger>{children}</PlayerPreviewDrawerTrigger>
        <div className="pr-9">
          <Button onClick={togglePlayPause} $size="icon" $variant="ghost">
            <LucideIcon iconName={playing ? 'Pause' : 'Play'} size={28} />
          </Button>
        </div>
      </div>
    </div>
  );
};
