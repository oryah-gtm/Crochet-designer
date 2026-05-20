import React from 'react';

interface IconProps {
  color: string;
  size?: number;
}

// Each icon has a `*Paths` component (raw SVG elements, no outer <svg>)
// and a `*Icon` component (full <svg> for the palette).
// GrannySquare embeds Paths directly via <g transform> for crisp, properly-scaled rendering.

// ── Hearts & Love ──────────────────────────────────────────────────────────

export const HeartPaths: React.FC<{ color: string }> = ({ color }) => (
  <path
    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
    fill={color} stroke={color} strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"
  />
);
export const HeartIcon: React.FC<IconProps> = ({ color, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <HeartPaths color={color} />
  </svg>
);

// ── Bow / Ribbon ───────────────────────────────────────────────────────────

export const BowPaths: React.FC<{ color: string }> = ({ color }) => (
  <>
    <path d="M12 12 C10 8, 3 6, 3 10 C3 14, 10 14, 12 12Z" fill={color} stroke={color} strokeWidth="0.3" strokeLinejoin="round" />
    <path d="M12 12 C14 8, 21 6, 21 10 C21 14, 14 14, 12 12Z" fill={color} stroke={color} strokeWidth="0.3" strokeLinejoin="round" />
    <path d="M12 12 L7 20" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M12 12 L17 20" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="12" r="2.5" fill={color} stroke="white" strokeWidth="0.5" opacity="0.9" />
  </>
);
export const BowIcon: React.FC<IconProps> = ({ color, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <BowPaths color={color} />
  </svg>
);

// ── Star ───────────────────────────────────────────────────────────────────

export const StarPaths: React.FC<{ color: string }> = ({ color }) => (
  <path
    d="M12 2l2.93 6.26L22 9.27l-5.5 5.01 1.67 7.22L12 18l-6.17 3.5 1.67-7.22L2 9.27l7.07-1.01L12 2z"
    fill={color} stroke={color} strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"
  />
);
export const StarIcon: React.FC<IconProps> = ({ color, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <StarPaths color={color} />
  </svg>
);

// ── Flower (6-petal) ───────────────────────────────────────────────────────

export const FlowerPaths: React.FC<{ color: string }> = ({ color }) => (
  <>
    <ellipse cx="12" cy="5.5" rx="3" ry="4.5" fill={color} opacity="0.9" />
    <ellipse cx="12" cy="18.5" rx="3" ry="4.5" fill={color} opacity="0.9" />
    <ellipse cx="5" cy="12" rx="4.5" ry="3" fill={color} opacity="0.9" />
    <ellipse cx="19" cy="12" rx="4.5" ry="3" fill={color} opacity="0.9" />
    <ellipse cx="7" cy="7" rx="3.2" ry="4.5" transform="rotate(-45 7 7)" fill={color} opacity="0.9" />
    <ellipse cx="17" cy="7" rx="3.2" ry="4.5" transform="rotate(45 17 7)" fill={color} opacity="0.9" />
    <ellipse cx="7" cy="17" rx="3.2" ry="4.5" transform="rotate(45 7 17)" fill={color} opacity="0.9" />
    <ellipse cx="17" cy="17" rx="3.2" ry="4.5" transform="rotate(-45 17 17)" fill={color} opacity="0.9" />
    <circle cx="12" cy="12" r="3.8" fill="white" opacity="0.9" />
    <circle cx="12" cy="12" r="2.2" fill={color} />
  </>
);
export const FlowerIcon: React.FC<IconProps> = ({ color, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <FlowerPaths color={color} />
  </svg>
);

// ── Rose ───────────────────────────────────────────────────────────────────

export const RosePaths: React.FC<{ color: string }> = ({ color }) => (
  <>
    {/* Outer petals */}
    <path d="M12 4 C8 4, 4 7, 4 11 C4 15, 7 18, 10 19 C8 17, 7 14, 8 11 C9 8, 11 6, 12 4Z" fill={color} opacity="0.75" />
    <path d="M12 4 C16 4, 20 7, 20 11 C20 15, 17 18, 14 19 C16 17, 17 14, 16 11 C15 8, 13 6, 12 4Z" fill={color} opacity="0.75" />
    <path d="M12 20 C8 20, 4 17, 5 13 C6 11, 8 12, 10 14 C11 16, 11 18, 12 20Z" fill={color} opacity="0.85" />
    <path d="M12 20 C16 20, 20 17, 19 13 C18 11, 16 12, 14 14 C13 16, 13 18, 12 20Z" fill={color} opacity="0.85" />
    {/* Inner petals */}
    <path d="M12 7 C10 8, 8 10, 9 13 C10 15, 12 16, 12 16 C12 16, 14 15, 15 13 C16 10, 14 8, 12 7Z" fill={color} />
    {/* Center */}
    <circle cx="12" cy="13" r="2.5" fill="white" opacity="0.3" />
    {/* Stem */}
    <line x1="12" y1="20" x2="12" y2="23" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </>
);
export const RoseIcon: React.FC<IconProps> = ({ color, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <RosePaths color={color} />
  </svg>
);

// ── Tulip ──────────────────────────────────────────────────────────────────

export const TulipPaths: React.FC<{ color: string }> = ({ color }) => (
  <>
    {/* Stem */}
    <line x1="12" y1="15" x2="12" y2="23" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    {/* Left leaf */}
    <path d="M12 18 C10 16, 6 15, 7 18 C8 20, 12 19, 12 18Z" fill={color} opacity="0.7" />
    {/* Right leaf */}
    <path d="M12 18 C14 16, 18 15, 17 18 C16 20, 12 19, 12 18Z" fill={color} opacity="0.7" />
    {/* Left petal */}
    <path d="M9 14 C7 10, 7 5, 10 4 C11 7, 10 11, 12 13 C10 14, 9 14, 9 14Z" fill={color} opacity="0.9" />
    {/* Right petal */}
    <path d="M15 14 C17 10, 17 5, 14 4 C13 7, 14 11, 12 13 C14 14, 15 14, 15 14Z" fill={color} opacity="0.9" />
    {/* Center petal */}
    <path d="M12 3 C10 6, 10 10, 12 13 C14 10, 14 6, 12 3Z" fill={color} />
  </>
);
export const TulipIcon: React.FC<IconProps> = ({ color, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <TulipPaths color={color} />
  </svg>
);

// ── Daisy ──────────────────────────────────────────────────────────────────

export const DaisyPaths: React.FC<{ color: string }> = ({ color }) => (
  <>
    {/* 12 narrow petals */}
    {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle) => (
      <ellipse
        key={angle}
        cx="12" cy="5.5" rx="1.3" ry="5"
        transform={`rotate(${angle} 12 12)`}
        fill={color} opacity="0.85"
      />
    ))}
    {/* Yellow center */}
    <circle cx="12" cy="12" r="3.5" fill="#FFD54F" />
    <circle cx="12" cy="12" r="2" fill="#F9A825" />
  </>
);
export const DaisyIcon: React.FC<IconProps> = ({ color, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <DaisyPaths color={color} />
  </svg>
);

// ── Sunflower ──────────────────────────────────────────────────────────────

export const SunflowerPaths: React.FC<{ color: string }> = ({ color }) => (
  <>
    {/* Petals */}
    {[0,45,90,135,180,225,270,315].map((angle) => (
      <ellipse
        key={angle}
        cx="12" cy="4.5" rx="2" ry="4.5"
        transform={`rotate(${angle} 12 12)`}
        fill={color} opacity="0.9"
      />
    ))}
    {/* Dark brown center */}
    <circle cx="12" cy="12" r="5" fill="#5D4037" />
    <circle cx="12" cy="12" r="3.5" fill="#4E342E" />
    {/* Seed dots */}
    {[[-1.5,-1.5],[1.5,-1.5],[0,0],[-1.5,1.5],[1.5,1.5]].map(([dx,dy], i) => (
      <circle key={i} cx={12+dx} cy={12+dy} r="0.7" fill="#8D6E63" opacity="0.8" />
    ))}
  </>
);
export const SunflowerIcon: React.FC<IconProps> = ({ color, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <SunflowerPaths color={color} />
  </svg>
);

// ── Cherry Blossom ─────────────────────────────────────────────────────────

export const CherryBlossomPaths: React.FC<{ color: string }> = ({ color }) => (
  <>
    {/* 5 rounded petals */}
    {[0,72,144,216,288].map((angle) => (
      <ellipse
        key={angle}
        cx="12" cy="6" rx="2.8" ry="5"
        transform={`rotate(${angle} 12 12)`}
        fill={color} opacity="0.85"
      />
    ))}
    {/* Center */}
    <circle cx="12" cy="12" r="3" fill="white" opacity="0.9" />
    <circle cx="12" cy="12" r="1.5" fill={color} opacity="0.7" />
    {/* Stamens */}
    {[0,60,120,180,240,300].map((a) => {
      const rad = (a * Math.PI) / 180;
      return (
        <line key={a}
          x1="12" y1="12"
          x2={12 + Math.cos(rad) * 2.5} y2={12 + Math.sin(rad) * 2.5}
          stroke={color} strokeWidth="0.6" strokeLinecap="round"
        />
      );
    })}
  </>
);
export const CherryBlossomIcon: React.FC<IconProps> = ({ color, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <CherryBlossomPaths color={color} />
  </svg>
);

// ── Butterfly ──────────────────────────────────────────────────────────────

export const ButterflyPaths: React.FC<{ color: string }> = ({ color }) => (
  <>
    <path d="M12 11 C9 7, 2 5, 2 9 C2 13, 9 13, 12 11Z" fill={color} opacity="0.9" stroke={color} strokeWidth="0.3" />
    <path d="M12 11 C15 7, 22 5, 22 9 C22 13, 15 13, 12 11Z" fill={color} opacity="0.9" stroke={color} strokeWidth="0.3" />
    <path d="M12 13 C9 13, 3 15, 4 18 C5 20.5, 10 19, 12 13Z" fill={color} opacity="0.75" stroke={color} strokeWidth="0.3" />
    <path d="M12 13 C15 13, 21 15, 20 18 C19 20.5, 14 19, 12 13Z" fill={color} opacity="0.75" stroke={color} strokeWidth="0.3" />
    <rect x="11.2" y="8" width="1.6" height="9" rx="0.8" fill={color} />
    <circle cx="12" cy="7.2" r="1.5" fill={color} />
    <line x1="11.5" y1="6.5" x2="8.5" y2="3.5" stroke={color} strokeWidth="1" strokeLinecap="round" />
    <line x1="12.5" y1="6.5" x2="15.5" y2="3.5" stroke={color} strokeWidth="1" strokeLinecap="round" />
    <circle cx="8.2" cy="3.2" r="0.9" fill={color} />
    <circle cx="15.8" cy="3.2" r="0.9" fill={color} />
  </>
);
export const ButterflyIcon: React.FC<IconProps> = ({ color, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ButterflyPaths color={color} />
  </svg>
);

// ── Moon ───────────────────────────────────────────────────────────────────

export const MoonPaths: React.FC<{ color: string }> = ({ color }) => (
  <path
    d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
    fill={color} stroke={color} strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"
  />
);
export const MoonIcon: React.FC<IconProps> = ({ color, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <MoonPaths color={color} />
  </svg>
);

// ── Snowflake ──────────────────────────────────────────────────────────────

export const SnowflakePaths: React.FC<{ color: string }> = ({ color }) => (
  <>
    <line x1="12" y1="2" x2="12" y2="22" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="2" y1="12" x2="22" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="12" y1="5" x2="9" y2="2" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    <line x1="12" y1="5" x2="15" y2="2" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    <line x1="12" y1="19" x2="9" y2="22" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    <line x1="12" y1="19" x2="15" y2="22" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    <line x1="5" y1="12" x2="2" y2="9" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    <line x1="5" y1="12" x2="2" y2="15" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    <line x1="19" y1="12" x2="22" y2="9" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    <line x1="19" y1="12" x2="22" y2="15" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="12" cy="12" r="2" fill={color} />
  </>
);
export const SnowflakeIcon: React.FC<IconProps> = ({ color, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <SnowflakePaths color={color} />
  </svg>
);

// ── Leaf ───────────────────────────────────────────────────────────────────

export const LeafPaths: React.FC<{ color: string }> = ({ color }) => (
  <>
    <path
      d="M6.5 21C6.5 21 3 17.5 3 12.5C3 7.5 8 3 12 3C16 3 21 7.5 21 12.5C21 17.5 17.5 21 17.5 21L12 17L6.5 21Z"
      fill={color} stroke={color} strokeWidth="0.5"
    />
    <line x1="12" y1="4" x2="12" y2="20" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
    <line x1="12" y1="10" x2="8" y2="13" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
    <line x1="12" y1="14" x2="16" y2="11" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
  </>
);
export const LeafIcon: React.FC<IconProps> = ({ color, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <LeafPaths color={color} />
  </svg>
);

// ── Diamond ────────────────────────────────────────────────────────────────

export const DiamondPaths: React.FC<{ color: string }> = ({ color }) => (
  <>
    <path
      d="M12 2L22 12L12 22L2 12L12 2Z"
      fill={color} stroke={color} strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"
    />
    <path d="M12 5L19 12L12 19L5 12L12 5Z" fill="white" opacity="0.18" />
    <line x1="12" y1="2" x2="12" y2="22" stroke="white" strokeWidth="0.6" opacity="0.3" />
    <line x1="2" y1="12" x2="22" y2="12" stroke="white" strokeWidth="0.6" opacity="0.3" />
  </>
);
export const DiamondIcon: React.FC<IconProps> = ({ color, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <DiamondPaths color={color} />
  </svg>
);

// ── Clover ─────────────────────────────────────────────────────────────────

export const CloverPaths: React.FC<{ color: string }> = ({ color }) => (
  <>
    <circle cx="8.5" cy="8.5" r="4.2" fill={color} opacity="0.9" />
    <circle cx="15.5" cy="8.5" r="4.2" fill={color} opacity="0.9" />
    <circle cx="8.5" cy="15.5" r="4.2" fill={color} opacity="0.9" />
    <circle cx="15.5" cy="15.5" r="4.2" fill={color} opacity="0.9" />
    <circle cx="12" cy="12" r="2.5" fill={color} />
    <line x1="12" y1="14" x2="12" y2="22" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M9 20 Q12 19 15 20" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />
  </>
);
export const CloverIcon: React.FC<IconProps> = ({ color, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <CloverPaths color={color} />
  </svg>
);

// ── Sun ────────────────────────────────────────────────────────────────────

export const SunPaths: React.FC<{ color: string }> = ({ color }) => (
  <>
    <circle cx="12" cy="12" r="4.8" fill={color} stroke={color} strokeWidth="0.5" />
    <line x1="12" y1="2" x2="12" y2="5.5" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="12" y1="18.5" x2="12" y2="22" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="2" y1="12" x2="5.5" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="18.5" y1="12" x2="22" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="4.93" y1="4.93" x2="7.35" y2="7.35" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="16.65" y1="16.65" x2="19.07" y2="19.07" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="19.07" y1="4.93" x2="16.65" y2="7.35" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="7.35" y1="16.65" x2="4.93" y2="19.07" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </>
);
export const SunIcon: React.FC<IconProps> = ({ color, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <SunPaths color={color} />
  </svg>
);

// ── Crown ──────────────────────────────────────────────────────────────────

export const CrownPaths: React.FC<{ color: string }> = ({ color }) => (
  <>
    <path
      d="M3 20 L3 14 L7.5 9 L12 14 L16.5 9 L21 14 L21 20 Z"
      fill={color} stroke={color} strokeWidth="0.5" strokeLinejoin="round"
    />
    <rect x="3" y="20" width="18" height="2.5" rx="1" fill={color} />
    <circle cx="12" cy="13.5" r="1.8" fill="white" opacity="0.7" />
    <circle cx="7.5" cy="15.5" r="1.2" fill="white" opacity="0.5" />
    <circle cx="16.5" cy="15.5" r="1.2" fill="white" opacity="0.5" />
  </>
);
export const CrownIcon: React.FC<IconProps> = ({ color, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <CrownPaths color={color} />
  </svg>
);

// ── Mushroom ───────────────────────────────────────────────────────────────

export const MushroomPaths: React.FC<{ color: string }> = ({ color }) => (
  <>
    {/* Cap */}
    <path d="M4 13 C4 7, 8 3, 12 3 C16 3, 20 7, 20 13 Z" fill={color} />
    {/* Cap spots */}
    <circle cx="9" cy="8" r="1.8" fill="white" opacity="0.8" />
    <circle cx="14.5" cy="7" r="1.4" fill="white" opacity="0.8" />
    <circle cx="12" cy="11" r="1.2" fill="white" opacity="0.75" />
    {/* Gills / underside */}
    <path d="M4 13 Q8 16, 12 15 Q16 16, 20 13" fill="white" opacity="0.3" />
    {/* Stem */}
    <rect x="9" y="14" width="6" height="8" rx="2" fill="white" opacity="0.9" />
    {/* Stem detail */}
    <line x1="12" y1="16" x2="12" y2="21" stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
  </>
);
export const MushroomIcon: React.FC<IconProps> = ({ color, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <MushroomPaths color={color} />
  </svg>
);

// ── Rainbow ────────────────────────────────────────────────────────────────

export const RainbowPaths: React.FC<{ color: string }> = ({ color: _color }) => (
  <>
    <path d="M2 14 A10 10 0 0 1 22 14" stroke="#E53935" strokeWidth="2.2" fill="none" strokeLinecap="round" />
    <path d="M4 14 A8 8 0 0 1 20 14"  stroke="#FB8C00" strokeWidth="2.2" fill="none" strokeLinecap="round" />
    <path d="M6 14 A6 6 0 0 1 18 14"  stroke="#FDD835" strokeWidth="2.2" fill="none" strokeLinecap="round" />
    <path d="M8 14 A4 4 0 0 1 16 14"  stroke="#43A047" strokeWidth="2.2" fill="none" strokeLinecap="round" />
    <path d="M10 14 A2 2 0 0 1 14 14" stroke="#1E88E5" strokeWidth="2.2" fill="none" strokeLinecap="round" />
    {/* Clouds */}
    <circle cx="3" cy="15" r="2.5" fill="white" />
    <circle cx="21" cy="15" r="2.5" fill="white" />
    <circle cx="5" cy="16" r="2" fill="white" />
    <circle cx="19" cy="16" r="2" fill="white" />
  </>
);
export const RainbowIcon: React.FC<IconProps> = ({ color, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <RainbowPaths color={color} />
  </svg>
);

// ── Lightning ──────────────────────────────────────────────────────────────

export const LightningPaths: React.FC<{ color: string }> = ({ color }) => (
  <path
    d="M13 2L4 14H11L9 22L20 10H13L13 2Z"
    fill={color} stroke={color} strokeWidth="0.5" strokeLinejoin="round"
  />
);
export const LightningIcon: React.FC<IconProps> = ({ color, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <LightningPaths color={color} />
  </svg>
);

// ── Bee ────────────────────────────────────────────────────────────────────

export const BeePaths: React.FC<{ color: string }> = ({ color }) => (
  <>
    {/* Wings */}
    <ellipse cx="8" cy="9" rx="5" ry="3" fill="white" opacity="0.8" stroke={color} strokeWidth="0.5" />
    <ellipse cx="16" cy="9" rx="5" ry="3" fill="white" opacity="0.8" stroke={color} strokeWidth="0.5" />
    {/* Body */}
    <ellipse cx="12" cy="14" rx="4" ry="6" fill={color} />
    {/* Stripes */}
    <rect x="8" y="12" width="8" height="2" rx="0.5" fill="#333" opacity="0.7" />
    <rect x="8" y="15" width="8" height="2" rx="0.5" fill="#333" opacity="0.7" />
    <rect x="8.5" y="18" width="7" height="1.5" rx="0.5" fill="#333" opacity="0.6" />
    {/* Head */}
    <circle cx="12" cy="7.5" r="3" fill={color} />
    {/* Eyes */}
    <circle cx="10.8" cy="7" r="0.8" fill="#333" />
    <circle cx="13.2" cy="7" r="0.8" fill="#333" />
    {/* Antennae */}
    <line x1="11" y1="5.5" x2="8" y2="3" stroke={color} strokeWidth="1" strokeLinecap="round" />
    <line x1="13" y1="5.5" x2="16" y2="3" stroke={color} strokeWidth="1" strokeLinecap="round" />
    <circle cx="8" cy="3" r="0.8" fill={color} />
    <circle cx="16" cy="3" r="0.8" fill={color} />
  </>
);
export const BeeIcon: React.FC<IconProps> = ({ color, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <BeePaths color={color} />
  </svg>
);

// ── Feather ────────────────────────────────────────────────────────────────

export const FeatherPaths: React.FC<{ color: string }> = ({ color }) => (
  <>
    {/* Quill */}
    <path d="M3 21 L18 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    {/* Vane left */}
    <path d="M18 6 C14 8, 8 12, 3 21 C7 18, 12 14, 15 10 Z" fill={color} opacity="0.7" />
    {/* Vane right */}
    <path d="M18 6 C22 4, 22 10, 18 14 C16 16, 10 19, 3 21 C9 17, 15 12, 18 6Z" fill={color} opacity="0.9" />
    {/* Tip */}
    <circle cx="18" cy="6" r="1" fill={color} />
  </>
);
export const FeatherIcon: React.FC<IconProps> = ({ color, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <FeatherPaths color={color} />
  </svg>
);

// ── Cherry ─────────────────────────────────────────────────────────────────

export const CherryPaths: React.FC<{ color: string }> = ({ color }) => (
  <>
    {/* Stems */}
    <path d="M8 14 C8 10, 12 8, 12 5" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <path d="M16 14 C16 10, 12 8, 12 5" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" />
    {/* Leaf */}
    <path d="M12 5 C14 3, 17 4, 16 7 C15 6, 13 5.5, 12 5Z" fill={color} opacity="0.7" />
    {/* Cherries */}
    <circle cx="8" cy="16" r="4" fill="#E53935" />
    <circle cx="16" cy="16" r="4" fill="#C62828" />
    {/* Shine */}
    <circle cx="6.5" cy="14.5" r="1.2" fill="white" opacity="0.45" />
    <circle cx="14.5" cy="14.5" r="1.2" fill="white" opacity="0.45" />
  </>
);
export const CherryIcon: React.FC<IconProps> = ({ color, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <CherryPaths color={color} />
  </svg>
);

// ── Paw Print ─────────────────────────────────────────────────────────────

export const PawPaths: React.FC<{ color: string }> = ({ color }) => (
  <>
    {/* Main pad */}
    <ellipse cx="12" cy="14" rx="5" ry="4.5" fill={color} />
    {/* Toe pads */}
    <circle cx="7" cy="9.5" r="2.2" fill={color} />
    <circle cx="11" cy="7.5" r="2.2" fill={color} />
    <circle cx="15" cy="8" r="2.2" fill={color} />
    <circle cx="18.2" cy="10.5" r="2" fill={color} />
  </>
);
export const PawIcon: React.FC<IconProps> = ({ color, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <PawPaths color={color} />
  </svg>
);

// ── Yarn Ball ─────────────────────────────────────────────────────────────

export const YarnBallPaths: React.FC<{ color: string }> = ({ color }) => (
  <>
    {/* Ball */}
    <circle cx="12" cy="13" r="9" fill={color} />
    {/* Yarn strands */}
    <path d="M4 10 Q12 6, 20 10" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.5" />
    <path d="M3 14 Q12 10, 21 14" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.5" />
    <path d="M4 18 Q12 14, 20 18" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.5" />
    <path d="M8 5 Q10 13, 8 21" stroke="white" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.4" />
    <path d="M16 5 Q14 13, 16 21" stroke="white" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.4" />
    {/* Loose tail */}
    <path d="M12 4 C14 3, 16 2, 17 1" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
  </>
);
export const YarnBallIcon: React.FC<IconProps> = ({ color, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <YarnBallPaths color={color} />
  </svg>
);

// ── Shell ─────────────────────────────────────────────────────────────────

export const ShellPaths: React.FC<{ color: string }> = ({ color }) => (
  <>
    {/* Main shell shape */}
    <path d="M12 3 C7 3, 3 8, 3 14 C3 19, 7 22, 12 22 C17 22, 21 19, 21 14 C21 8, 17 3, 12 3Z" fill={color} />
    {/* Ribs */}
    <path d="M12 3 L12 22" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    <path d="M12 3 C9 6, 7 10, 8 22" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
    <path d="M12 3 C15 6, 17 10, 16 22" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
    <path d="M12 3 C8 8, 5 12, 5 22" stroke="white" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
    <path d="M12 3 C16 8, 19 12, 19 22" stroke="white" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
    {/* Tip highlight */}
    <circle cx="12" cy="4" r="1.5" fill="white" opacity="0.5" />
  </>
);
export const ShellIcon: React.FC<IconProps> = ({ color, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ShellPaths color={color} />
  </svg>
);

// ── Cactus ────────────────────────────────────────────────────────────────

export const CactusPaths: React.FC<{ color: string }> = ({ color }) => (
  <>
    {/* Main trunk */}
    <rect x="9.5" y="5" width="5" height="17" rx="2.5" fill={color} />
    {/* Left arm */}
    <rect x="4" y="10" width="6" height="4.5" rx="2" fill={color} />
    <rect x="4" y="10" width="4.5" height="8" rx="2" fill={color} />
    {/* Right arm */}
    <rect x="14" y="8" width="6" height="4.5" rx="2" fill={color} />
    <rect x="15.5" y="8" width="4.5" height="8" rx="2" fill={color} />
    {/* Spines */}
    <line x1="12" y1="8" x2="10" y2="7" stroke="white" strokeWidth="0.7" strokeLinecap="round" opacity="0.7" />
    <line x1="12" y1="12" x2="10.5" y2="11" stroke="white" strokeWidth="0.7" strokeLinecap="round" opacity="0.7" />
    <line x1="12" y1="16" x2="10" y2="15" stroke="white" strokeWidth="0.7" strokeLinecap="round" opacity="0.7" />
    <line x1="12" y1="8" x2="14" y2="7" stroke="white" strokeWidth="0.7" strokeLinecap="round" opacity="0.7" />
    {/* Pot */}
    <path d="M8 22 L16 22 L15 24 L9 24 Z" fill={color} opacity="0.6" />
  </>
);
export const CactusIcon: React.FC<IconProps> = ({ color, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <CactusPaths color={color} />
  </svg>
);

// ── Pinwheel ──────────────────────────────────────────────────────────────

export const PinwheelPaths: React.FC<{ color: string }> = ({ color }) => (
  <>
    {/* Stick */}
    <line x1="12" y1="12" x2="12" y2="23" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    {/* Four blades */}
    <path d="M12 12 C12 8, 8 4, 6 6 C4 8, 8 11, 12 12Z" fill={color} opacity="0.9" />
    <path d="M12 12 C16 12, 20 8, 18 6 C16 4, 13 8, 12 12Z" fill={color} opacity="0.65" />
    <path d="M12 12 C12 16, 16 20, 18 18 C20 16, 16 13, 12 12Z" fill={color} opacity="0.9" />
    <path d="M12 12 C8 12, 4 16, 6 18 C8 20, 11 16, 12 12Z" fill={color} opacity="0.65" />
    {/* Center pin */}
    <circle cx="12" cy="12" r="1.8" fill="white" />
    <circle cx="12" cy="12" r="0.9" fill={color} />
  </>
);
export const PinwheelIcon: React.FC<IconProps> = ({ color, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <PinwheelPaths color={color} />
  </svg>
);

// ── Dragonfly ─────────────────────────────────────────────────────────────

export const DragonflyPaths: React.FC<{ color: string }> = ({ color }) => (
  <>
    {/* Upper wings */}
    <ellipse cx="8" cy="10" rx="6" ry="2.8" transform="rotate(-15 8 10)" fill={color} opacity="0.6" />
    <ellipse cx="16" cy="10" rx="6" ry="2.8" transform="rotate(15 16 10)" fill={color} opacity="0.6" />
    {/* Lower wings */}
    <ellipse cx="8.5" cy="13" rx="5" ry="2.2" transform="rotate(-10 8.5 13)" fill={color} opacity="0.45" />
    <ellipse cx="15.5" cy="13" rx="5" ry="2.2" transform="rotate(10 15.5 13)" fill={color} opacity="0.45" />
    {/* Body */}
    <ellipse cx="12" cy="12" rx="1.5" ry="8" fill={color} />
    {/* Head */}
    <circle cx="12" cy="5.5" r="2.5" fill={color} />
    {/* Eyes */}
    <circle cx="10.8" cy="5" r="1" fill="white" opacity="0.8" />
    <circle cx="13.2" cy="5" r="1" fill="white" opacity="0.8" />
    {/* Body segments */}
    {[14,16,18].map(y => (
      <line key={y} x1="10.5" y1={y} x2="13.5" y2={y} stroke="white" strokeWidth="0.6" opacity="0.4" />
    ))}
  </>
);
export const DragonflyIcon: React.FC<IconProps> = ({ color, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <DragonflyPaths color={color} />
  </svg>
);

// ── Anchor ────────────────────────────────────────────────────────────────

export const AnchorPaths: React.FC<{ color: string }> = ({ color }) => (
  <>
    {/* Crossbar */}
    <line x1="6" y1="8" x2="18" y2="8" stroke={color} strokeWidth="2" strokeLinecap="round" />
    {/* Ring */}
    <circle cx="12" cy="5" r="2.5" stroke={color} strokeWidth="2" fill="none" />
    {/* Shaft */}
    <line x1="12" y1="8" x2="12" y2="20" stroke={color} strokeWidth="2" strokeLinecap="round" />
    {/* Flukes */}
    <path d="M12 20 C9 20, 6 18, 6 15" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M12 20 C15 20, 18 18, 18 15" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
    <circle cx="6" cy="15" r="1.5" fill={color} />
    <circle cx="18" cy="15" r="1.5" fill={color} />
  </>
);
export const AnchorIcon: React.FC<IconProps> = ({ color, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <AnchorPaths color={color} />
  </svg>
);

// ── Icon registry ──────────────────────────────────────────────────────────

export const ICON_LIST = [
  // Shapes & love
  { id: 'heart',         name: 'Heart',       component: HeartIcon,        paths: HeartPaths },
  { id: 'bow',           name: 'Bow',         component: BowIcon,          paths: BowPaths },
  { id: 'star',          name: 'Star',        component: StarIcon,         paths: StarPaths },
  { id: 'diamond',       name: 'Diamond',     component: DiamondIcon,      paths: DiamondPaths },
  { id: 'lightning',     name: 'Lightning',   component: LightningIcon,    paths: LightningPaths },
  { id: 'crown',         name: 'Crown',       component: CrownIcon,        paths: CrownPaths },
  // Flowers
  { id: 'flower',        name: 'Flower',      component: FlowerIcon,       paths: FlowerPaths },
  { id: 'rose',          name: 'Rose',        component: RoseIcon,         paths: RosePaths },
  { id: 'tulip',         name: 'Tulip',       component: TulipIcon,        paths: TulipPaths },
  { id: 'daisy',         name: 'Daisy',       component: DaisyIcon,        paths: DaisyPaths },
  { id: 'sunflower',     name: 'Sunflower',   component: SunflowerIcon,    paths: SunflowerPaths },
  { id: 'cherryblossom', name: 'Blossom',     component: CherryBlossomIcon,paths: CherryBlossomPaths },
  // Nature
  { id: 'sun',           name: 'Sun',         component: SunIcon,          paths: SunPaths },
  { id: 'moon',          name: 'Moon',        component: MoonIcon,         paths: MoonPaths },
  { id: 'snowflake',     name: 'Snowflake',   component: SnowflakeIcon,    paths: SnowflakePaths },
  { id: 'rainbow',       name: 'Rainbow',     component: RainbowIcon,      paths: RainbowPaths },
  { id: 'leaf',          name: 'Leaf',        component: LeafIcon,         paths: LeafPaths },
  { id: 'clover',        name: 'Clover',      component: CloverIcon,       paths: CloverPaths },
  { id: 'cactus',        name: 'Cactus',      component: CactusIcon,       paths: CactusPaths },
  { id: 'mushroom',      name: 'Mushroom',    component: MushroomIcon,     paths: MushroomPaths },
  { id: 'shell',         name: 'Shell',       component: ShellIcon,        paths: ShellPaths },
  // Animals & insects
  { id: 'butterfly',     name: 'Butterfly',   component: ButterflyIcon,    paths: ButterflyPaths },
  { id: 'bee',           name: 'Bee',         component: BeeIcon,          paths: BeePaths },
  { id: 'dragonfly',     name: 'Dragonfly',   component: DragonflyIcon,    paths: DragonflyPaths },
  { id: 'paw',           name: 'Paw',         component: PawIcon,          paths: PawPaths },
  // Misc / craft
  { id: 'feather',       name: 'Feather',     component: FeatherIcon,      paths: FeatherPaths },
  { id: 'cherry',        name: 'Cherry',      component: CherryIcon,       paths: CherryPaths },
  { id: 'pinwheel',      name: 'Pinwheel',    component: PinwheelIcon,     paths: PinwheelPaths },
  { id: 'yarnball',      name: 'Yarn Ball',   component: YarnBallIcon,     paths: YarnBallPaths },
  { id: 'anchor',        name: 'Anchor',      component: AnchorIcon,       paths: AnchorPaths },
] as const;

export type IconId = typeof ICON_LIST[number]['id'];

export function getIconComponent(id: string): React.FC<{ color: string; size?: number }> | null {
  const found = ICON_LIST.find(i => i.id === id);
  return found ? found.component : null;
}

export function getIconPaths(id: string): React.FC<{ color: string }> | null {
  const found = ICON_LIST.find(i => i.id === id);
  return found ? found.paths : null;
}
