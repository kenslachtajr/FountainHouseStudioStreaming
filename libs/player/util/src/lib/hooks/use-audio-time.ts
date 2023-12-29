import * as React from 'react';
import { useGlobalAudioPlayer } from 'react-use-audio-player';

export function useAudioTime() {
  const frameRef = React.useRef<number>();
  const [pos, setPos] = React.useState(0);
  const { getPosition } = useGlobalAudioPlayer();

  React.useEffect(() => {
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
