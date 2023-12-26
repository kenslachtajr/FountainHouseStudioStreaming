import { Prettify, twx } from '@workspace/ui-kit/util';
import { TwcComponentProps } from 'react-twc';

import { ButtonVariants, buttonVariants } from './variants';

export type ButtonProps = Prettify<
  TwcComponentProps<'button'> & ButtonVariants
>;

export const Button = twx.button<ButtonProps>(({ variant, size }) =>
  buttonVariants({ variant, size })
);

Button.displayName = 'Button';
