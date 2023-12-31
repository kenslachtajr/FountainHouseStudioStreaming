import { PlayerSelectors } from '@workspace/player/data-access';
import { Drawer, DrawerTrigger, ImageWithFallback } from '@workspace/ui-kit/ui';
import { useSnapshot } from 'reactish-state';

import { PlayerContent } from './player-content';

export const PlayerPreview = () => {
  const currentSong = useSnapshot(PlayerSelectors.selectCurrentSong);
  return (
    <Drawer>
      <DrawerTrigger className="flex items-center justify-start flex-grow gap-3">
        <ImageWithFallback
          priority
          alt="Album Cover"
          className="object-cover w-20 h-20"
          src={currentSong!.cover}
        />
        <div className="text-left">
          <p className="text-xs text-muted-foreground">{currentSong!.album}</p>
          <p>{currentSong!.title}</p>
          <p className="text-sm text-muted-foreground">{currentSong!.artist}</p>
        </div>
      </DrawerTrigger>
      <PlayerContent />
    </Drawer>
  );
};
