"use client";

import { useState, useRef, useEffect } from "react";
import { Upload, Download, Copy, Trash, RefreshCw, ZoomIn, ZoomOut, Search } from "lucide-react";
import { minifyHTML } from "../utils/toolHelpers";

const VectorUploadArea = ({ onFileSelected, content, onClear }) => {
  const [dragging, setDragging] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    setDragging(e.type === "dragover");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onFileSelected(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      onFileSelected(e.target.files[0]);
    }
  };

  if (content) {
    return (
      <div style={{ textAlign: "center" }}>
        <button onClick={onClear} className="btn btn-secondary" style={{ display: "inline-flex", gap: "0.5rem", padding: "0.5rem 1rem", fontSize: "0.85rem" }}>
          <Trash size={16} /> Clear File
        </button>
      </div>
    );
  }

  return (
    <div 
      className={`upload-area ${dragging ? "dragging" : ""}`}
      onDragOver={handleDrag}
      onDragLeave={handleDrag}
      onDrop={handleDrop}
    >
      <Upload className="upload-icon" />
      <p className="upload-text">Drag & drop your SVG/Image file here, or click to browse</p>
      <p className="upload-hint">Supports SVG, PNG, JPG</p>
      <input type="file" onChange={handleFileChange} className="upload-input" />
    </div>
  );
};

// 11. SVG Optimizer
export function SvgOptimizer() {
  const [code, setCode] = useState("");
  const [optimized, setOptimized] = useState("");
  const [copied, setCopied] = useState(false);

  const handleFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setCode(e.target.result);
    };
    reader.readAsText(file);
  };

  const optimize = () => {
    if (!code) return;
    // Basic SVG clean
    let clean = code
      .replace(/<!--[\s\S]*?-->/g, "") // comments
      .replace(/<\?xml[\s\S]*?\?>/g, "") // xml tag
      .replace(/<!DOCTYPE[\s\S]*?>/g, "") // doctype
      .replace(/metadata/gi, "g") // replace metadata tags
      .replace(/\s+/g, " ")
      .replace(/>\s+</g, "><")
      .trim();
    
    setOptimized(clean);
  };

  const copy = () => {
    navigator.clipboard.writeText(optimized);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const download = () => {
    const blob = new Blob([optimized], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "optimized.svg";
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="glass-card">
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem", marginBottom: "1rem" }}>
        <VectorUploadArea onFileSelected={handleFile} content={code} onClear={() => { setCode(""); setOptimized(""); }} />
        <div>
          <label style={{ fontWeight: 600, fontSize: "0.9rem", display: "block", marginBottom: "0.5rem" }}>SVG Source Code</label>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Paste SVG XML tags here..."
            style={{ width: "100%", height: "150px", padding: "0.5rem", border: "1px solid var(--border)", borderRadius: "6px", backgroundColor: "var(--bg-surface)", fontFamily: "monospace", fontSize: "0.8rem" }}
          />
        </div>
      </div>

      <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        <button onClick={optimize} className="btn btn-primary" disabled={!code}>
          Optimize SVG
        </button>
      </div>

      {optimized && (
        <div>
          <label style={{ fontWeight: 600, fontSize: "0.9rem", display: "block", marginBottom: "0.5rem" }}>Optimized SVG Code</label>
          <textarea
            readOnly
            value={optimized}
            style={{ width: "100%", height: "150px", padding: "0.5rem", border: "1px solid var(--border)", borderRadius: "6px", backgroundColor: "var(--bg-base)", fontFamily: "monospace", fontSize: "0.8rem", resize: "none", marginBottom: "1rem" }}
          />
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <button onClick={copy} className="btn btn-secondary">
              <Copy size={16} /> {copied ? "Copied!" : "Copy Code"}
            </button>
            <button onClick={download} className="btn btn-primary">
              <Download size={16} /> Download SVG
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// 12. SVG to PNG
export function SvgToPng() {
  const [code, setCode] = useState("");
  const [width, setWidth] = useState(512);
  const [rendering, setRendering] = useState(false);

  const handleFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setCode(e.target.result);
    };
    reader.readAsText(file);
  };

  const convert = () => {
    if (!code) return;
    setRendering(true);
    
    // Create image from SVG data URL
    const blob = new Blob([code], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    
    const img = new Image();
    img.src = url;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      // Scale height relative to ratio
      const ratio = img.naturalWidth / img.naturalHeight;
      canvas.width = width;
      canvas.height = Math.round(width / ratio);
      
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      
      const link = document.createElement("a");
      link.download = "vector_export.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
      
      URL.revokeObjectURL(url);
      setRendering(false);
    };
  };

  return (
    <div className="glass-card">
      <VectorUploadArea onFileSelected={handleFile} content={code} onClear={() => setCode("")} />
      <div style={{ marginTop: "1rem" }}>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Or paste SVG code here..."
          style={{ width: "100%", height: "120px", padding: "0.5rem", border: "1px solid var(--border)", borderRadius: "6px", backgroundColor: "var(--bg-surface)", fontFamily: "monospace", fontSize: "0.8rem", marginBottom: "1rem" }}
        />
        {code && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", alignItems: "center", maxWidth: "400px", margin: "0 auto 1.5rem auto" }}>
            <div>
              <label style={{ fontSize: "0.85rem", fontWeight: "600", display: "block", marginBottom: "0.25rem" }}>Output Width (px)</label>
              <input 
                type="number" 
                value={width} 
                onChange={(e) => setWidth(parseInt(e.target.value) || 0)} 
                style={{ width: "100%", padding: "0.5rem", border: "1px solid var(--border)", borderRadius: "6px", backgroundColor: "var(--bg-surface)" }} 
              />
            </div>
            <button onClick={convert} className="btn btn-primary" style={{ marginTop: "1.25rem" }} disabled={rendering}>
              Convert to PNG
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// 13. PNG to SVG (Lightweight Pixel tracer)
export function PngToSvg() {
  const [preview, setPreview] = useState("");
  const [svgCode, setSvgCode] = useState("");
  const [tracing, setTracing] = useState(false);
  const [downscale, setDownscale] = useState(64); // Downscale to 64px max size for lightweight client-side tracing

  const handleFile = (file) => {
    setPreview(URL.createObjectURL(file));
    setSvgCode("");
  };

  const traceImage = () => {
    if (!preview) return;
    setTracing(true);
    const img = new Image();
    img.src = preview;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ratio = img.naturalWidth / img.naturalHeight;
      
      // limit dimensions to downscale size for lightweight paths rendering
      canvas.width = ratio >= 1 ? downscale : Math.round(downscale * ratio);
      canvas.height = ratio >= 1 ? Math.round(downscale / ratio) : downscale;
      
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;

      let paths = [];
      const pixelSize = 1; // 1 unit representation in SVG

      for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
          const idx = (y * canvas.width + x) * 4;
          const r = data[idx];
          const g = data[idx+1];
          const b = data[idx+2];
          const a = data[idx+3];

          if (a > 50) { // If not transparent
            const hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
            paths.push(`<rect x="${x}" y="${y}" width="${pixelSize}" height="${pixelSize}" fill="${hex}" />`);
          }
        }
      }

      const svgOutput = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${canvas.width} ${canvas.height}" width="100%" height="100%" shape-rendering="crispEdges">
  ${paths.join("\n  ")}
</svg>`;
      
      setSvgCode(svgOutput);
      setTracing(false);
    };
  };

  const download = () => {
    const blob = new Blob([svgCode], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "vectorized.svg";
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="glass-card">
      <VectorUploadArea onFileSelected={handleFile} content={preview} onClear={() => { setPreview(""); setSvgCode(""); }} />
      {preview && (
        <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
          <div style={{ marginBottom: "1.5rem", maxWidth: "300px", margin: "0 auto 1.5rem auto" }}>
            <label style={{ display: "flex", justifySpace: "space-between", fontSize: "0.9rem", fontWeight: "600", marginBottom: "0.5rem" }}>
              <span>Detail Density (Resolution):</span>
              <span>{downscale}px</span>
            </label>
            <input 
              type="range" 
              min="32" 
              max="128" 
              step="8" 
              value={downscale} 
              onChange={(e) => setDownscale(parseInt(e.target.value))} 
              style={{ width: "100%" }}
            />
          </div>
          <button onClick={traceImage} className="btn btn-primary" disabled={tracing}>
            {tracing ? "Tracing..." : "Generate Vector SVG"}
          </button>
        </div>
      )}

      {svgCode && (
        <div style={{ marginTop: "1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}>
            <div style={{ border: "1px solid var(--border)", padding: "1rem", borderRadius: "8px", height: "200px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#fff" }}>
              {/* Safely inject preview */}
              <div style={{ width: "150px", height: "150px" }} dangerouslySetInnerHTML={{ __html: svgCode }} />
            </div>
            <button onClick={download} className="btn btn-primary">
              <Download size={16} /> Download Vector SVG
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// 14. Vector Viewer
export function VectorViewer() {
  const [code, setCode] = useState("");
  const [zoom, setZoom] = useState(1);

  const handleFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setCode(e.target.result);
    };
    reader.readAsText(file);
  };

  return (
    <div className="glass-card">
      <VectorUploadArea onFileSelected={handleFile} content={code} onClear={() => setCode("")} />
      <div style={{ marginTop: "1rem" }}>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Or paste SVG tags here..."
          style={{ width: "100%", height: "100px", padding: "0.5rem", border: "1px solid var(--border)", borderRadius: "6px", backgroundColor: "var(--bg-surface)", fontFamily: "monospace", fontSize: "0.8rem", marginBottom: "1rem" }}
        />
        
        {code && (
          <div>
            <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", marginBottom: "1rem" }}>
              <button onClick={() => setZoom(z => Math.max(0.5, z - 0.25))} className="btn btn-secondary btn-icon" title="Zoom Out">
                <ZoomOut size={16} />
              </button>
              <button onClick={() => setZoom(1)} className="btn btn-secondary" style={{ padding: "0 1rem" }}>
                Reset ({Math.round(zoom * 100)}%)
              </button>
              <button onClick={() => setZoom(z => Math.min(4, z + 0.25))} className="btn btn-secondary btn-icon" title="Zoom In">
                <ZoomIn size={16} />
              </button>
            </div>
            
            <div 
              style={{
                border: "1px solid var(--border)",
                borderRadius: "8px",
                padding: "2rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#ffffff",
                overflow: "auto",
                minHeight: "250px"
              }}
            >
              <div 
                style={{
                  transform: `scale(${zoom})`,
                  transition: "transform 0.15s ease",
                  display: "inline-block",
                  maxWidth: "200px",
                  maxHeight: "200px"
                }}
                dangerouslySetInnerHTML={{ __html: code }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// 15. SVG Compressor
export function SVGCompressor() {
  const [code, setCode] = useState("");
  const [compressed, setCompressed] = useState("");
  const [precision, setPrecision] = useState(1); // decimal places

  const handleFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setCode(e.target.result);
    };
    reader.readAsText(file);
  };

  const compress = () => {
    if (!code) return;
    
    // Round decimals in coordinate pathways: matches numbers like d="M10.234,23.456"
    const coordRegex = /(-?\d+\.\d+)/g;
    let minified = code.replace(coordRegex, (val) => {
      return parseFloat(parseFloat(val).toFixed(precision)).toString();
    });

    // Minify whitespace tags
    minified = minifyHTML(minified);

    setCompressed(minified);
  };

  const download = () => {
    const blob = new Blob([compressed], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "compressed_vector.svg";
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  };

  const ratio = code && compressed ? (1 - compressed.length / code.length) * 100 : 0;

  return (
    <div className="glass-card">
      <VectorUploadArea onFileSelected={handleFile} content={code} onClear={() => { setCode(""); setCompressed(""); }} />
      <div style={{ marginTop: "1rem" }}>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Paste SVG code here..."
          style={{ width: "100%", height: "120px", padding: "0.5rem", border: "1px solid var(--border)", borderRadius: "6px", backgroundColor: "var(--bg-surface)", fontFamily: "monospace", fontSize: "0.8rem" }}
        />
      </div>

      {code && (
        <div style={{ marginTop: "1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", alignItems: "center", maxWidth: "450px", margin: "0 auto 1.5rem auto" }}>
            <div>
              <label style={{ fontSize: "0.85rem", fontWeight: "600", display: "block", marginBottom: "0.25rem" }}>Decimal Precision</label>
              <select
                value={precision}
                onChange={(e) => setPrecision(parseInt(e.target.value))}
                style={{ width: "100%", padding: "0.5rem", border: "1px solid var(--border)", borderRadius: "6px", backgroundColor: "var(--bg-surface)" }}
              >
                <option value="0">0 (Integer Coordinates)</option>
                <option value="1">1 Decimal Place</option>
                <option value="2">2 Decimal Places</option>
                <option value="3">3 Decimal Places</option>
              </select>
            </div>
            <button onClick={compress} className="btn btn-primary" style={{ marginTop: "1.25rem" }}>
              Compress Vector
            </button>
          </div>
        </div>
      )}

      {compressed && (
        <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
          <div style={{ padding: "1rem", border: "1px solid var(--border)", borderRadius: "8px", backgroundColor: "var(--accent-light)", marginBottom: "1rem", display: "inline-block" }}>
            File size reduced by <strong>{ratio.toFixed(1)}%</strong> ({code.length} bytes to {compressed.length} bytes)
          </div>
          <div>
            <button onClick={download} className="btn btn-primary">
              <Download size={16} /> Download Compressed SVG
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
