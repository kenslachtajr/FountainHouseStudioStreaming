import { formatAudioTime } from '@workspace/player/util';
import React from 'react';
import { useGlobalAudioPlayer } from 'react-use-audio-player';

export const PlayerTimeLabel = () => {
  const [pos, setPos] = React.useState(0);
  const { duration, getPosition } = useGlobalAudioPlayer();

  React.useEffect(() => {
    const i = setInterval(() => {
      setPos(getPosition());
    }, 500);

    return () => clearInterval(i);
  }, [getPosition]);

  return (
    <div className="inline-flex justify-between w-full text-xs">
      <span>{formatAudioTime(pos)}</span>
      <span>{formatAudioTime(duration)}</span>
    </div>
  );
};
