"use client";

import { useState, useEffect } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import ToolCard from "../../components/ToolCard";
import Link from "next/link";
import { useFavorites } from "../../hooks/useFavorites";
import { tools } from "../../data/tools";
import { Heart } from "lucide-react";

export default function Favorites() {
  const { favorites } = useFavorites();
  const [pinnedTools, setPinnedTools] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (favorites.length > 0) {
      setPinnedTools(tools.filter(t => favorites.includes(t.slug)));
    } else {
      setPinnedTools([]);
    }
  }, [favorites]);

  const breadcrumbs = [
    { label: "Bookmarked Tools" }
  ];

  return (
    <div style={{ padding: "3rem 0" }}>
      <div className="container">
        <Breadcrumbs items={breadcrumbs} />
        
        <h1 className="heading-lg" style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>Bookmarked Tools</h1>

        {!mounted ? (
          <p style={{ color: "var(--text-secondary)" }}>Loading your bookmarks...</p>
        ) : pinnedTools.length > 0 ? (
          <div className="grid-cols-3">
            {pinnedTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="glass-card text-center" style={{ padding: "4rem 1.5rem" }}>
            <Heart size={48} color="var(--text-secondary)" style={{ marginBottom: "1rem", opacity: 0.5 }} />
            <h3 style={{ marginBottom: "0.5rem" }}>No Bookmarked Tools Found</h3>
            <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
              Pin tools you use frequently by clicking the heart button on their pages.
            </p>
            <Link href="/" className="btn btn-primary">
              Browse All Tools
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
