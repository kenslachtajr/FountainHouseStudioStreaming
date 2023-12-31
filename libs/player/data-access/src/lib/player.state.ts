import { HYMNS_AND_CLASSICS } from '@workspace/player/util';
import { state } from 'reactish-state';

type Song = (typeof HYMNS_AND_CLASSICS)[number];

type PlayerState = {
  currentSong?: Song;
  queue: Song[];
};

const initialState: PlayerState = {
  currentSong: HYMNS_AND_CLASSICS[0],
  queue: HYMNS_AND_CLASSICS,
};

export const PlayerState = state(initialState, (set, get) => ({
  playSong: (song: Song) => {
    const { currentSong, queue } = get();
    const songIndex = queue.findIndex((s) => s.id === song.id);

    if (songIndex !== -1) {
      const updatedQueue = [...queue];
      const movedSong = updatedQueue.splice(songIndex, 1)[0];
      updatedQueue.splice(
        queue.findIndex((s) => s.id === currentSong?.id) + 1,
        0,
        movedSong
      );

      set((state) => ({
        ...state,
        currentSong: song,
        queue: updatedQueue,
      }));
    } else {
      const prevIdx = queue.findIndex((s) => s.id === currentSong?.id) ?? 0;
      set({
        currentSong: song,
        queue: [
          ...queue.slice(0, prevIdx + 1),
          song,
          ...queue.slice(prevIdx + 1),
        ],
      });
    }
  },
  nextSong: () => {
    const { currentSong, queue } = get();

    if (!currentSong || queue.indexOf(currentSong) === queue.length - 1) {
      return;
    }

    const currentIndex = queue.findIndex((s) => s.id === currentSong?.id) ?? 0;
    const nextIndex = (currentIndex + 1) % queue.length;
    const nextSong = queue[nextIndex];
    set((state) => ({
      ...state,
      currentSong: nextSong,
    }));
  },
  prevSong: () => {
    const { currentSong, queue } = get();
    const currentIndex = queue.findIndex((s) => s.id === currentSong?.id) ?? 0;
    const prevIndex = (currentIndex - 1 + queue.length) % queue.length;
    const prevSong = queue[prevIndex];
    set((state) => ({
      ...state,
      currentSong: prevSong,
    }));
  },
}));

export const { actions: PlayerActions } = PlayerState;
