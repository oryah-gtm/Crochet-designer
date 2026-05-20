import React, { useState, useRef, useEffect } from 'react';
import { HexColorPicker } from 'react-colorful';
import { PRESET_COLORS } from '../utils';

interface ColorPanelProps {
  label: string;
  color: string;
  onChange: (color: string) => void;
}

const ColorPanel: React.FC<ColorPanelProps> = ({ label, color, onChange }) => {
  const [showPicker, setShowPicker] = useState(false);
  const [inputValue, setInputValue] = useState(color);
  const [copied, setCopied] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setInputValue(color);
  }, [color]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
        setShowPicker(false);
      }
    };
    if (showPicker) {
      document.addEventListener('mousedown', handler);
    }
    return () => document.removeEventListener('mousedown', handler);
  }, [showPicker]);

  const handleHexInput = (val: string) => {
    setInputValue(val);
    const normalized = val.startsWith('#') ? val : `#${val}`;
    if (/^#[0-9A-Fa-f]{6}$/.test(normalized)) {
      onChange(normalized);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(color).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{label}</p>

      {/* Preset swatches */}
      <div className="grid grid-cols-6 gap-1.5">
        {PRESET_COLORS.map((c) => (
          <button
            key={c}
            onClick={() => onChange(c)}
            title={c}
            style={{ backgroundColor: c }}
            className={`w-8 h-8 rounded-md transition-all duration-150 hover:scale-110 hover:shadow-md ${
              color === c
                ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-800 scale-110'
                : ''
            }`}
          />
        ))}
      </div>

      {/* Current color + custom */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div
            className="w-9 h-9 rounded-lg border-2 border-white/20 shadow-inner cursor-pointer flex-shrink-0"
            style={{ backgroundColor: color }}
            onClick={() => setShowPicker((v) => !v)}
            title="Click to open color picker"
          />
          <div className="flex-1 flex items-center gap-1 bg-white/10 rounded-lg px-2 py-1.5">
            <span className="text-slate-400 text-xs">#</span>
            <input
              type="text"
              value={inputValue.replace('#', '')}
              onChange={(e) => handleHexInput(e.target.value)}
              maxLength={6}
              className="bg-transparent text-white text-xs font-mono w-full outline-none placeholder-slate-500"
              placeholder="CE93D8"
            />
          </div>
          <button
            onClick={handleCopy}
            title="Copy hex"
            className="text-xs text-slate-400 hover:text-white transition-colors px-2 py-1.5 rounded hover:bg-white/10"
          >
            {copied ? '✓' : 'Copy'}
          </button>
        </div>

        {/* Color picker popover */}
        {showPicker && (
          <div ref={pickerRef} className="relative z-50">
            <div className="bg-slate-700 rounded-xl p-3 shadow-2xl border border-white/10">
              <HexColorPicker color={color} onChange={onChange} />
            </div>
          </div>
        )}

        <button
          onClick={() => setShowPicker((v) => !v)}
          className="w-full text-xs text-slate-400 hover:text-white py-1.5 rounded-lg hover:bg-white/10 transition-colors border border-white/10 hover:border-white/20"
        >
          {showPicker ? 'Close color picker' : 'Custom color...'}
        </button>
      </div>
    </div>
  );
};

export default ColorPanel;
