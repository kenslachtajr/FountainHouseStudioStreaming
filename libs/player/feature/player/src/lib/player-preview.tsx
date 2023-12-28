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
          src="https://images.squarespace-cdn.com/content/v1/5a42cae932601ee830efbab8/1696190992725-HXSIM6E7NL6BE572IDO2/photo_2023-10-01+16.08.39.jpeg?format=2500w"
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
