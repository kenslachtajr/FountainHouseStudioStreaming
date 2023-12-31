import { PlayerSelectors } from '@workspace/player/data-access';
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  ImageWithFallback,
} from '@workspace/ui-kit/ui';
import React from 'react';
import { useSnapshot } from 'reactish-state';

interface PlayerPreviewDrawerTriggerProps {}

export const PlayerPreviewDrawerTrigger: React.FC<
  React.PropsWithChildren<PlayerPreviewDrawerTriggerProps>
> = ({ children }) => {
  const currentSong = useSnapshot(PlayerSelectors.selectCurrentSong);

  return (
    <Drawer>
      <DrawerTrigger
        disabled={!currentSong}
        className="flex items-center justify-start flex-grow gap-3"
      >
        {currentSong ? (
          <>
            <ImageWithFallback
              priority
              alt="Album Cover"
              className="object-cover w-20 h-20"
              src={currentSong!.cover}
            />
            <div className="text-left">
              <p className="text-xs text-muted-foreground">
                {currentSong!.album}
              </p>
              <p>{currentSong!.title}</p>
              <p className="text-sm text-muted-foreground">
                {currentSong!.artist}
              </p>
            </div>
          </>
        ) : (
          <div className="flex items-center h-20 ml-3">
            <h4>Lets Listen To Some Music!</h4>
          </div>
        )}
      </DrawerTrigger>
      <DrawerContent>{children}</DrawerContent>
    </Drawer>
  );
};
