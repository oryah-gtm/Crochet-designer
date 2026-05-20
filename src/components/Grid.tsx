import React, { useMemo } from 'react';
import { useStore } from '../store';
import SquareCell from './SquareCell';

interface GridProps {
  exportRef: React.RefObject<HTMLDivElement>;
}

const Grid: React.FC<GridProps> = ({ exportRef }) => {
  const rows = useStore((s) => s.rows);
  const cols = useStore((s) => s.cols);
  const cells = useStore((s) => s.cells);

  // Calculate cell size to fit viewport
  const cellSize = useMemo(() => {
    const maxW = Math.floor((window.innerWidth - 340) / cols);
    const maxH = Math.floor((window.innerHeight - 80) / rows);
    const raw = Math.min(maxW, maxH);
    return Math.max(60, Math.min(120, raw));
  }, [rows, cols]);

  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'auto',
        padding: '24px',
        background: 'linear-gradient(135deg, #f5f0e8 0%, #ede8dc 100%)',
      }}
    >
      <div
        ref={exportRef}
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
          gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
          gap: '4px',
          background: '#e8ddd0',
          padding: '16px',
          borderRadius: '12px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.1)',
          border: '3px solid #d4c5b0',
        }}
      >
        {cells.map((row) =>
          row.map((cell) => (
            <SquareCell key={cell.id} cell={cell} cellSize={cellSize} />
          ))
        )}
      </div>
    </div>
  );
};

export default Grid;
