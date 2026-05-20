import React, { useRef, useEffect, useState, useCallback } from 'react';
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import html2canvas from 'html2canvas';
import { useStore } from './store';
import { getIconComponent } from './icons';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Grid from './components/Grid';

const App: React.FC = () => {
  const placeIcon = useStore((s) => s.placeIcon);
  const undo = useStore((s) => s.undo);
  const iconColor = useStore((s) => s.iconColor);

  const gridRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);
  const [activeDragIconId, setActiveDragIconId] = useState<string | null>(null);

  // Keyboard shortcut: Ctrl+Z for undo
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
        e.preventDefault();
        undo();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [undo]);

  // Configure dnd sensors
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5, // require 5px of movement before starting drag
      },
    })
  );

  const handleDragStart = useCallback((event: DragStartEvent) => {
    const { data } = event.active;
    if (data.current?.type === 'icon') {
      setActiveDragIconId(data.current.iconId as string);
    }
  }, []);

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      setActiveDragIconId(null);
      const { active, over } = event;
      if (!over) return;

      const activeData = active.data.current;
      const overData = over.data.current;

      if (
        activeData?.type === 'icon' &&
        overData?.type === 'cell'
      ) {
        placeIcon(overData.cellId as string, activeData.iconId as string);
      }
    },
    [placeIcon]
  );

  const handleExport = useCallback(async () => {
    if (!gridRef.current) return;
    setIsExporting(true);
    try {
      const canvas = await html2canvas(gridRef.current, {
        backgroundColor: '#e8ddd0',
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
      });
      const link = document.createElement('a');
      link.download = `crochet-blanket-${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (err) {
      console.error('Export failed:', err);
    } finally {
      setIsExporting(false);
    }
  }, []);

  // Get the active drag icon component for the overlay
  const ActiveDragIconComp = activeDragIconId ? getIconComponent(activeDragIconId) : null;

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="flex flex-col h-screen overflow-hidden">
        <Header onExport={handleExport} isExporting={isExporting} />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <Grid exportRef={gridRef as React.RefObject<HTMLDivElement>} />
        </div>
      </div>

      {/* Drag overlay — shows icon while dragging */}
      <DragOverlay dropAnimation={null}>
        {ActiveDragIconComp && activeDragIconId ? (
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: 'rgba(30, 20, 60, 0.85)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              border: '2px solid rgba(167, 139, 250, 0.6)',
              pointerEvents: 'none',
            }}
          >
            <ActiveDragIconComp color={iconColor} size={30} />
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default App;
