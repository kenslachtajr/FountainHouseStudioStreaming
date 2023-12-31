import { PlayerActions, PlayerSelectors } from '@workspace/player/data-access';
import { PlayerContent } from '@workspace/player/feature/player';
import { useAudioTime } from '@workspace/player/util';
import {
  Button,
  Drawer,
  DrawerContent,
  DrawerTrigger,
  ImageWithFallback,
  LucideIcon,
  Progress,
} from '@workspace/ui-kit/ui';
import React, { PropsWithChildren } from 'react';
import { useGlobalAudioPlayer } from 'react-use-audio-player';
import { useSnapshot } from 'reactish-state';

/* eslint-disable-next-line */
export interface PlayerShellFeatureProps {}

export const PlayerShellFeature = (props: PlayerShellFeatureProps) => {
  const { load } = useGlobalAudioPlayer();
  const currentSong = useSnapshot(PlayerSelectors.selectCurrentSong);

  React.useEffect(() => {
    if (!currentSong) return;
    load(currentSong.url, {
      autoplay: true,
      onend: PlayerActions.nextSong,
    });
  }, [currentSong, load]);

  return (
    <PlayerPreview>
      <PlayerContent />
    </PlayerPreview>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface PlayerPreviewProps {}

const PlayerPreview: React.FC<PropsWithChildren<PlayerPreviewProps>> = ({
  children,
}) => {
  const time = useAudioTime();
  const { togglePlayPause, playing, duration } = useGlobalAudioPlayer();

  return (
    <div className="w-full bg-white border-b">
      <Progress value={(time / duration) * 100} />
      <div className="flex items-center justify-between h-full gap-1">
        <PlayerPreviewTrigger>{children}</PlayerPreviewTrigger>
        <div className="pr-9">
          <Button onClick={togglePlayPause} $size="icon" $variant="ghost">
            <LucideIcon iconName={playing ? 'Pause' : 'Play'} size={28} />
          </Button>
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface PlayerPreviewTriggerProps {}

const PlayerPreviewTrigger: React.FC<
  PropsWithChildren<PlayerPreviewTriggerProps>
> = ({ children }) => {
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
      <DrawerContent>{children}</DrawerContent>
    </Drawer>
  );
};
