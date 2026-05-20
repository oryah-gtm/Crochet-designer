import React from 'react';
import { useStore } from '../store';
import { Tool } from '../types';
import GridSizeControl from './GridSizeControl';
import ColorPanel from './ColorPanel';
import IconPanel from './IconPanel';

interface ToolButtonProps {
  tool: Tool;
  label: string;
  icon: string;
  description: string;
  active: boolean;
  onClick: () => void;
}

const ToolButton: React.FC<ToolButtonProps> = ({ label, icon, description, active, onClick }) => (
  <button
    onClick={onClick}
    title={description}
    className={`flex items-center gap-2.5 w-full px-3 py-2.5 rounded-xl border transition-all duration-150 text-left ${
      active
        ? 'bg-purple-500/30 border-purple-400/50 text-white shadow-md shadow-purple-500/20'
        : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20 hover:text-white'
    }`}
  >
    <span className="text-lg w-6 flex-shrink-0 text-center">{icon}</span>
    <div>
      <div className="text-sm font-medium leading-none">{label}</div>
      <div className="text-xs text-slate-500 mt-0.5">{description}</div>
    </div>
  </button>
);

const Sidebar: React.FC = () => {
  const activeTool = useStore((s) => s.activeTool);
  const fillColor = useStore((s) => s.fillColor);
  const borderColor = useStore((s) => s.borderColor);
  const setActiveTool = useStore((s) => s.setActiveTool);
  const setFillColor = useStore((s) => s.setFillColor);
  const setBorderColor = useStore((s) => s.setBorderColor);
  const applyToAll = useStore((s) => s.applyToAll);

  const tools: { tool: Tool; label: string; icon: string; description: string }[] = [
    { tool: 'fill', label: 'Fill', icon: '🎨', description: 'Paint square color' },
    { tool: 'border', label: 'Border', icon: '🖼️', description: 'Paint border/join color' },
    { tool: 'icon', label: 'Icon', icon: '⭐', description: 'Place decorative icons' },
    { tool: 'erase', label: 'Erase', icon: '🧹', description: 'Remove icons from squares' },
  ];

  return (
    <div
      className="flex flex-col h-full overflow-y-auto"
      style={{
        width: 300,
        minWidth: 300,
        background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)',
        borderRight: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Grid Size */}
        <section className="bg-white/5 rounded-2xl p-4 border border-white/8">
          <GridSizeControl />
        </section>

        {/* Tool Selector */}
        <section className="bg-white/5 rounded-2xl p-4 border border-white/8">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Tools</p>
          <div className="space-y-2">
            {tools.map((t) => (
              <ToolButton
                key={t.tool}
                tool={t.tool}
                label={t.label}
                icon={t.icon}
                description={t.description}
                active={activeTool === t.tool}
                onClick={() => setActiveTool(t.tool)}
              />
            ))}
          </div>
        </section>

        {/* Fill Color Panel */}
        {activeTool === 'fill' && (
          <section className="bg-white/5 rounded-2xl p-4 border border-white/8">
            <ColorPanel label="Fill Color" color={fillColor} onChange={setFillColor} onApplyToAll={applyToAll} applyToAllLabel="Apply to all" />
          </section>
        )}

        {/* Border Color Panel */}
        {activeTool === 'border' && (
          <section className="bg-white/5 rounded-2xl p-4 border border-white/8">
            <ColorPanel label="Border / Join Color" color={borderColor} onChange={setBorderColor} onApplyToAll={applyToAll} applyToAllLabel="Apply to all" />
          </section>
        )}

        {/* Icon Panel */}
        {(activeTool === 'icon' || activeTool === 'erase') && (
          <section className="bg-white/5 rounded-2xl p-4 border border-white/8">
            <IconPanel />
          </section>
        )}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-white/8">
        <p className="text-xs text-slate-600 text-center">
          Auto-saved to browser storage
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
