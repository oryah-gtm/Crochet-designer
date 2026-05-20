import React from 'react';
import { useStore } from '../store';

interface HeaderProps {
  onExport: () => void;
  isExporting: boolean;
}

const Header: React.FC<HeaderProps> = ({ onExport, isExporting }) => {
  const undo = useStore((s) => s.undo);
  const history = useStore((s) => s.history);

  return (
    <header
      className="flex items-center justify-between px-6 h-16 border-b border-white/10 flex-shrink-0"
      style={{
        background: 'linear-gradient(90deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%)',
        boxShadow: '0 2px 20px rgba(0,0,0,0.3)',
      }}
    >
      {/* Title */}
      <div className="flex items-center gap-3">
        <span className="text-3xl">🧶</span>
        <div>
          <h1 className="text-xl font-bold text-white leading-none font-craft tracking-wide">
            Crochet Blanket Designer
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">Design your perfect granny square blanket</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <button
          onClick={undo}
          disabled={history.length === 0}
          title="Undo (Ctrl+Z)"
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-150 border ${
            history.length > 0
              ? 'bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30'
              : 'bg-white/5 border-white/10 text-slate-600 cursor-not-allowed'
          }`}
        >
          <span className="text-base">↩</span>
          <span>Undo</span>
          <span className="text-xs opacity-60 ml-1 hidden sm:inline">Ctrl+Z</span>
        </button>

        <button
          onClick={onExport}
          disabled={isExporting}
          className={`flex items-center gap-1.5 px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-150 border ${
            isExporting
              ? 'bg-purple-700/50 border-purple-500/30 text-purple-300 cursor-not-allowed'
              : 'bg-gradient-to-r from-purple-600 to-pink-600 border-transparent text-white hover:from-purple-500 hover:to-pink-500 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40'
          }`}
        >
          <span className="text-base">{isExporting ? '⏳' : '📥'}</span>
          <span>{isExporting ? 'Exporting...' : 'Export PNG'}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
