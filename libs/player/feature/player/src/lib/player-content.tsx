import { PlayerActions, PlayerSelectors } from '@workspace/player/data-access';
import { useAudioTime } from '@workspace/player/util';
import {
  Button,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  ImageWithFallback,
  LucideIcon,
  Slider,
} from '@workspace/ui-kit/ui';
import React, { useEffect } from 'react';
import { useGlobalAudioPlayer } from 'react-use-audio-player';
import { useSnapshot } from 'reactish-state';

import { PlayerTimeLabel } from './player-time-label';

export const PlayerContent = () => {
  const currentSong = useSnapshot(PlayerSelectors.selectCurrentSong);
  const time = useAudioTime();
  const { pause, togglePlayPause, playing, seek, duration, load } =
    useGlobalAudioPlayer();

  useEffect(() => {
    if (!currentSong) return;
    load(currentSong.url, {
      autoplay: true,
    });
  }, [currentSong, load]);

  return (
    <DrawerContent>
      <div className="w-full max-w-sm mx-auto mt-5 space-y-7">
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
        <DrawerFooter className="space-y-5">
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
          <PlayerTimeLabel />
          <div className="flex items-center justify-between">
            <Button $size="icon" $variant="ghost">
              <LucideIcon iconName="Shuffle" size={20} />
            </Button>
            <Button
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
      </div>
    </DrawerContent>
  );
};
