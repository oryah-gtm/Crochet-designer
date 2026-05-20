import React, { useCallback } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { useStore } from '../store';
import { CellData } from '../types';
import GrannySquare from './GrannySquare';

interface SquareCellProps {
  cell: CellData;
  cellSize: number;
}

const SquareCell: React.FC<SquareCellProps> = ({ cell, cellSize }) => {
  const activeTool = useStore((s) => s.activeTool);
  const applyTool = useStore((s) => s.applyTool);

  const { isOver, setNodeRef } = useDroppable({
    id: cell.id,
    data: { type: 'cell', cellId: cell.id },
  });

  const handleClick = useCallback(() => {
    if (activeTool === 'fill' || activeTool === 'border' || activeTool === 'erase') {
      applyTool(cell.id);
    } else if (activeTool === 'icon') {
      applyTool(cell.id);
    }
  }, [activeTool, applyTool, cell.id]);

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent) => {
      if (e.buttons === 1) {
        if (activeTool === 'fill' || activeTool === 'border' || activeTool === 'erase') {
          applyTool(cell.id);
        }
      }
    },
    [activeTool, applyTool, cell.id]
  );

  return (
    <div
      ref={setNodeRef}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      style={{
        width: cellSize,
        height: cellSize,
        cursor: activeTool === 'erase' ? 'cell' : 'pointer',
        position: 'relative',
        borderRadius: 4,
        transition: 'transform 0.1s ease',
        transform: isOver ? 'scale(1.08)' : 'scale(1)',
        boxShadow: isOver ? '0 0 0 3px #a78bfa, 0 4px 12px rgba(0,0,0,0.2)' : 'none',
        userSelect: 'none',
      }}
    >
      <GrannySquare
        fillColor={cell.fillColor}
        borderColor={cell.borderColor}
        iconId={cell.iconId}
        iconColor={cell.iconColor}
        size={cellSize}
      />
      {/* Hover overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 4,
          background: 'transparent',
          transition: 'background 0.15s ease',
          pointerEvents: 'none',
        }}
        className="cell-hover-overlay"
      />
    </div>
  );
};

export default SquareCell;
