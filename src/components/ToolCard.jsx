"use client";

import Link from "next/link";
import { useFavorites } from "../hooks/useFavorites";
import { Heart, ArrowRight } from "lucide-react";
import * as LucideIcons from "lucide-react";

export default function ToolCard({ tool }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite(tool.slug);

  // Map category to a display name
  const catNames = {
    "image-tools": "Image",
    "vector-tools": "Vector",
    "document-tools": "Document",
    "developer-tools": "Developer",
    "text-tools": "Text",
    "color-tools": "Color",
    "web-tools": "Web"
  };

  const getCategoryColor = (cat) => {
    switch(cat) {
      case "image-tools": return "#3b82f6";
      case "vector-tools": return "#ec4899";
      case "document-tools": return "#10b981";
      case "developer-tools": return "#8b5cf6";
      case "text-tools": return "#f59e0b";
      case "color-tools": return "#ef4444";
      case "web-tools": return "#14b8a6";
      default: return "#6b7280";
    }
  };

  return (
    <div className="glass-card tool-card animate-slide-up" style={{ display: "flex", flexDirection: "column", height: "100%", position: "relative" }}>
      {/* Category Badge & Favorite Toggle */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
        <span 
          style={{
            fontSize: "0.75rem",
            fontWeight: "700",
            textTransform: "uppercase",
            color: getCategoryColor(tool.category),
            backgroundColor: `${getCategoryColor(tool.category)}15`,
            padding: "0.25rem 0.6rem",
            borderRadius: "9999px"
          }}
        >
          {catNames[tool.category] || "Tool"}
        </span>

        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFavorite(tool.slug);
          }}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: favorited ? "var(--error)" : "var(--text-muted)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0.25rem",
            transition: "all 0.2s ease"
          }}
          aria-label={favorited ? "Remove from bookmarks" : "Add to bookmarks"}
        >
          <Heart size={18} fill={favorited ? "currentColor" : "none"} />
        </button>
      </div>

      <h3 style={{ fontSize: "1.15rem", fontWeight: "700", marginBottom: "0.5rem", color: "var(--text-primary)" }}>
        {tool.name}
      </h3>
      
      <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "1.5rem", flexGrow: 1 }}>
        {tool.desc}
      </p>

      <Link 
        href={`/tools/${tool.category}/${tool.slug}/`}
        className="btn btn-secondary"
        style={{
          width: "100%",
          padding: "0.6rem 1rem",
          fontSize: "0.85rem",
          marginTop: "auto",
          justifyContent: "space-between"
        }}
      >
        <span>Open Tool</span>
        <ArrowRight size={14} />
      </Link>
    </div>
  );
}
