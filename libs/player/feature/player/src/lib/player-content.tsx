import {
  Button,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@workspace/ui-kit/ui';

export const PlayerContent = () => {
  return (
    <DrawerContent>
      <div className="w-full max-w-sm mx-auto">
        <DrawerHeader>
          <DrawerTitle>Move Goal</DrawerTitle>
          <DrawerDescription>Set your daily activity goal.</DrawerDescription>
        </DrawerHeader>
        <div className="p-4 pb-0">
          <div className="flex items-center justify-center space-x-2">
            <div className="flex-1 text-center">
              <div className="font-bold tracking-tighter text-7xl">
                {/* {goal} */}
              </div>
              <div className="text-[0.70rem] uppercase text-muted-foreground">
                Calories/day
              </div>
            </div>
          </div>
          <div className="mt-3 h-[120px]"></div>
        </div>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose asChild>
            <Button $variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </div>
    </DrawerContent>
  );
};
