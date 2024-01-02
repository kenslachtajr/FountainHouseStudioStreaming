import { PlayerActions, PlayerSelectors } from '@workspace/player/data-access';
import { PlayerContentFeature } from '@workspace/player/feature/player-content';
import { PlayerPreviewFeature } from '@workspace/player/feature/player-preview';
import React from 'react';
import { useGlobalAudioPlayer } from 'react-use-audio-player';
import { useSnapshot } from 'reactish-state';

/* eslint-disable-next-line */
export interface PlayerShellFeatureProps {}

export const PlayerShellFeature: React.FC<PlayerShellFeatureProps> = () => {
  const { load } = useGlobalAudioPlayer();
  const currentSong = useSnapshot(PlayerSelectors.selectCurrentSong);

  React.useEffect(() => {
    if (!currentSong) return;
    load(currentSong.url, {
      autoplay: true,
      onend: PlayerActions.nextSong,
      html5: true,
    });
  }, [currentSong, load]);

  return (
    <PlayerPreviewFeature>
      <PlayerContentFeature />
    </PlayerPreviewFeature>
  );
};
