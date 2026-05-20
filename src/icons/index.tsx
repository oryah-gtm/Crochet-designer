import React from 'react';

interface IconProps {
  color: string;
  size?: number;
}

export const HeartIcon: React.FC<IconProps> = ({ color, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      fill={color}
      stroke={color}
      strokeWidth="0.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BowIcon: React.FC<IconProps> = ({ color, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="7" cy="9" rx="5" ry="3.5" fill={color} opacity="0.85" stroke={color} strokeWidth="0.5"/>
    <ellipse cx="17" cy="9" rx="5" ry="3.5" fill={color} opacity="0.85" stroke={color} strokeWidth="0.5"/>
    <ellipse cx="7" cy="15" rx="5" ry="3.5" fill={color} opacity="0.85" stroke={color} strokeWidth="0.5"/>
    <ellipse cx="17" cy="15" rx="5" ry="3.5" fill={color} opacity="0.85" stroke={color} strokeWidth="0.5"/>
    <circle cx="12" cy="12" r="2.5" fill={color} stroke={color} strokeWidth="0.5"/>
  </svg>
);

export const StarIcon: React.FC<IconProps> = ({ color, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2l2.93 6.26L22 9.27l-5.5 5.01 1.67 7.22L12 18l-6.17 3.5 1.67-7.22L2 9.27l7.07-1.01L12 2z"
      fill={color}
      stroke={color}
      strokeWidth="0.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const FlowerIcon: React.FC<IconProps> = ({ color, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="5.5" rx="3" ry="4" fill={color} opacity="0.9"/>
    <ellipse cx="12" cy="18.5" rx="3" ry="4" fill={color} opacity="0.9"/>
    <ellipse cx="5.5" cy="12" rx="4" ry="3" fill={color} opacity="0.9"/>
    <ellipse cx="18.5" cy="12" rx="4" ry="3" fill={color} opacity="0.9"/>
    <ellipse cx="7.2" cy="7.2" rx="3" ry="4" transform="rotate(-45 7.2 7.2)" fill={color} opacity="0.9"/>
    <ellipse cx="16.8" cy="7.2" rx="3" ry="4" transform="rotate(45 16.8 7.2)" fill={color} opacity="0.9"/>
    <circle cx="12" cy="12" r="3.5" fill="white" opacity="0.85"/>
    <circle cx="12" cy="12" r="2" fill={color}/>
  </svg>
);

export const ButterflyIcon: React.FC<IconProps> = ({ color, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12 C10 8, 4 6, 3 10 C2 14, 7 16, 12 12Z" fill={color} opacity="0.85" stroke={color} strokeWidth="0.3"/>
    <path d="M12 12 C14 8, 20 6, 21 10 C22 14, 17 16, 12 12Z" fill={color} opacity="0.85" stroke={color} strokeWidth="0.3"/>
    <path d="M12 12 C10 14, 5 16, 4 20 C5 22, 10 20, 12 12Z" fill={color} opacity="0.7" stroke={color} strokeWidth="0.3"/>
    <path d="M12 12 C14 14, 19 16, 20 20 C19 22, 14 20, 12 12Z" fill={color} opacity="0.7" stroke={color} strokeWidth="0.3"/>
    <ellipse cx="12" cy="12" rx="1" ry="4" fill={color} stroke={color} strokeWidth="0.5"/>
    <circle cx="12" cy="8.5" r="1.2" fill={color}/>
  </svg>
);

export const MoonIcon: React.FC<IconProps> = ({ color, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
      fill={color}
      stroke={color}
      strokeWidth="0.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SnowflakeIcon: React.FC<IconProps> = ({ color, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="12" y1="2" x2="12" y2="22" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="2" y1="12" x2="22" y2="12" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="12" y1="6" x2="9" y2="3" stroke={color} strokeWidth="1" strokeLinecap="round"/>
    <line x1="12" y1="6" x2="15" y2="3" stroke={color} strokeWidth="1" strokeLinecap="round"/>
    <line x1="12" y1="18" x2="9" y2="21" stroke={color} strokeWidth="1" strokeLinecap="round"/>
    <line x1="12" y1="18" x2="15" y2="21" stroke={color} strokeWidth="1" strokeLinecap="round"/>
    <line x1="6" y1="12" x2="3" y2="9" stroke={color} strokeWidth="1" strokeLinecap="round"/>
    <line x1="6" y1="12" x2="3" y2="15" stroke={color} strokeWidth="1" strokeLinecap="round"/>
    <line x1="18" y1="12" x2="21" y2="9" stroke={color} strokeWidth="1" strokeLinecap="round"/>
    <line x1="18" y1="12" x2="21" y2="15" stroke={color} strokeWidth="1" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="1.5" fill={color}/>
  </svg>
);

export const LeafIcon: React.FC<IconProps> = ({ color, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.5 21C6.5 21 3 17.5 3 12.5C3 7.5 8 3 12 3C16 3 21 7.5 21 12.5C21 17.5 17.5 21 17.5 21L12 17L6.5 21Z"
      fill={color}
      stroke={color}
      strokeWidth="0.5"
    />
    <line x1="12" y1="3" x2="12" y2="20" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
    <line x1="12" y1="10" x2="8" y2="13" stroke="white" strokeWidth="0.8" strokeLinecap="round" opacity="0.4"/>
    <line x1="12" y1="14" x2="16" y2="11" stroke="white" strokeWidth="0.8" strokeLinecap="round" opacity="0.4"/>
  </svg>
);

export const DiamondIcon: React.FC<IconProps> = ({ color, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2L22 12L12 22L2 12L12 2Z"
      fill={color}
      stroke={color}
      strokeWidth="0.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M12 5L19 12L12 19L5 12L12 5Z" fill="white" opacity="0.2"/>
    <line x1="12" y1="2" x2="12" y2="22" stroke="white" strokeWidth="0.5" opacity="0.3"/>
    <line x1="2" y1="12" x2="22" y2="12" stroke="white" strokeWidth="0.5" opacity="0.3"/>
  </svg>
);

export const CloverIcon: React.FC<IconProps> = ({ color, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8.5" cy="8.5" r="4" fill={color} opacity="0.9"/>
    <circle cx="15.5" cy="8.5" r="4" fill={color} opacity="0.9"/>
    <circle cx="8.5" cy="15.5" r="4" fill={color} opacity="0.9"/>
    <circle cx="15.5" cy="15.5" r="4" fill={color} opacity="0.9"/>
    <circle cx="12" cy="12" r="2" fill={color}/>
    <line x1="12" y1="14" x2="12" y2="22" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="9" y1="20" x2="15" y2="20" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

export const SunIcon: React.FC<IconProps> = ({ color, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="4.5" fill={color} stroke={color} strokeWidth="0.5"/>
    <line x1="12" y1="2" x2="12" y2="5" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="12" y1="19" x2="12" y2="22" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="2" y1="12" x2="5" y2="12" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="19" y1="12" x2="22" y2="12" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="4.93" y1="4.93" x2="7.05" y2="7.05" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="16.95" y1="16.95" x2="19.07" y2="19.07" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="19.07" y1="4.93" x2="16.95" y2="7.05" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="7.05" y1="16.95" x2="4.93" y2="19.07" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

export const CrownIcon: React.FC<IconProps> = ({ color, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 19h20M3 19L5 10l4.5 4L12 5l2.5 9L19 10l2 9H3Z"
      fill={color}
      stroke={color}
      strokeWidth="0.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="5" r="1.5" fill="white" opacity="0.7"/>
    <circle cx="5" cy="10" r="1.2" fill="white" opacity="0.6"/>
    <circle cx="19" cy="10" r="1.2" fill="white" opacity="0.6"/>
  </svg>
);

export const ICON_LIST = [
  { id: 'heart', name: 'Heart', component: HeartIcon },
  { id: 'bow', name: 'Bow', component: BowIcon },
  { id: 'star', name: 'Star', component: StarIcon },
  { id: 'flower', name: 'Flower', component: FlowerIcon },
  { id: 'butterfly', name: 'Butterfly', component: ButterflyIcon },
  { id: 'moon', name: 'Moon', component: MoonIcon },
  { id: 'snowflake', name: 'Snowflake', component: SnowflakeIcon },
  { id: 'leaf', name: 'Leaf', component: LeafIcon },
  { id: 'diamond', name: 'Diamond', component: DiamondIcon },
  { id: 'clover', name: 'Clover', component: CloverIcon },
  { id: 'sun', name: 'Sun', component: SunIcon },
  { id: 'crown', name: 'Crown', component: CrownIcon },
] as const;

export type IconId = typeof ICON_LIST[number]['id'];

export function getIconComponent(id: string): React.FC<IconProps> | null {
  const found = ICON_LIST.find(i => i.id === id);
  return found ? found.component : null;
}
