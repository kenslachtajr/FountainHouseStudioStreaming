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
  const { pause, togglePlayPause, playing, seek } = useGlobalAudioPlayer();

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
            value={[(time / 150) * 100]}
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
            <Button $size="icon" $variant="ghost">
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
