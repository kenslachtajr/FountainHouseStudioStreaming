import { Drawer, DrawerTrigger, ImageWithFallback } from '@workspace/ui-kit/ui';

import { PlayerContent } from './player-content';

export const PlayerPreview = () => {
  return (
    <Drawer>
      <DrawerTrigger className="flex items-center justify-start flex-grow gap-3">
        <ImageWithFallback
          priority
          alt="Album Cover"
          className="object-cover w-20 h-20"
          src="https://picsum.photos/400/400"
        />
        <div>
          <p className="text-xs text-muted-foreground">Song Album</p>
          <p>Song Title</p>
          <p className="text-sm text-muted-foreground">Song Artist</p>
        </div>
      </DrawerTrigger>
      <PlayerContent />
    </Drawer>
  );
};
