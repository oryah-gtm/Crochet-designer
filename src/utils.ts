export function adjustHexColor(hex: string, amount: number): string {
  const clamp = (n: number) => Math.max(0, Math.min(255, n));
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `#${[r, g, b].map(c => clamp(c + amount).toString(16).padStart(2, '0')).join('')}`;
}

export function makeDefaultCell(row: number, col: number, fillColor: string, borderColor: string): import('./types').CellData {
  return {
    id: `${row}-${col}`,
    fillColor,
    borderColor,
    iconColor: '#FFFFFF',
  };
}

export const PRESET_COLORS = [
  '#F8BBD0', '#F48FB1', '#E91E63', '#C2185B',
  '#CE93D8', '#AB47BC', '#7B1FA2', '#4A148C',
  '#90CAF9', '#42A5F5', '#1565C0', '#0D47A1',
  '#A5D6A7', '#66BB6A', '#2E7D32', '#1B5E20',
  '#FFCC80', '#FFA726', '#E65100', '#BF360C',
  '#FFECB3', '#FFD54F', '#F9A825', '#F57F17',
];

export function deepCloneCells(cells: import('./types').CellData[][]): import('./types').CellData[][] {
  return cells.map(row => row.map(cell => ({ ...cell })));
}
