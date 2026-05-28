"use client";

import { useState, useEffect } from "react";
import { Copy, RefreshCw, Check } from "lucide-react";
import * as helpers from "../utils/toolHelpers";

const ColorPreviewBox = ({ hex, height = "120px" }) => (
  <div 
    style={{
      height,
      backgroundColor: hex || "#3b82f6",
      borderRadius: "8px",
      border: "1px solid var(--border)",
      marginBottom: "1.5rem",
      transition: "background-color 0.2s ease",
      boxShadow: "inset 0 2px 4px rgba(0,0,0,0.06)"
    }}
  />
);

// 46. HEX to RGB
export function HexToRgb() {
  const [hex, setHex] = useState("#3B82F6");
  const [rgbStr, setRgbStr] = useState("rgb(59, 130, 246)");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const result = helpers.hexToRgb(hex);
    if (result) {
      setRgbStr(`rgb(${result.r}, ${result.g}, ${result.b})`);
    } else {
      setRgbStr("Invalid HEX Code");
    }
  }, [hex]);

  const copy = () => {
    navigator.clipboard.writeText(rgbStr);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-card" style={{ maxWidth: "400px", margin: "0 auto" }}>
      <ColorPreviewBox hex={hex} />
      <div style={{ marginBottom: "1.5rem" }}>
        <label style={{ fontSize: "0.85rem", fontWeight: "600", display: "block", marginBottom: "0.25rem" }}>HEX Code</label>
        <input
          type="text"
          value={hex}
          onChange={(e) => setHex(e.target.value)}
          placeholder="#3B82F6"
          style={{ width: "100%", padding: "0.5rem", border: "1px solid var(--border)", borderRadius: "6px", textAlign: "center", textTransform: "uppercase", fontWeight: "700", backgroundColor: "var(--bg-surface)" }}
        />
      </div>

      <div style={{ padding: "0.75rem", border: "1px solid var(--border)", borderRadius: "8px", backgroundColor: "var(--bg-base)", textAlign: "center", marginBottom: "1.5rem" }}>
        <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "0.25rem" }}>RGB String</div>
        <div style={{ fontSize: "1.2rem", fontWeight: "700", fontFamily: "monospace" }}>{rgbStr}</div>
      </div>

      <div style={{ textAlign: "center" }}>
        <button onClick={copy} className="btn btn-primary" disabled={rgbStr === "Invalid HEX Code"}>
          {copied ? <Check size={16} /> : <Copy size={16} />} {copied ? "Copied!" : "Copy RGB Code"}
        </button>
      </div>
    </div>
  );
}

// 47. RGB to HEX
export function RgbToHex() {
  const [rgb, setRgb] = useState({ r: 59, g: 130, b: 246 });
  const [hex, setHex] = useState("#3B82F6");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setHex(helpers.rgbToHex(rgb.r, rgb.g, rgb.b));
  }, [rgb]);

  const handleSlider = (e) => {
    const { name, value } = e.target;
    setRgb({ ...rgb, [name]: parseInt(value) || 0 });
  };

  const copy = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-card" style={{ maxWidth: "450px", margin: "0 auto" }}>
      <ColorPreviewBox hex={hex} />
      
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.5rem" }}>
        {["r", "g", "b"].map((colorKey) => (
          <div key={colorKey} style={{ display: "grid", gridTemplateColumns: "20px 1fr 50px", gap: "1rem", alignItems: "center" }}>
            <span style={{ fontWeight: "700", textTransform: "uppercase", fontSize: "0.9rem" }}>{colorKey}</span>
            <input
              type="range"
              name={colorKey}
              min="0"
              max="255"
              value={rgb[colorKey]}
              onChange={handleSlider}
              style={{ width: "100%" }}
            />
            <input
              type="number"
              name={colorKey}
              min="0"
              max="255"
              value={rgb[colorKey]}
              onChange={handleSlider}
              style={{ width: "100%", padding: "0.25rem", border: "1px solid var(--border)", borderRadius: "4px", textAlign: "center", backgroundColor: "var(--bg-surface)" }}
            />
          </div>
        ))}
      </div>

      <div style={{ padding: "0.75rem", border: "1px solid var(--border)", borderRadius: "8px", backgroundColor: "var(--bg-base)", textAlign: "center", marginBottom: "1.5rem" }}>
        <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "0.25rem" }}>HEX Code</div>
        <div style={{ fontSize: "1.2rem", fontWeight: "700", fontFamily: "monospace", color: "var(--accent)" }}>{hex}</div>
      </div>

      <div style={{ textAlign: "center" }}>
        <button onClick={copy} className="btn btn-primary">
          {copied ? <Check size={16} /> : <Copy size={16} />} {copied ? "Copied!" : "Copy HEX Code"}
        </button>
      </div>
    </div>
  );
}

// 48. Color Picker
export function ColorPicker() {
  const [color, setColor] = useState("#3b82f6");
  const [copied, setCopied] = useState("");

  const copyVal = (val, key) => {
    navigator.clipboard.writeText(val);
    setCopied(key);
    setTimeout(() => setCopied(""), 2000);
  };

  const getRgb = () => {
    const res = helpers.hexToRgb(color) || { r: 59, g: 130, b: 246 };
    return `rgb(${res.r}, ${res.g}, ${res.b})`;
  };

  return (
    <div className="glass-card" style={{ maxWidth: "450px", margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        <input 
          type="color" 
          value={color} 
          onChange={(e) => setColor(e.target.value)}
          style={{ width: "100px", height: "100px", border: "none", borderRadius: "50%", cursor: "pointer", outline: "none", padding: "0" }}
        />
        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>Click color disc above to open system eyedropper wheel</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {[
          { label: "HEX", val: color.toUpperCase() },
          { label: "RGB", val: getRgb() }
        ].map((item, idx) => (
          <div key={idx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.6rem 1rem", border: "1px solid var(--border)", borderRadius: "8px", backgroundColor: "var(--bg-base)" }}>
            <div>
              <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "var(--text-secondary)", marginRight: "1rem" }}>{item.label}</span>
              <strong style={{ fontFamily: "monospace" }}>{item.val}</strong>
            </div>
            <button onClick={() => copyVal(item.val, item.label)} className="btn btn-secondary" style={{ padding: "0.3rem 0.6rem", fontSize: "0.75rem" }}>
              {copied === item.label ? "Copied!" : <Copy size={12} />}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// 49. Gradient Generator
export function GradientGenerator() {
  const [color1, setColor1] = useState("#3b82f6");
  const [color2, setColor2] = useState("#8b5cf6");
  const [angle, setAngle] = useState(135);
  const [type, setType] = useState("linear"); // linear or radial
  const [cssRule, setCssRule] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (type === "linear") {
      setCssRule(`linear-gradient(${angle}deg, ${color1}, ${color2})`);
    } else {
      setCssRule(`radial-gradient(circle, ${color1}, ${color2})`);
    }
  }, [color1, color2, angle, type]);

  const copy = () => {
    navigator.clipboard.writeText(`background: ${cssRule};`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-card">
      <div 
        style={{
          height: "150px",
          background: cssRule,
          borderRadius: "8px",
          border: "1px solid var(--border)",
          boxShadow: "var(--shadow-md)",
          marginBottom: "1.5rem"
        }}
      />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
        <div>
          <label style={{ fontSize: "0.85rem", fontWeight: "600", display: "block", marginBottom: "0.25rem" }}>Color Stop 1</label>
          <input 
            type="color" 
            value={color1} 
            onChange={(e) => setColor1(e.target.value)} 
            style={{ width: "100%", height: "38px", padding: "2px", border: "1px solid var(--border)", borderRadius: "6px", cursor: "pointer", backgroundColor: "var(--bg-surface)" }} 
          />
        </div>
        <div>
          <label style={{ fontSize: "0.85rem", fontWeight: "600", display: "block", marginBottom: "0.25rem" }}>Color Stop 2</label>
          <input 
            type="color" 
            value={color2} 
            onChange={(e) => setColor2(e.target.value)} 
            style={{ width: "100%", height: "38px", padding: "2px", border: "1px solid var(--border)", borderRadius: "6px", cursor: "pointer", backgroundColor: "var(--bg-surface)" }} 
          />
        </div>
        <div>
          <label style={{ fontSize: "0.85rem", fontWeight: "600", display: "block", marginBottom: "0.25rem" }}>Gradient Style</label>
          <select 
            value={type} 
            onChange={(e) => setType(e.target.value)}
            style={{ width: "100%", padding: "0.5rem", border: "1px solid var(--border)", borderRadius: "6px", height: "38px", backgroundColor: "var(--bg-surface)" }}
          >
            <option value="linear">Linear</option>
            <option value="radial">Radial</option>
          </select>
        </div>
        {type === "linear" && (
          <div>
            <label style={{ fontSize: "0.85rem", fontWeight: "600", display: "block", marginBottom: "0.25rem" }}>Angle ({angle}°)</label>
            <input 
              type="range" 
              min="0" 
              max="360" 
              value={angle} 
              onChange={(e) => setAngle(parseInt(e.target.value))} 
              style={{ width: "100%", marginTop: "0.5rem" }} 
            />
          </div>
        )}
      </div>

      <div style={{ padding: "0.75rem", border: "1px solid var(--border)", borderRadius: "8px", backgroundColor: "var(--bg-base)", marginBottom: "1.5rem" }}>
        <code style={{ fontSize: "0.85rem", fontFamily: "monospace", display: "block", wordBreak: "break-all" }}>
          background: {cssRule};
        </code>
      </div>

      <div style={{ textAlign: "center" }}>
        <button onClick={copy} className="btn btn-primary">
          {copied ? <Check size={16} /> : <Copy size={16} />} {copied ? "Copied CSS!" : "Copy CSS background Rule"}
        </button>
      </div>
    </div>
  );
}

// 50. Palette Generator
export function PaletteGenerator() {
  const [baseColor, setBaseColor] = useState("#3b82f6");
  const [mode, setMode] = useState("monochromatic");
  const [colors, setColors] = useState([]);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const generate = () => {
    setColors(helpers.generateRandomPalette(mode, baseColor));
  };

  useEffect(() => {
    generate();
  }, [baseColor, mode]);

  const copy = (hex, idx) => {
    navigator.clipboard.writeText(hex);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="glass-card">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "0.5rem", marginBottom: "2rem" }}>
        {colors.map((c, idx) => (
          <div key={idx} style={{ textAlign: "center" }}>
            <div 
              style={{
                height: "100px",
                backgroundColor: c,
                borderRadius: "8px",
                border: "1px solid var(--border)",
                marginBottom: "0.5rem",
                boxShadow: "var(--shadow-sm)"
              }}
            />
            <button 
              onClick={() => copy(c, idx)} 
              className="btn btn-secondary" 
              style={{ padding: "0.3rem 0.5rem", fontSize: "0.75rem", width: "100%", textOverflow: "ellipsis", overflow: "hidden" }}
            >
              {copiedIndex === idx ? "Copied!" : c}
            </button>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", alignItems: "center", maxWidth: "450px", margin: "0 auto 1.5rem auto" }}>
        <div>
          <label style={{ fontSize: "0.85rem", fontWeight: "600", display: "block", marginBottom: "0.25rem" }}>Base Color</label>
          <input 
            type="color" 
            value={baseColor} 
            onChange={(e) => setBaseColor(e.target.value)} 
            style={{ width: "100%", height: "38px", padding: "2px", border: "1px solid var(--border)", borderRadius: "6px", cursor: "pointer", backgroundColor: "var(--bg-surface)" }} 
          />
        </div>
        <div>
          <label style={{ fontSize: "0.85rem", fontWeight: "600", display: "block", marginBottom: "0.25rem" }}>Harmony Rules</label>
          <select 
            value={mode} 
            onChange={(e) => setMode(e.target.value)}
            style={{ width: "100%", padding: "0.5rem", border: "1px solid var(--border)", borderRadius: "6px", height: "38px", backgroundColor: "var(--bg-surface)" }}
          >
            <option value="monochromatic">Monochromatic</option>
            <option value="analogous">Analogous</option>
            <option value="complementary">Complementary</option>
            <option value="triadic">Triadic</option>
            <option value="random">Randomized</option>
          </select>
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <button onClick={generate} className="btn btn-primary" style={{ display: "inline-flex", gap: "0.5rem" }}>
          <RefreshCw size={16} /> Regenerate Palette
        </button>
      </div>
    </div>
  );
}
