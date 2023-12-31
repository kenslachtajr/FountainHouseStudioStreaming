import { formatAudioTime, useAudioTime } from '@workspace/player/util';
import { Slider } from '@workspace/ui-kit/ui';
import React from 'react';
import { useGlobalAudioPlayer } from 'react-use-audio-player';

export const PlayerSlider = () => {
  const time = useAudioTime();
  const { duration, getPosition, pause, seek, togglePlayPause } =
    useGlobalAudioPlayer();

  const [pos, setPos] = React.useState(0);

  React.useEffect(() => {
    const i = setInterval(() => {
      setPos(getPosition());
    }, 500);

    return () => clearInterval(i);
  }, [getPosition]);

  return (
    <div>
      <Slider
        value={[(time / duration) * 100]}
        step={1}
        minStepsBetweenThumbs={1}
        max={100}
        onValueCommit={togglePlayPause}
        onValueChange={([val]) => {
          pause();
          seek(val * (duration / 100));
        }}
      />
      <div className="inline-flex justify-between w-full text-xs">
        <span>{formatAudioTime(pos)}</span>
        <span>{formatAudioTime(duration)}</span>
      </div>
    </div>
  );
};
