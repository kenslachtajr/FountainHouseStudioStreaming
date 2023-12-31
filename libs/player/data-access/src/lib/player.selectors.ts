import { selector } from 'reactish-state';

import { PlayerState } from './player.state';

export const selectCurrentSong = selector(PlayerState, (s) => s.currentSong);
export const selectQueue = selector(PlayerState, (s) => s.queue);

export const selectIsFirstSong = selector(
  selectQueue,
  selectCurrentSong,
  (queue, currentSong) => !currentSong || queue.indexOf(currentSong) === 0
);
export const selectIsLastSong = selector(
  selectQueue,
  selectCurrentSong,
  (queue, currentSong) =>
    !currentSong || queue.indexOf(currentSong) === queue.length - 1
);
