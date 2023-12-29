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
import { useGlobalAudioPlayer } from 'react-use-audio-player';

import { useAudioTime } from './player';

export const PlayerContent = () => {
  const time = useAudioTime();
  const { pause, togglePlayPause, playing, seek, load, duration } =
    useGlobalAudioPlayer();

  return (
    <DrawerContent>
      <div className="w-full max-w-sm mx-auto mt-5 space-y-7">
        <DrawerHeader className="space-y-3">
          <div className="min-h-[13rem]">
            <ImageWithFallback
              priority
              alt="Album Cover"
              className="object-cover w-full h-full rounded"
              src="https://images.squarespace-cdn.com/content/v1/5a42cae932601ee830efbab8/1696190992725-HXSIM6E7NL6BE572IDO2/photo_2023-10-01+16.08.39.jpeg?format=2500w"
            />
          </div>
          <div>
            <DrawerDescription>Hymns And Classics</DrawerDescription>
            <DrawerTitle className="leading-loose">
              Victory In Jesus
            </DrawerTitle>
            <DrawerDescription>Literal Life Church</DrawerDescription>
          </div>
        </DrawerHeader>
        <DrawerFooter className="space-y-5">
          <Slider
            value={[(time / duration) * 100]}
            defaultValue={[25, 75]}
            step={10}
            minStepsBetweenThumbs={1}
            max={100}
            onValueCommit={togglePlayPause}
            onValueChange={([val]) => {
              pause();
              seek(val * 1.5);
            }}
          />
          <div className="flex items-center justify-between">
            <Button $size="icon" $variant="ghost">
              <LucideIcon iconName="Shuffle" size={20} />
            </Button>
            <Button $size="icon" $variant="ghost">
              <LucideIcon iconName="SkipBack" size={25} />
            </Button>
            <Button $size="icon" $variant="ghost" onClick={togglePlayPause}>
              <LucideIcon iconName={playing ? 'Pause' : 'Play'} size={30} />
            </Button>
            <Button
              $size="icon"
              $variant="ghost"
              onClick={() =>
                load(HYMNS_AND_CLASSICS[randomIntFromInterval(0, 19)].url, {
                  autoplay: true,
                })
              }
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

function randomIntFromInterval(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const HYMNS_AND_CLASSICS = [
  {
    id: '1-hac-llc-victory-in-jesus',
    artist: 'Literal Life Church',
    title: 'Victory In Jesus',
    url: '/music/hymns-and-classics/victory-in-jesus.mp3',
  },
  {
    id: '2-hac-llc-what-a-friend-we-have-in-jesus',
    artist: 'Literal Life Church',
    title: 'What A Friend We Have In Jesus',
    url: '/music/hymns-and-classics/what-a-friend-we-have-in-jesus.mp3',
  },
  {
    id: '3-hac-llc-how-great-thou-art',
    artist: 'Literal Life Church',
    title: 'How Great Thou Art',
    url: '/music/hymns-and-classics/how-great-thou-art.mp3',
  },
  {
    id: '4-hac-llc-blessed-assurance',
    artist: 'Literal Life Church',
    title: 'Blessed Assurance',
    url: '/music/hymns-and-classics/blessed-assurance.mp3',
  },
  {
    id: '5-hac-llc-tis-so-sweet',
    artist: 'Literal Life Church',
    title: "'Tis So Sweet",
    url: '  /tis-so-sweet.mp3',
  },
  {
    id: '6-hac-llc-lord-i-need-thee',
    artist: 'Literal Life Church',
    title: 'Lord I Need Thee',
    url: '/music/hymns-and-classics/lord-i-need-thee.mp3',
  },
  {
    id: '7-hac-llc-old-rugged-cross',
    artist: 'Literal Life Church',
    title: 'Old Rugged Cross',
    url: '/music/hymns-and-classics/old-rugged-cross.mp3',
  },
  {
    id: '8-hac-llc-the-blood-will-never-loose-its-power',
    artist: 'Literal Life Church',
    title: 'The Blood Will Never Lose Its Power',
    url: '/music/hymns-and-classics/the-blood-will-never-lose-its-power.mp3',
  },
  {
    id: '9-hac-llc-power-in-the-blood',
    artist: 'Literal Life Church',
    title: 'Power In The Blood',
    url: '/music/hymns-and-classics/power-in-the-blood.mp3',
  },
  {
    id: '10-hac-llc-great-is-thy-faithfulness',
    artist: 'Literal Life Church',
    title: 'Great Is Thy Faithfulness',
    url: '/music/hymns-and-classics/great-is-thy-faithfulness.mp3',
  },
  {
    id: '11-hac-llc-when-we-all-get-to-heaven',
    artist: 'Literal Life Church',
    title: 'When We All Get To Heaven',
    url: '/music/hymns-and-classics/when-we-all-get-to-heaven.mp3',
  },
  {
    id: '12-hac-llc-just-a-closer-walk',
    artist: 'Literal Life Church',
    title: 'Just A Closer Walk',
    url: '/music/hymns-and-classics/just-a-closer-walk.mp3',
  },
  {
    id: '13-hac-llc-the-love-of-god',
    artist: 'Literal Life Church',
    title: 'The Love Of God',
    url: '/music/hymns-and-classics/the-love-of-god.mp3',
  },
  {
    id: '14-hac-llc-well-talk-it-over',
    artist: 'Literal Life Church',
    title: "We'll Talk It Over",
    url: '/music/hymns-and-classics/well-talk-it-over.mp3',
  },
  {
    id: '15-hac-llc-glory-land',
    artist: 'Literal Life Church',
    title: 'Glory Land',
    url: '/music/hymns-and-classics/glory-land.mp3',
  },
  {
    id: '16-hac-llc-in-the-garden',
    artist: 'Literal Life Church',
    title: 'In The Garden',
    url: '/music/hymns-and-classics/in-the-garden.mp3',
  },
  {
    id: '17-hac-llc-it-is-well',
    artist: 'Literal Life Church',
    title: 'It Is Well',
    url: '/music/hymns-and-classics/it-is-well.mp3',
  },
  {
    id: '18-hac-llc-i-stand-amazed',
    artist: 'Literal Life Church',
    title: 'I Stand Amazed',
    url: '/music/hymns-and-classics/i-stand-amazed.mp3',
  },
  {
    id: '19-hac-llc-ill-fly-away',
    artist: 'Literal Life Church',
    title: "I'll Fly Away",
    url: '/music/hymns-and-classics/ill-fly-away.mp3',
  },
];
