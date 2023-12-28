import * as ProgressPrimitive from '@radix-ui/react-progress';
import { twx } from '@workspace/ui-kit/util';
import * as React from 'react';

const ProgressPrimitiveRoot = twx(
  ProgressPrimitive.Root
)`relative h-1 w-full overflow-hidden bg-secondary`;

const ProgressPrimitiveIndicator = twx(
  ProgressPrimitive.Indicator
)`flex-1 w-full h-full transition-all bg-primary`;

type ProgressProps = React.ComponentPropsWithoutRef<
  typeof ProgressPrimitiveRoot
>;

export const Progress: React.FC<ProgressProps> = ({
  className,
  value,
  ...props
}) => (
  <ProgressPrimitiveRoot className={className} {...props}>
    <ProgressPrimitiveIndicator
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitiveRoot>
);

Progress.displayName = ProgressPrimitive.Root.displayName;
