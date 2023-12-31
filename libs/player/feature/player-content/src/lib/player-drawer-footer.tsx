import { PlayerActions, PlayerSelectors } from '@workspace/player/data-access';
import { Button, DrawerFooter, LucideIcon } from '@workspace/ui-kit/ui';
import { useGlobalAudioPlayer } from 'react-use-audio-player';
import { useSnapshot } from 'reactish-state';

import { PlayerSlider } from './player-slider';

export const PlayerDrawerFooter = () => {
  const { togglePlayPause, playing } = useGlobalAudioPlayer();
  const isLastSongInQueue = useSnapshot(PlayerSelectors.selectIsLastSong);
  const isFirstSongInQueue = useSnapshot(PlayerSelectors.selectIsFirstSong);

  return (
    <DrawerFooter className="space-y-5">
      <PlayerSlider />

      <div className="flex items-center justify-between">
        <Button $size="icon" $variant="ghost">
          <LucideIcon iconName="Shuffle" size={20} />
        </Button>
        <Button
          disabled={isFirstSongInQueue}
          $size="icon"
          $variant="ghost"
          onClick={PlayerActions.prevSong}
        >
          <LucideIcon iconName="SkipBack" size={25} />
        </Button>
        <Button $size="icon" $variant="ghost" onClick={togglePlayPause}>
          <LucideIcon iconName={playing ? 'Pause' : 'Play'} size={30} />
        </Button>
        <Button
          disabled={isLastSongInQueue}
          $size="icon"
          $variant="ghost"
          onClick={PlayerActions.nextSong}
        >
          <LucideIcon iconName="SkipForward" size={25} />
        </Button>
        <Button $size="icon" $variant="ghost">
          <LucideIcon iconName="Repeat" size={20} />
        </Button>
      </div>
    </DrawerFooter>
  );
};
