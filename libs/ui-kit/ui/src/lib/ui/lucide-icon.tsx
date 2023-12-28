import { icons } from 'lucide-react';
import { ElementType, forwardRef, SVGProps } from 'react';

const sizes = {
  sm: 15,
  md: 20,
  lg: 25,
  xl: 30,
};

interface IconProps extends Partial<SVGProps<SVGSVGElement>> {
  iconName: keyof typeof icons;
  size?: keyof typeof sizes | number;
  color?: string;
  className?: string;
}

export const LucideIcon = forwardRef<HTMLDivElement, IconProps>(
  ({ iconName, size = 'md', color, className, ...props }: IconProps, ref) => {
    const iconSize = typeof size === 'number' ? size : sizes[size];
    const Icon = icons[iconName] as ElementType;
    return <Icon ref={ref} {...props} color={color} size={iconSize} />;
  }
);

LucideIcon.displayName = 'LucideIcon';
