import React from 'react';
import { adjustHexColor } from '../utils';
import { getIconComponent } from '../icons';

interface GrannySquareProps {
  fillColor: string;
  borderColor: string;
  iconId?: string;
  iconColor: string;
  size?: number;
}

const GrannySquare: React.FC<GrannySquareProps> = ({
  fillColor,
  borderColor,
  iconId,
  iconColor,
  size = 80,
}) => {
  const darkerFill = adjustHexColor(fillColor, -30);
  const lighterFill = adjustHexColor(fillColor, 30);
  const centerDark = adjustHexColor(fillColor, -45);

  const IconComponent = iconId ? getIconComponent(iconId) : null;
  const iconSize = Math.round(size * 0.38);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      {/* Outer border/join color background */}
      <rect x="0" y="0" width="100" height="100" rx="4" fill={borderColor} />

      {/* Main fill area inset ~8px */}
      <rect x="8" y="8" width="84" height="84" rx="3" fill={fillColor} />

      {/* Cross pattern - horizontal arm (lighter) */}
      <rect x="8" y="38" width="84" height="24" rx="2" fill={lighterFill} opacity="0.6" />

      {/* Cross pattern - vertical arm (lighter) */}
      <rect x="38" y="8" width="24" height="84" rx="2" fill={lighterFill} opacity="0.6" />

      {/* Center square (darker) */}
      <rect x="38" y="38" width="24" height="24" rx="2" fill={centerDark} opacity="0.7" />

      {/* Corner cluster puffs - top-left */}
      <rect x="10" y="10" width="22" height="22" rx="6" fill={darkerFill} opacity="0.75" />
      <rect x="13" y="13" width="16" height="16" rx="4" fill={darkerFill} opacity="0.5" />
      <circle cx="21" cy="21" r="4" fill={fillColor} opacity="0.8" />

      {/* Corner cluster puffs - top-right */}
      <rect x="68" y="10" width="22" height="22" rx="6" fill={darkerFill} opacity="0.75" />
      <rect x="71" y="13" width="16" height="16" rx="4" fill={darkerFill} opacity="0.5" />
      <circle cx="79" cy="21" r="4" fill={fillColor} opacity="0.8" />

      {/* Corner cluster puffs - bottom-left */}
      <rect x="10" y="68" width="22" height="22" rx="6" fill={darkerFill} opacity="0.75" />
      <rect x="13" y="71" width="16" height="16" rx="4" fill={darkerFill} opacity="0.5" />
      <circle cx="21" cy="79" r="4" fill={fillColor} opacity="0.8" />

      {/* Corner cluster puffs - bottom-right */}
      <rect x="68" y="68" width="22" height="22" rx="6" fill={darkerFill} opacity="0.75" />
      <rect x="71" y="71" width="16" height="16" rx="4" fill={darkerFill} opacity="0.5" />
      <circle cx="79" cy="79" r="4" fill={fillColor} opacity="0.8" />

      {/* Small connector circles where arms meet border */}
      <circle cx="50" cy="10" r="3" fill={darkerFill} opacity="0.6" />
      <circle cx="50" cy="90" r="3" fill={darkerFill} opacity="0.6" />
      <circle cx="10" cy="50" r="3" fill={darkerFill} opacity="0.6" />
      <circle cx="90" cy="50" r="3" fill={darkerFill} opacity="0.6" />

      {/* Small yarn texture dots on the cross */}
      <circle cx="50" cy="30" r="2" fill={lighterFill} opacity="0.8" />
      <circle cx="50" cy="70" r="2" fill={lighterFill} opacity="0.8" />
      <circle cx="30" cy="50" r="2" fill={lighterFill} opacity="0.8" />
      <circle cx="70" cy="50" r="2" fill={lighterFill} opacity="0.8" />

      {/* Icon overlay in center */}
      {IconComponent && (
        <foreignObject
          x={(100 - iconSize) / 2}
          y={(100 - iconSize) / 2}
          width={iconSize}
          height={iconSize}
        >
          <div
            style={{
              width: iconSize,
              height: iconSize,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IconComponent color={iconColor} size={iconSize} />
          </div>
        </foreignObject>
      )}
    </svg>
  );
};

export default GrannySquare;
