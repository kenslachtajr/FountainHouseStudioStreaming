import {
  Button,
  Card,
  ImageWithFallback,
  LucideIcon,
  Progress,
} from '@workspace/ui-kit/ui';

export function Index() {
  return (
    <div>
      <Card className="absolute bottom-0 w-full shadow">
        <Progress value={75} />
        <div className="grid h-full grid-cols-3 grid-rows-1 gap-1">
          <div className="flex items-center justify-start gap-3">
            <ImageWithFallback
              alt="Album Cover"
              className="object-cover w-24 h-24"
              src="https://picsum.photos/400/400"
            />
            <div>
              <p>Song Album</p>
              <p>Song Title</p>
              <p>Song Artist</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1.5 px-3">
            <Button $size="icon" $variant="ghost">
              <LucideIcon iconName="Shuffle" size={20} />
            </Button>
            <Button $size="icon" $variant="ghost">
              <LucideIcon iconName="SkipBack" size={25} />
            </Button>
            <Button $size="icon" $variant="ghost" className="w-12 h-12 mx-2.5">
              <LucideIcon iconName="Play" size={35} />
            </Button>
            <Button $size="icon" $variant="ghost">
              <LucideIcon iconName="SkipForward" size={25} />
            </Button>
            <Button $size="icon" $variant="ghost">
              <LucideIcon iconName="Repeat" size={20} />
            </Button>
          </div>
          <div className="flex items-center justify-end pr-6">actions</div>
        </div>
      </Card>
    </div>
  );
}

export default Index;
