import React, { useState } from 'react';
import { useStore } from '../store';

const GridSizeControl: React.FC = () => {
  const rows = useStore((s) => s.rows);
  const cols = useStore((s) => s.cols);
  const setGridSize = useStore((s) => s.setGridSize);
  const clearGrid = useStore((s) => s.clearGrid);

  const [localRows, setLocalRows] = useState(rows);
  const [localCols, setLocalCols] = useState(cols);

  const clamp = (v: number) => Math.max(1, Math.min(20, v));

  const applySize = (r: number, c: number) => {
    const cr = clamp(r);
    const cc = clamp(c);
    setLocalRows(cr);
    setLocalCols(cc);
    setGridSize(cr, cc);
  };

  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Grid Size</p>

      <div className="flex gap-3">
        {/* Rows */}
        <div className="flex-1">
          <label className="text-xs text-slate-500 mb-1 block">Rows</label>
          <div className="flex items-center gap-1">
            <button
              onClick={() => applySize(localRows - 1, localCols)}
              className="w-7 h-7 rounded bg-white/10 hover:bg-white/20 text-white text-sm font-bold flex items-center justify-center transition-colors"
            >
              −
            </button>
            <input
              type="number"
              min={1}
              max={20}
              value={localRows}
              onChange={(e) => {
                const v = parseInt(e.target.value, 10);
                if (!isNaN(v)) {
                  setLocalRows(v);
                  if (v >= 1 && v <= 20) applySize(v, localCols);
                }
              }}
              className="w-10 text-center bg-white/10 text-white text-sm rounded px-1 py-1 outline-none focus:ring-1 focus:ring-purple-400 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <button
              onClick={() => applySize(localRows + 1, localCols)}
              className="w-7 h-7 rounded bg-white/10 hover:bg-white/20 text-white text-sm font-bold flex items-center justify-center transition-colors"
            >
              +
            </button>
          </div>
        </div>

        {/* Cols */}
        <div className="flex-1">
          <label className="text-xs text-slate-500 mb-1 block">Cols</label>
          <div className="flex items-center gap-1">
            <button
              onClick={() => applySize(localRows, localCols - 1)}
              className="w-7 h-7 rounded bg-white/10 hover:bg-white/20 text-white text-sm font-bold flex items-center justify-center transition-colors"
            >
              −
            </button>
            <input
              type="number"
              min={1}
              max={20}
              value={localCols}
              onChange={(e) => {
                const v = parseInt(e.target.value, 10);
                if (!isNaN(v)) {
                  setLocalCols(v);
                  if (v >= 1 && v <= 20) applySize(localRows, v);
                }
              }}
              className="w-10 text-center bg-white/10 text-white text-sm rounded px-1 py-1 outline-none focus:ring-1 focus:ring-purple-400 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <button
              onClick={() => applySize(localRows, localCols + 1)}
              className="w-7 h-7 rounded bg-white/10 hover:bg-white/20 text-white text-sm font-bold flex items-center justify-center transition-colors"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="text-xs text-slate-500 text-center">
        {rows} × {cols} = {rows * cols} squares
      </div>

      <button
        onClick={clearGrid}
        className="w-full py-1.5 text-xs text-rose-400 hover:text-rose-300 border border-rose-400/30 hover:border-rose-400/60 rounded-lg transition-all hover:bg-rose-400/10"
      >
        Clear Grid
      </button>
    </div>
  );
};

export default GridSizeControl;
