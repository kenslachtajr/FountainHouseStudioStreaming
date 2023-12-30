import { HYMNS_AND_CLASSICS } from '@workspace/player/util';
import { selector, state } from 'reactish-state';

type Song = (typeof HYMNS_AND_CLASSICS)[number];

type PlayerState = {
  currentSong?: Song;
  queue: Song[];
};

const initialState: PlayerState = {
  currentSong: HYMNS_AND_CLASSICS[0],
  queue: HYMNS_AND_CLASSICS,
};

const playerState = state(initialState, (set, get) => ({
  nextSong: () => {
    const { currentSong, queue } = get();
    const prevIdx = queue.findIndex((song) => song.id === currentSong?.id) ?? 0;
    const nextSong = queue.at(prevIdx + 1 ?? 0);
    set((state) => ({
      ...state,
      currentSong: nextSong,
    }));
  },
  prevSong: () => {
    const { currentSong, queue } = get();
    const prevIdx = queue.findIndex((song) => song.id === currentSong?.id) ?? 0;
    const prevSong = queue.at(prevIdx - 1 ?? 0);
    set((state) => ({
      ...state,
      currentSong: prevSong,
    }));
  },
}));

export const PlayerActions = playerState.actions;

// SELECTORS

export const selectCurrentSong = selector(playerState, (s) => s.currentSong);
