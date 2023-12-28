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

export const PlayerContent = () => {
  return (
    <DrawerContent>
      <div className="w-full max-w-sm mx-auto mt-5 space-y-7">
        <DrawerHeader className="space-y-3">
          <div className="min-h-[13rem]">
            <ImageWithFallback
              priority
              alt="Album Cover"
              className="object-cover w-full h-full rounded"
              src="https://picsum.photos/2000/2000?random=1"
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
          <Slider defaultValue={[50]} max={100} step={1} />
          <div className="flex items-center justify-between">
            <Button $size="icon" $variant="ghost">
              <LucideIcon iconName="Shuffle" size={20} />
            </Button>
            <Button $size="icon" $variant="ghost">
              <LucideIcon iconName="SkipBack" size={25} />
            </Button>
            <Button $size="icon" $variant="ghost">
              <LucideIcon iconName="Play" size={30} />
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
