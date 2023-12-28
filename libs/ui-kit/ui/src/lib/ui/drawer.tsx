import { twx } from '@workspace/ui-kit/util';
import * as React from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';

export const Drawer = twx(DrawerPrimitive.Root).attrs({
  shouldScaleBackground: true,
})``;

Drawer.displayName = 'Drawer';

export const DrawerTrigger = DrawerPrimitive.Trigger;

export const DrawerPortal = DrawerPrimitive.Portal;

export const DrawerClose = DrawerPrimitive.Close;

export const DrawerOverlay = twx(
  DrawerPrimitive.Overlay
)`fixed inset-0 z-50 bg-black/80`;

DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

export const DrawerPrimitiveContent = twx(
  DrawerPrimitive.Content
)`fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background`;

export const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitiveContent ref={ref} className={className} {...props}>
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
    </DrawerPrimitiveContent>
  </DrawerPortal>
));

DrawerContent.displayName = 'DrawerContent';

export const DrawerHeader = twx.div`grid gap-1.5 p-4 text-center sm:text-left`;

DrawerHeader.displayName = 'DrawerHeader';

export const DrawerFooter = twx.div`mt-auto flex flex-col gap-2 p-4`;

DrawerFooter.displayName = 'DrawerFooter';

export const DrawerTitle = twx(
  DrawerPrimitive.Title
)`text-lg font-semibold leading-none tracking-tight`;

DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

export const DrawerDescription = twx(
  DrawerPrimitive.Description
)`text-sm text-muted-foreground`;

DrawerDescription.displayName = DrawerPrimitive.Description.displayName;
