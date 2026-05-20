export interface CellData {
  id: string;
  fillColor: string;
  borderColor: string;
  iconId?: string;
  iconColor: string;
}

export type Tool = 'fill' | 'border' | 'icon' | 'erase';

export interface AppState {
  rows: number;
  cols: number;
  cells: CellData[][];
  activeTool: Tool;
  fillColor: string;
  borderColor: string;
  selectedIconId: string | null;
  iconColor: string;
  history: CellData[][][];
  // actions
  setGridSize: (rows: number, cols: number) => void;
  setActiveTool: (tool: Tool) => void;
  setFillColor: (color: string) => void;
  setBorderColor: (color: string) => void;
  setSelectedIconId: (id: string | null) => void;
  setIconColor: (color: string) => void;
  applyTool: (cellId: string) => void;
  applyToAll: () => void;
  placeIcon: (cellId: string, iconId: string) => void;
  undo: () => void;
  clearGrid: () => void;
}

export interface IconDefinition {
  id: string;
  name: string;
  component: React.FC<{ color: string; size?: number }>;
}
