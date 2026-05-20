import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AppState, CellData, Tool } from './types';
import { makeDefaultCell, deepCloneCells } from './utils';

const DEFAULT_ROWS = 8;
const DEFAULT_COLS = 10;
const DEFAULT_FILL = '#CE93D8';
const DEFAULT_BORDER = '#F8BBD0';
const DEFAULT_ICON_COLOR = '#FFFFFF';
const MAX_HISTORY = 50;

function createDefaultGrid(rows: number, cols: number, fillColor: string, borderColor: string): CellData[][] {
  return Array.from({ length: rows }, (_, r) =>
    Array.from({ length: cols }, (_, c) => makeDefaultCell(r, c, fillColor, borderColor))
  );
}

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      rows: DEFAULT_ROWS,
      cols: DEFAULT_COLS,
      cells: createDefaultGrid(DEFAULT_ROWS, DEFAULT_COLS, DEFAULT_FILL, DEFAULT_BORDER),
      activeTool: 'fill' as Tool,
      fillColor: DEFAULT_FILL,
      borderColor: DEFAULT_BORDER,
      selectedIconId: null,
      iconColor: DEFAULT_ICON_COLOR,
      history: [],

      setGridSize: (rows: number, cols: number) => {
        const state = get();
        const clampedRows = Math.max(1, Math.min(20, rows));
        const clampedCols = Math.max(1, Math.min(20, cols));
        const newCells: CellData[][] = Array.from({ length: clampedRows }, (_, r) =>
          Array.from({ length: clampedCols }, (_, c) => {
            if (r < state.cells.length && c < state.cells[r].length) {
              return { ...state.cells[r][c], id: `${r}-${c}` };
            }
            return makeDefaultCell(r, c, state.fillColor, state.borderColor);
          })
        );
        set({ rows: clampedRows, cols: clampedCols, cells: newCells });
      },

      setActiveTool: (tool: Tool) => set({ activeTool: tool }),
      setFillColor: (color: string) => set({ fillColor: color }),
      setBorderColor: (color: string) => set({ borderColor: color }),
      setSelectedIconId: (id: string | null) => set({ selectedIconId: id }),
      setIconColor: (color: string) => set({ iconColor: color }),

      applyTool: (cellId: string) => {
        const state = get();
        const [row, col] = cellId.split('-').map(Number);
        if (isNaN(row) || isNaN(col)) return;
        if (row >= state.rows || col >= state.cols) return;

        // push history
        const history = [deepCloneCells(state.cells), ...state.history].slice(0, MAX_HISTORY);

        const newCells = deepCloneCells(state.cells);
        const cell = newCells[row][col];

        if (state.activeTool === 'fill') {
          cell.fillColor = state.fillColor;
        } else if (state.activeTool === 'border') {
          cell.borderColor = state.borderColor;
        } else if (state.activeTool === 'erase') {
          delete cell.iconId;
        } else if (state.activeTool === 'icon' && state.selectedIconId) {
          cell.iconId = state.selectedIconId;
          cell.iconColor = state.iconColor;
        }

        set({ cells: newCells, history });
      },

      applyToAll: () => {
        const state = get();
        const history = [deepCloneCells(state.cells), ...state.history].slice(0, MAX_HISTORY);
        const newCells = deepCloneCells(state.cells);
        for (const row of newCells) {
          for (const cell of row) {
            if (state.activeTool === 'fill') {
              cell.fillColor = state.fillColor;
            } else if (state.activeTool === 'border') {
              cell.borderColor = state.borderColor;
            } else if (state.activeTool === 'icon' && state.selectedIconId) {
              cell.iconId = state.selectedIconId;
              cell.iconColor = state.iconColor;
            } else if (state.activeTool === 'erase') {
              delete cell.iconId;
            }
          }
        }
        set({ cells: newCells, history });
      },

      placeIcon: (cellId: string, iconId: string) => {
        const state = get();
        const [row, col] = cellId.split('-').map(Number);
        if (isNaN(row) || isNaN(col)) return;
        if (row >= state.rows || col >= state.cols) return;

        const history = [deepCloneCells(state.cells), ...state.history].slice(0, MAX_HISTORY);
        const newCells = deepCloneCells(state.cells);
        newCells[row][col].iconId = iconId;
        newCells[row][col].iconColor = state.iconColor;
        set({ cells: newCells, history });
      },

      undo: () => {
        const state = get();
        if (state.history.length === 0) return;
        const [prev, ...rest] = state.history;
        set({ cells: prev, history: rest });
      },

      clearGrid: () => {
        const state = get();
        const history = [deepCloneCells(state.cells), ...state.history].slice(0, MAX_HISTORY);
        const newCells = createDefaultGrid(state.rows, state.cols, state.fillColor, state.borderColor);
        set({ cells: newCells, history });
      },
    }),
    {
      name: 'crochet-designer-state',
      partialize: (state) => ({
        rows: state.rows,
        cols: state.cols,
        cells: state.cells,
        fillColor: state.fillColor,
        borderColor: state.borderColor,
        iconColor: state.iconColor,
        selectedIconId: state.selectedIconId,
        activeTool: state.activeTool,
      }),
    }
  )
);
