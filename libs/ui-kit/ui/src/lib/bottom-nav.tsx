import { icons } from 'lucide-react';
import React from 'react';

import { Anchor } from './ui/button/anchor';
import { LucideIcon } from './ui/lucide-icon';

interface BottomNavProps {
  navItems: {
    href: string;
    icon: keyof typeof icons;
  }[];
}

export const BottomNav: React.FC<BottomNavProps> = ({ navItems }) => {
  const [active, setActive] = React.useState<number>(0);

  return (
    <div className="flex justify-between p-3">
      {navItems.map((item, idx) => (
        <Anchor
          key={idx + item.icon}
          href={item.href}
          className="w-12 h-12 rounded-full"
          $size="icon"
          $variant={active === idx ? 'secondary' : 'ghost'}
          onClick={() => setActive(idx)}
        >
          <LucideIcon iconName={item.icon} size={25} />
        </Anchor>
      ))}
    </div>
  );
};
