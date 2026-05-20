import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { HexColorPicker } from 'react-colorful';
import { ICON_LIST } from '../icons';
import { useStore } from '../store';

interface DraggableIconCardProps {
  iconId: string;
  name: string;
  IconComp: React.FC<{ color: string; size?: number }>;
  iconColor: string;
  isSelected: boolean;
  onSelect: () => void;
}

const DraggableIconCard: React.FC<DraggableIconCardProps> = ({
  iconId,
  name,
  IconComp,
  iconColor,
  isSelected,
  onSelect,
}) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: `icon-${iconId}`,
    data: { type: 'icon', iconId },
  });

  const style: React.CSSProperties = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.5 : 1,
    cursor: 'grab',
    zIndex: isDragging ? 999 : 'auto',
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
      className={`flex flex-col items-center gap-1.5 p-2 rounded-xl border transition-all duration-150 cursor-pointer select-none ${
        isSelected
          ? 'border-purple-400 bg-purple-400/20 shadow-md shadow-purple-400/20'
          : 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20'
      }`}
    >
      <div className="w-12 h-12 flex items-center justify-center">
        <IconComp color={iconColor} size={36} />
      </div>
      <span className="text-xs text-slate-400 leading-none text-center">{name}</span>
    </div>
  );
};

const IconPanel: React.FC = () => {
  const selectedIconId = useStore((s) => s.selectedIconId);
  const iconColor = useStore((s) => s.iconColor);
  const setSelectedIconId = useStore((s) => s.setSelectedIconId);
  const setIconColor = useStore((s) => s.setIconColor);
  const activeTool = useStore((s) => s.activeTool);
  const setActiveTool = useStore((s) => s.setActiveTool);
  const applyToAll = useStore((s) => s.applyToAll);

  const [showColorPicker, setShowColorPicker] = React.useState(false);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Icons</p>
        {activeTool === 'icon' && selectedIconId && (
          <button
            onClick={applyToAll}
            className="text-xs bg-purple-500/20 hover:bg-purple-500/40 text-purple-300 hover:text-purple-100 border border-purple-500/30 hover:border-purple-400/60 px-2.5 py-1 rounded-lg transition-all duration-150 font-medium"
          >
            Apply to all
          </button>
        )}
        {activeTool === 'erase' && (
          <button
            onClick={applyToAll}
            className="text-xs bg-red-500/20 hover:bg-red-500/40 text-red-300 hover:text-red-100 border border-red-500/30 hover:border-red-400/60 px-2.5 py-1 rounded-lg transition-all duration-150 font-medium"
          >
            Clear all icons
          </button>
        )}
      </div>

      {/* Eraser option */}
      {activeTool === 'icon' && (
        <button
          onClick={() => {
            setActiveTool('erase');
            setSelectedIconId(null);
          }}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all text-xs text-slate-300"
        >
          <span className="text-lg">🧹</span>
          <span>Erase Icons</span>
        </button>
      )}

      {/* Icon grid */}
      <div className="grid grid-cols-3 gap-2">
        {ICON_LIST.map(({ id, name, component: IconComp }) => (
          <DraggableIconCard
            key={id}
            iconId={id}
            name={name}
            IconComp={IconComp}
            iconColor={iconColor}
            isSelected={selectedIconId === id}
            onSelect={() => {
              setSelectedIconId(id);
              if (activeTool !== 'icon') setActiveTool('icon');
            }}
          />
        ))}
      </div>

      {/* Icon color picker */}
      <div className="space-y-2">
        <p className="text-xs text-slate-500">Icon Color</p>
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-lg border-2 border-white/20 shadow-inner cursor-pointer flex-shrink-0"
            style={{ backgroundColor: iconColor }}
            onClick={() => setShowColorPicker((v) => !v)}
          />
          <span className="text-xs text-slate-400 font-mono">{iconColor}</span>
        </div>
        {showColorPicker && (
          <div className="bg-slate-700 rounded-xl p-3 shadow-2xl border border-white/10">
            <HexColorPicker color={iconColor} onChange={setIconColor} />
          </div>
        )}
        <button
          onClick={() => setShowColorPicker((v) => !v)}
          className="w-full text-xs text-slate-400 hover:text-white py-1.5 rounded-lg hover:bg-white/10 transition-colors border border-white/10 hover:border-white/20"
        >
          {showColorPicker ? 'Close picker' : 'Pick icon color...'}
        </button>
      </div>
    </div>
  );
};

export default IconPanel;
