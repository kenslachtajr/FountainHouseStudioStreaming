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
          src="https://picsum.photos/400/400?random=1"
        />
        <div>
          <p className="text-xs text-muted-foreground">Hymns And Classics</p>
          <p>Victory In Jesus</p>
          <p className="text-sm text-muted-foreground">Literal Life Church</p>
        </div>
      </DrawerTrigger>
      <PlayerContent />
    </Drawer>
  );
};
