"use client";

import { useState, useRef, useEffect } from "react";
import { Upload, Download, Trash, RefreshCw, Scissors, RotateCw, Type, EyeOff } from "lucide-react";

// Helper for file drag and drop
const ImageUploadArea = ({ onFileSelected, imagePreview, onClear }) => {
  const [dragging, setDragging] = useState(false);
  
  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
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

  if (imagePreview) {
    return (
      <div className="preview-container" style={{ textAlign: "center", position: "relative" }}>
        <img 
          src={imagePreview} 
          alt="Preview" 
          style={{ maxWidth: "100%", maxHeight: "350px", borderRadius: "8px", border: "1px solid var(--border)", marginBottom: "1rem" }} 
        />
        <div>
          <button onClick={onClear} className="btn btn-secondary" style={{ display: "inline-flex", gap: "0.5rem", padding: "0.5rem 1rem", fontSize: "0.85rem" }}>
            <Trash size={16} /> Remove Image
          </button>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`upload-area ${dragging ? "dragging" : ""}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <Upload className="upload-icon" />
      <p className="upload-text">Drag & drop your image here, or click to browse</p>
      <p className="upload-hint">Supports JPG, PNG, WEBP, GIF, SVG</p>
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleFileChange} 
        className="upload-input" 
      />
    </div>
  );
};

// 1. JPG to PNG
export function JpgToPng() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [converting, setConverting] = useState(false);

  const handleFile = (selectedFile) => {
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const convert = () => {
    if (!file) return;
    setConverting(true);
    const img = new Image();
    img.src = preview;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      
      const link = document.createElement("a");
      link.download = file.name.replace(/\.[^/.]+$/, "") + ".png";
      link.href = canvas.toDataURL("image/png");
      link.click();
      setConverting(false);
    };
  };

  return (
    <div className="glass-card">
      <ImageUploadArea 
        onFileSelected={handleFile} 
        imagePreview={preview} 
        onClear={() => { setFile(null); setPreview(""); }} 
      />
      {file && (
        <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
          <button onClick={convert} className="btn btn-primary" disabled={converting}>
            <Download size={18} /> {converting ? "Converting..." : "Convert & Download PNG"}
          </button>
        </div>
      )}
    </div>
  );
}

// 2. PNG to JPG
export function PngToJpg() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [quality, setQuality] = useState(0.9);
  const [converting, setConverting] = useState(false);

  const handleFile = (selectedFile) => {
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const convert = () => {
    if (!file) return;
    setConverting(true);
    const img = new Image();
    img.src = preview;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d");
      // Add white background for JPG representation
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
      
      const link = document.createElement("a");
      link.download = file.name.replace(/\.[^/.]+$/, "") + ".jpg";
      link.href = canvas.toDataURL("image/jpeg", quality);
      link.click();
      setConverting(false);
    };
  };

  return (
    <div className="glass-card">
      <ImageUploadArea onFileSelected={handleFile} imagePreview={preview} onClear={() => { setFile(null); setPreview(""); }} />
      {file && (
        <div style={{ marginTop: "1.5rem" }}>
          <div style={{ marginBottom: "1.5rem", maxWidth: "300px", margin: "0 auto 1.5rem auto" }}>
            <label style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", fontWeight: "600", marginBottom: "0.5rem" }}>
              <span>Quality:</span>
              <span>{Math.round(quality * 100)}%</span>
            </label>
            <input 
              type="range" 
              min="0.1" 
              max="1.0" 
              step="0.05" 
              value={quality} 
              onChange={(e) => setQuality(parseFloat(e.target.value))} 
              style={{ width: "100%" }}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <button onClick={convert} className="btn btn-primary" disabled={converting}>
              <Download size={18} /> {converting ? "Converting..." : "Convert & Download JPG"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// 3. WEBP to PNG
export function WebpToPng() {
  return <JpgToPng />; // Process is identical client-side
}

// 4. Image Compressor
export function ImageCompressor() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [quality, setQuality] = useState(0.7);
  const [compressedSize, setCompressedSize] = useState(null);
  const [compressing, setCompressing] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState("");

  const handleFile = (selectedFile) => {
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
    setCompressedSize(null);
    setDownloadUrl("");
  };

  useEffect(() => {
    if (!file || !preview) return;
    
    setCompressing(true);
    const img = new Image();
    img.src = preview;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      
      canvas.toBlob((blob) => {
        if (blob) {
          setCompressedSize(blob.size);
          if (downloadUrl) URL.revokeObjectURL(downloadUrl);
          setDownloadUrl(URL.createObjectURL(blob));
        }
        setCompressing(false);
      }, file.type, quality);
    };
  }, [file, preview, quality]);

  const download = () => {
    if (!downloadUrl) return;
    const link = document.createElement("a");
    link.download = "compressed_" + file.name;
    link.href = downloadUrl;
    link.click();
  };

  const formatSize = (bytes) => {
    if (!bytes) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <div className="glass-card">
      <ImageUploadArea onFileSelected={handleFile} imagePreview={preview} onClear={() => { setFile(null); setPreview(""); setCompressedSize(null); }} />
      {file && (
        <div style={{ marginTop: "1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem", textAlign: "center" }}>
            <div style={{ padding: "0.75rem", border: "1px solid var(--border)", borderRadius: "8px" }}>
              <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Original Size</div>
              <div style={{ fontSize: "1.1rem", fontWeight: "700" }}>{formatSize(file.size)}</div>
            </div>
            <div style={{ padding: "0.75rem", border: "1px solid var(--border)", borderRadius: "8px", backgroundColor: "var(--accent-light)" }}>
              <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Compressed Size</div>
              <div style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--accent)" }}>
                {compressing ? "Calculating..." : formatSize(compressedSize)}
              </div>
            </div>
          </div>

          <div style={{ marginBottom: "1.5rem", maxWidth: "300px", margin: "0 auto 1.5rem auto" }}>
            <label style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", fontWeight: "600", marginBottom: "0.5rem" }}>
              <span>Quality Control:</span>
              <span>{Math.round(quality * 100)}%</span>
            </label>
            <input 
              type="range" 
              min="0.1" 
              max="0.95" 
              step="0.05" 
              value={quality} 
              onChange={(e) => setQuality(parseFloat(e.target.value))} 
              style={{ width: "100%" }}
            />
          </div>

          <div style={{ textAlign: "center" }}>
            <button onClick={download} className="btn btn-primary" disabled={compressing || !downloadUrl}>
              <Download size={18} /> Download Optimized Image
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// 5. Image Resizer
export function ImageResizer() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [dimensions, setDimensions] = useState({ width: 0, height: 0, originalWidth: 0, originalHeight: 0 });
  const [lockRatio, setLockRatio] = useState(true);
  const [resizing, setResizing] = useState(false);

  const handleFile = (selectedFile) => {
    setFile(selectedFile);
    const url = URL.createObjectURL(selectedFile);
    setPreview(url);

    const img = new Image();
    img.src = url;
    img.onload = () => {
      setDimensions({
        width: img.naturalWidth,
        height: img.naturalHeight,
        originalWidth: img.naturalWidth,
        originalHeight: img.naturalHeight
      });
    };
  };

  const handleDimensionChange = (e) => {
    const { name, value } = e.target;
    const val = parseInt(value) || 0;
    
    if (lockRatio) {
      const ratio = dimensions.originalWidth / dimensions.originalHeight;
      if (name === "width") {
        setDimensions({
          ...dimensions,
          width: val,
          height: Math.round(val / ratio)
        });
      } else {
        setDimensions({
          ...dimensions,
          height: val,
          width: Math.round(val * ratio)
        });
      }
    } else {
      setDimensions({
        ...dimensions,
        [name]: val
      });
    }
  };

  const resize = () => {
    if (!file) return;
    setResizing(true);
    const img = new Image();
    img.src = preview;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = dimensions.width;
      canvas.height = dimensions.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, dimensions.width, dimensions.height);
      
      const link = document.createElement("a");
      link.download = "resized_" + file.name;
      link.href = canvas.toDataURL(file.type);
      link.click();
      setResizing(false);
    };
  };

  return (
    <div className="glass-card">
      <ImageUploadArea onFileSelected={handleFile} imagePreview={preview} onClear={() => { setFile(null); setPreview(""); }} />
      {file && (
        <div style={{ marginTop: "1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem", maxWidth: "400px", margin: "0 auto 1.5rem auto" }}>
            <div>
              <label style={{ fontSize: "0.85rem", fontWeight: "600", display: "block", marginBottom: "0.25rem" }}>Width (px)</label>
              <input 
                type="number" 
                name="width" 
                value={dimensions.width} 
                onChange={handleDimensionChange}
                style={{ width: "100%", padding: "0.5rem", border: "1px solid var(--border)", borderRadius: "6px", backgroundColor: "var(--bg-surface)" }} 
              />
            </div>
            <div>
              <label style={{ fontSize: "0.85rem", fontWeight: "600", display: "block", marginBottom: "0.25rem" }}>Height (px)</label>
              <input 
                type="number" 
                name="height" 
                value={dimensions.height} 
                onChange={handleDimensionChange}
                style={{ width: "100%", padding: "0.5rem", border: "1px solid var(--border)", borderRadius: "6px", backgroundColor: "var(--bg-surface)" }} 
              />
            </div>
          </div>

          <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            <label style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", cursor: "pointer" }}>
              <input 
                type="checkbox" 
                checked={lockRatio} 
                onChange={(e) => setLockRatio(e.target.checked)} 
              />
              Lock Aspect Ratio (Original: {dimensions.originalWidth}x{dimensions.originalHeight})
            </label>
          </div>

          <div style={{ textAlign: "center" }}>
            <button onClick={resize} className="btn btn-primary" disabled={resizing}>
              <RefreshCw size={18} /> {resizing ? "Resizing..." : "Resize & Download"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// 6. Crop Image
export function CropImage() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [crop, setCrop] = useState({ x: 10, y: 10, w: 80, h: 80 }); // in percentages
  const [cropping, setCropping] = useState(false);

  const handleFile = (selectedFile) => {
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const handleCropChange = (e) => {
    const { name, value } = e.target;
    setCrop({ ...crop, [name]: parseInt(value) || 0 });
  };

  const executeCrop = () => {
    if (!file) return;
    setCropping(true);
    const img = new Image();
    img.src = preview;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const pixelX = (crop.x / 100) * img.naturalWidth;
      const pixelY = (crop.y / 100) * img.naturalHeight;
      const pixelW = (crop.w / 100) * img.naturalWidth;
      const pixelH = (crop.h / 100) * img.naturalHeight;

      canvas.width = pixelW;
      canvas.height = pixelH;
      const ctx = canvas.getContext("2d");
      
      ctx.drawImage(img, pixelX, pixelY, pixelW, pixelH, 0, 0, pixelW, pixelH);
      
      const link = document.createElement("a");
      link.download = "cropped_" + file.name;
      link.href = canvas.toDataURL(file.type);
      link.click();
      setCropping(false);
    };
  };

  return (
    <div className="glass-card">
      {preview ? (
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}>
          <div style={{ position: "relative", alignSelf: "center", justifySelf: "center" }}>
            <img src={preview} alt="Crop Preview" style={{ maxWidth: "100%", maxHeight: "300px", borderRadius: "8px" }} />
            {/* Visual overlay boundary representation */}
            <div 
              style={{
                position: "absolute",
                top: `${crop.y}%`,
                left: `${crop.x}%`,
                width: `${crop.w}%`,
                height: `${crop.h}%`,
                border: "2px dashed var(--accent)",
                boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.5)",
                pointerEvents: "none"
              }}
            />
          </div>

          <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}>
            <p style={{ fontWeight: 600, fontSize: "0.9rem", marginBottom: "1rem", textAlign: "center" }}>Adjust Crop Parameters (Percentage %)</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.5rem", marginBottom: "1.5rem" }}>
              {["x", "y", "w", "h"].map((key) => (
                <div key={key}>
                  <label style={{ fontSize: "0.8rem", textTransform: "uppercase", display: "block", marginBottom: "0.25rem", textAlign: "center" }}>{key}</label>
                  <input
                    type="number"
                    name={key}
                    min="0"
                    max="100"
                    value={crop[key]}
                    onChange={handleCropChange}
                    style={{ width: "100%", padding: "0.5rem", border: "1px solid var(--border)", borderRadius: "6px", textAlign: "center", backgroundColor: "var(--bg-surface)" }}
                  />
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
              <button onClick={() => { setFile(null); setPreview(""); }} className="btn btn-secondary">
                <Trash size={16} /> Cancel
              </button>
              <button onClick={executeCrop} className="btn btn-primary" disabled={cropping}>
                <Scissors size={16} /> {cropping ? "Cropping..." : "Crop & Download"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <ImageUploadArea onFileSelected={handleFile} imagePreview={preview} onClear={() => { setFile(null); setPreview(""); }} />
      )}
    </div>
  );
}

// 7. Rotate Image
export function RotateImage() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [rotation, setRotation] = useState(0); // 0, 90, 180, 270
  const [flipH, setFlipH] = useState(false);
  const [flipV, setFlipV] = useState(false);

  const handleFile = (selectedFile) => {
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
    setRotation(0);
    setFlipH(false);
    setFlipV(false);
  };

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  const save = () => {
    if (!file) return;
    const img = new Image();
    img.src = preview;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const is90or270 = rotation === 90 || rotation === 270;
      
      canvas.width = is90or270 ? img.naturalHeight : img.naturalWidth;
      canvas.height = is90or270 ? img.naturalWidth : img.naturalHeight;
      
      const ctx = canvas.getContext("2d");
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((rotation * Math.PI) / 180);
      
      const scaleX = flipH ? -1 : 1;
      const scaleY = flipV ? -1 : 1;
      ctx.scale(scaleX, scaleY);
      
      ctx.drawImage(img, -img.naturalWidth / 2, -img.naturalHeight / 2);
      
      const link = document.createElement("a");
      link.download = "rotated_" + file.name;
      link.href = canvas.toDataURL(file.type);
      link.click();
    };
  };

  return (
    <div className="glass-card">
      <ImageUploadArea onFileSelected={handleFile} imagePreview={preview} onClear={() => { setFile(null); setPreview(""); }} />
      {file && (
        <div style={{ marginTop: "1.5rem" }}>
          {/* Visual Rotation transform preview wrapper */}
          <div style={{ overflow: "hidden", display: "flex", justifyContent: "center", margin: "1rem 0" }}>
            <img 
              src={preview} 
              alt="Rotation Preview" 
              style={{
                maxWidth: "200px",
                maxHeight: "200px",
                transform: `rotate(${rotation}deg) scale(${flipH ? -1 : 1}, ${flipV ? -1 : 1})`,
                transition: "transform 0.25s ease",
                borderRadius: "8px",
                border: "1px dashed var(--border)"
              }}
            />
          </div>

          <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "1.5rem" }}>
            <button onClick={handleRotate} className="btn btn-secondary" style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }}>
              <RotateCw size={14} /> Rotate 90°
            </button>
            <button onClick={() => setFlipH(!flipH)} className={`btn ${flipH ? "btn-primary" : "btn-secondary"}`} style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }}>
              Flip Horizontal
            </button>
            <button onClick={() => setFlipV(!flipV)} className={`btn ${flipV ? "btn-primary" : "btn-secondary"}`} style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }}>
              Flip Vertical
            </button>
          </div>

          <div style={{ textAlign: "center" }}>
            <button onClick={save} className="btn btn-primary">
              <Download size={18} /> Apply & Download
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// 8. Watermark Image
export function WatermarkImage() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [watermarkText, setWatermarkText] = useState("ConvertixLab");
  const [opacity, setOpacity] = useState(0.4);
  const [color, setColor] = useState("#ffffff");
  const [position, setPosition] = useState("center"); // center, topLeft, topRight, bottomLeft, bottomRight
  const [processing, setProcessing] = useState(false);

  const handleFile = (selectedFile) => {
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const applyWatermark = () => {
    if (!file) return;
    setProcessing(true);
    const img = new Image();
    img.src = preview;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      // Watermark Text styling
      const fontSize = Math.max(16, Math.round(canvas.width / 20));
      ctx.font = `bold ${fontSize}px sans-serif`;
      
      // opacity config
      ctx.globalAlpha = opacity;
      ctx.fillStyle = color;
      
      let x = canvas.width / 2;
      let y = canvas.height / 2;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const padding = fontSize;

      if (position === "topLeft") {
        x = padding;
        y = padding + fontSize / 2;
        ctx.textAlign = "left";
      } else if (position === "topRight") {
        x = canvas.width - padding;
        y = padding + fontSize / 2;
        ctx.textAlign = "right";
      } else if (position === "bottomLeft") {
        x = padding;
        y = canvas.height - padding - fontSize / 2;
        ctx.textAlign = "left";
      } else if (position === "bottomRight") {
        x = canvas.width - padding;
        y = canvas.height - padding - fontSize / 2;
        ctx.textAlign = "right";
      }

      ctx.fillText(watermarkText, x, y);
      
      const link = document.createElement("a");
      link.download = "watermarked_" + file.name;
      link.href = canvas.toDataURL(file.type);
      link.click();
      setProcessing(false);
    };
  };

  return (
    <div className="glass-card">
      <ImageUploadArea onFileSelected={handleFile} imagePreview={preview} onClear={() => { setFile(null); setPreview(""); }} />
      {file && (
        <div style={{ marginTop: "1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem", maxWidth: "500px", margin: "0 auto 1.5rem auto" }}>
            <div>
              <label style={{ fontSize: "0.85rem", fontWeight: "600", display: "block", marginBottom: "0.25rem" }}>Watermark Text</label>
              <input 
                type="text" 
                value={watermarkText} 
                onChange={(e) => setWatermarkText(e.target.value)} 
                style={{ width: "100%", padding: "0.5rem", border: "1px solid var(--border)", borderRadius: "6px", backgroundColor: "var(--bg-surface)" }} 
              />
            </div>
            <div>
              <label style={{ fontSize: "0.85rem", fontWeight: "600", display: "block", marginBottom: "0.25rem" }}>Text Color</label>
              <input 
                type="color" 
                value={color} 
                onChange={(e) => setColor(e.target.value)} 
                style={{ width: "100%", height: "38px", padding: "2px", border: "1px solid var(--border)", borderRadius: "6px", cursor: "pointer", backgroundColor: "var(--bg-surface)" }} 
              />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem", maxWidth: "500px", margin: "0 auto 1.5rem auto" }}>
            <div>
              <label style={{ fontSize: "0.85rem", fontWeight: "600", display: "block", marginBottom: "0.25rem" }}>Opacity ({Math.round(opacity * 100)}%)</label>
              <input 
                type="range" 
                min="0.1" 
                max="1.0" 
                step="0.05" 
                value={opacity} 
                onChange={(e) => setOpacity(parseFloat(e.target.value))} 
                style={{ width: "100%", marginTop: "0.5rem" }} 
              />
            </div>
            <div>
              <label style={{ fontSize: "0.85rem", fontWeight: "600", display: "block", marginBottom: "0.25rem" }}>Position</label>
              <select 
                value={position} 
                onChange={(e) => setPosition(e.target.value)}
                style={{ width: "100%", padding: "0.5rem", border: "1px solid var(--border)", borderRadius: "6px", backgroundColor: "var(--bg-surface)" }}
              >
                <option value="center">Center</option>
                <option value="topLeft">Top Left</option>
                <option value="topRight">Top Right</option>
                <option value="bottomLeft">Bottom Left</option>
                <option value="bottomRight">Bottom Right</option>
              </select>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <button onClick={applyWatermark} className="btn btn-primary" disabled={processing}>
              <Type size={18} /> {processing ? "Processing..." : "Add Watermark"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// 9. Background Remover (Chroma key / Color keyer)
export function BackgroundRemover() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [tolerance, setTolerance] = useState(40);
  const [targetColor, setTargetColor] = useState({ r: 255, g: 255, b: 255 }); // Defaults to White Background keying
  const [processing, setProcessing] = useState(false);
  const canvasRef = useRef(null);

  const handleFile = (selectedFile) => {
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const handleCanvasClick = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    
    // Scale click to canvas coordinates
    const x = Math.floor(((e.clientX - rect.left) / rect.width) * canvas.width);
    const y = Math.floor(((e.clientY - rect.top) / rect.height) * canvas.height);
    
    const pixel = ctx.getImageData(x, y, 1, 1).data;
    setTargetColor({ r: pixel[0], g: pixel[1], b: pixel[2] });
  };

  // Draw initial preview onto hidden canvas for pixel color scanning
  useEffect(() => {
    if (!preview) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = preview;
    img.onload = () => {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      ctx.drawImage(img, 0, 0);
    };
  }, [preview]);

  const removeBackground = () => {
    if (!file) return;
    setProcessing(true);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;
    
    const { r: tr, g: tg, b: tb } = targetColor;

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i+1];
      const b = data[i+2];

      // Calculate distance between target color and current pixel color
      const distance = Math.sqrt(
        Math.pow(r - tr, 2) + 
        Math.pow(g - tg, 2) + 
        Math.pow(b - tb, 2)
      );

      // If within tolerance threshold, make it transparent
      if (distance < tolerance) {
        data[i + 3] = 0; // alpha channel = 0
      }
    }

    ctx.putImageData(imgData, 0, 0);
    
    const link = document.createElement("a");
    link.download = "bg_removed_" + file.name.replace(/\.[^/.]+$/, "") + ".png";
    link.href = canvas.toDataURL("image/png");
    link.click();
    setProcessing(false);
  };

  return (
    <div className="glass-card">
      {preview ? (
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>
            Click on the image to select the color you want to remove. Current Key Color: 
            <span style={{ display: "inline-block", width: "16px", height: "16px", backgroundColor: `rgb(${targetColor.r},${targetColor.g},${targetColor.b})`, border: "1px solid var(--border)", marginLeft: "0.5rem", borderRadius: "4px", verticalAlign: "middle" }}></span>
          </p>

          <div style={{ overflow: "auto", maxHeight: "350px", border: "1px solid var(--border)", borderRadius: "8px", margin: "1rem 0", display: "inline-block" }}>
            <canvas 
              ref={canvasRef} 
              onClick={handleCanvasClick} 
              style={{ cursor: "crosshair", display: "block", maxWidth: "100%" }} 
            />
          </div>

          <div style={{ maxWidth: "300px", margin: "1rem auto 1.5rem auto" }}>
            <label style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", fontWeight: "600", marginBottom: "0.5rem" }}>
              <span>Color Tolerance:</span>
              <span>{tolerance}</span>
            </label>
            <input 
              type="range" 
              min="5" 
              max="150" 
              value={tolerance} 
              onChange={(e) => setTolerance(parseInt(e.target.value))} 
              style={{ width: "100%" }}
            />
          </div>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <button onClick={() => { setFile(null); setPreview(""); }} className="btn btn-secondary">
              Cancel
            </button>
            <button onClick={removeBackground} className="btn btn-primary" disabled={processing}>
              <EyeOff size={16} /> {processing ? "Processing..." : "Remove & Download PNG"}
            </button>
          </div>
        </div>
      ) : (
        <ImageUploadArea onFileSelected={handleFile} imagePreview={preview} onClear={() => { setFile(null); setPreview(""); }} />
      )}
    </div>
  );
}

// 10. Image to Base64
export function ImageToBase64() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [base64String, setBase64String] = useState("");
  const [copied, setCopied] = useState(false);

  const handleFile = (selectedFile) => {
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));

    const reader = new FileReader();
    reader.onload = (e) => {
      setBase64String(e.target.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const copy = () => {
    navigator.clipboard.writeText(base64String);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-card">
      <ImageUploadArea onFileSelected={handleFile} imagePreview={preview} onClear={() => { setFile(null); setPreview(""); setBase64String(""); }} />
      {base64String && (
        <div style={{ marginTop: "1.5rem" }}>
          <label style={{ display: "block", fontSize: "0.9rem", fontWeight: "600", marginBottom: "0.5rem" }}>Base64 Data URI</label>
          <textarea
            readOnly
            value={base64String}
            style={{
              width: "100%",
              height: "120px",
              padding: "0.5rem",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              backgroundColor: "var(--bg-base)",
              fontSize: "0.8rem",
              fontFamily: "monospace",
              resize: "none",
              marginBottom: "1rem"
            }}
          />
          <div style={{ textAlign: "center" }}>
            <button onClick={copy} className="btn btn-primary">
              {copied ? "Copied!" : "Copy Base64 String"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
