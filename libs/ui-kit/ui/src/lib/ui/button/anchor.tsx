import { Prettify, twx } from '@workspace/ui-kit/util';
import Link from 'next/link';
import { TwcComponentProps } from 'react-twc';

import { ButtonVariants, buttonVariants } from './variants';

export type AnchorProps = Prettify<
  TwcComponentProps<typeof Link> & ButtonVariants & { external?: boolean }
>;

export const Anchor = twx(Link).attrs<AnchorProps>(handleAttrs)(handleStyling);

Anchor.displayName = 'Anchor';

function handleAttrs({ external }: AnchorProps) {
  return external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
}

function handleStyling({ $variant, $size }: AnchorProps) {
  return buttonVariants({ $variant, $size });
}
