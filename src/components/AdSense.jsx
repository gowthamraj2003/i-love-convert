"use client";

import { useEffect, useState } from "react";

export default function AdSense({ slot, style = {}, className = "" }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // In production, you would run (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div className={`adsense-placeholder ${className}`} style={style}>
      <span style={{ fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", color: "var(--text-muted)", letterSpacing: "1px", marginBottom: "0.25rem" }}>
        Advertisement
      </span>
      <div 
        style={{
          fontSize: "0.85rem",
          color: "var(--text-muted)",
          border: "1px dashed var(--border)",
          padding: "0.5rem 1rem",
          borderRadius: "4px",
          width: "100%",
          textAlign: "center"
        }}
      >
        Ad Slot {slot || "Responsive"} (AdSense ready)
      </div>
    </div>
  );
}
