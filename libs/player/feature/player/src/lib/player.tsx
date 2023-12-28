import { Button, LucideIcon, Progress } from '@workspace/ui-kit/ui';
import { useEffect, useRef, useState } from 'react';
import { useGlobalAudioPlayer } from 'react-use-audio-player';

import { PlayerPreview } from './player-preview';

export const PlayerFeature = () => {
  const time = useAudioTime();
  const { load, togglePlayPause, playing } = useGlobalAudioPlayer();

  useEffect(() => {
    load('/victory-in-jesus.mp3', {
      autoplay: false,
    });
  }, [load]);

  return (
    <div className="fixed bottom-0 w-full bg-white shadow">
      <Progress value={(time / 150) * 100} />
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

export function useAudioTime() {
  const frameRef = useRef<number>();
  const [pos, setPos] = useState(0);
  const { getPosition } = useGlobalAudioPlayer();

  useEffect(() => {
    const animate = () => {
      setPos(getPosition());
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [getPosition]);

  return pos;
}
