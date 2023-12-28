import { Button, LucideIcon, Progress } from '@workspace/ui-kit/ui';

import { PlayerPreview } from './player-preview';

export const PlayerFeature = () => {
  return (
    <div className="fixed bottom-0 w-full shadow">
      <Progress value={75} />
      <div className="flex items-center justify-between h-full gap-1">
        <PlayerPreview />
        <div className="pr-9">
          <Button $size="icon" $variant="ghost">
            <LucideIcon iconName="Play" size={28} />
          </Button>
        </div>
      </div>
    </div>
  );
};
