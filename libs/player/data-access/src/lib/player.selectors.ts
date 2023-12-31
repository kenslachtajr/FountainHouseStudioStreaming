import { selector } from 'reactish-state';

import { PlayerState } from './player.state';

export const selectCurrentSong = selector(PlayerState, (s) => s.currentSong);
