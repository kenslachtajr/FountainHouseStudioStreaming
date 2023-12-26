# ui-kit-ui

## ShadCN Components

We are using [shadcn/ui](https://ui.shadcn.com/docs) for this project.
Instead of installing a UI library we are "copying and pasting" components from the
ShadCN website. We are currently using the CLI to do the copy pasting for us.
That's why we have a ui folder under lib.
The CLI for some reason puts all of the components under that.

Example Usage:
`npx shadcn-ui@latest add`

That command will give a list of components to add, you can also just add it to the command.

`npx shadcn-ui@latest add button`

## React TWC

We will also use [react-twc](https://react-twc.vercel.app/) (we created a wrapper "twx" refer to util docs). This will simplify the components since shadcn uses a lot of TS that makes things hard to read.

## Putting It Together

Example: the Avatar component can go the first code snippet to the second.
Follow this pattern when creating new components for the ui-kit.

```typescript
const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
))
```

```typescript
export const Avatar = twx(
  AvatarPrimitive.Root
)`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full`;
```
