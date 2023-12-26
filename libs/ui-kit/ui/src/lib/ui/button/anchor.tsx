import { Prettify, twx } from '@workspace/ui-kit/util';
import { TwcComponentProps } from 'react-twc';

import { ButtonVariants, buttonVariants } from './variants';

export type AnchorProps = Prettify<
  TwcComponentProps<'a'> & ButtonVariants & { external: boolean }
>;

export const Anchor = twx.a.attrs<AnchorProps>(handleAttrs)(handleStyling);

Anchor.displayName = 'Anchor';

function handleAttrs({ external }: AnchorProps) {
  return external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
}

function handleStyling({ variant, size }: AnchorProps) {
  return buttonVariants({ variant, size });
}
