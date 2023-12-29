import { useAudioTime } from '@workspace/player/util';
import { Button, LucideIcon, Progress } from '@workspace/ui-kit/ui';
import { useEffect } from 'react';
import { useGlobalAudioPlayer } from 'react-use-audio-player';

import { PlayerPreview } from './player-preview';

export const PlayerFeature = () => {
  const time = useAudioTime();
  const { load, togglePlayPause, playing, duration } = useGlobalAudioPlayer();

  useEffect(() => {
    load('/music/hymns-and-classics/victory-in-jesus.mp3', {
      autoplay: false,
    });
  }, [load]);

  return (
    <div className="fixed bottom-0 w-full bg-white shadow">
      <Progress value={(time / duration) * 100} />
      <div className="flex items-center justify-between h-full gap-1">
        <PlayerPreview />
        <div className="pr-9">
          <Button onClick={togglePlayPause} $size="icon" $variant="ghost">
            <LucideIcon iconName={playing ? 'Pause' : 'Play'} size={28} />
          </Button>
        </div>
      </div>
    </div>
  );
};
