import { PlayerActions } from '@workspace/player/data-access';
import { HYMNS_AND_CLASSICS } from '@workspace/player/util';
import { WOUNDED } from '@workspace/player/util';
import { SOUL_CALLED_MUSIC_VOL_1 } from '@workspace/player/util';
import { ImageWithFallback, ScrollArea, ScrollBar } from '@workspace/ui-kit/ui';

// export function Index() {
//   import { HYMNS_AND_CLASSICS, WOUNDED, SOUL_CALLED_MUSIC_VOL_1 } from '@workspace/player/util';
//   import { ImageWithFallback, ScrollArea, ScrollBar } from '@workspace/ui-kit/ui';

  const ALBUMS = [
    { title: 'Hymns And Classics', data: HYMNS_AND_CLASSICS },
    { title: 'Wounded, Still A Soldier', data: WOUNDED },
    { title: 'Soul Called Music Vol. 1', data: SOUL_CALLED_MUSIC_VOL_1 },
  ];

  export function Index() {
    return (
      <div className='scroll-container' style={{ overflowY: 'scroll', width: '100%' }}>
        <div className="flex container flex-col h-[calc(100svh-200px)]">
          {ALBUMS.map((albumCategory) => (
            <div key={albumCategory.title}>
              <h3 className="mt-5 ml-3">{albumCategory.title}</h3>
              <ScrollArea className="w-full mb-5 whitespace-nowrap">
              <div className="flex p-4">
                {albumCategory.data.map((album) => (
                  <figure
                    key={album.id}
                    className="p-3 rounded-md cursor-pointer shrink-0 hover:bg-stone-50"
                    onClick={() => PlayerActions.playSong(album)}
                  >
                    <div className="overflow-hidden rounded-md">
                      <ImageWithFallback
                        src={album.cover}
                        alt={`Photo by ${album.artist}`}
                        className="aspect-[3/4] h-44 w-44 object-cover"
                      />
                    </div>
                    <figcaption className="pt-2 text-xs truncate w-44 text-muted-foreground">
                      {album.artist}
                      <br />
                      <span className="font-semibold truncate text-foreground">
                        {album.title}
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </div>
    );
  }

export default Index;
