import { PlayerSelectors } from '@workspace/player/data-access';
import {
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  ImageWithFallback,
} from '@workspace/ui-kit/ui';
import { useSnapshot } from 'reactish-state';

export const PlayerDrawerHeader = () => {
  const currentSong = useSnapshot(PlayerSelectors.selectCurrentSong);

  return (
    <DrawerHeader className="space-y-3">
      <div className="min-h-[13rem]">
        <ImageWithFallback
          priority
          alt="Album Cover"
          className="object-cover w-full h-full rounded"
          src={currentSong?.cover ?? ''}
        />
      </div>
      <div>
        <DrawerDescription>{currentSong?.album}</DrawerDescription>
        <DrawerTitle className="leading-loose">
          {currentSong?.title}
        </DrawerTitle>
        <DrawerDescription>{currentSong?.artist}</DrawerDescription>
      </div>
    </DrawerHeader>
  );
};
