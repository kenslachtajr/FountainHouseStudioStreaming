import { twx } from '@workspace/ui-kit/util';

export const Card = twx(
  'div'
)`rounded-lg border bg-card text-card-foreground shadow-sm`;

Card.displayName = 'Card';

export const CardHeader = twx('div')`flex flex-col space-y-1.5 p-6`;

CardHeader.displayName = 'CardHeader';

export const CardTitle = twx(
  'h3'
)`text-2xl font-semibold leading-none tracking-tight`;

CardTitle.displayName = 'CardTitle';

export const CardDescription = twx('p')`text-sm text-muted-foreground`;

CardDescription.displayName = 'CardDescription';

export const CardContent = twx('div')`p-6 pt-0`;

CardContent.displayName = 'CardContent';

export const CardFooter = twx('div')`flex items-center p-6 pt-0`;

CardFooter.displayName = 'CardFooter';
