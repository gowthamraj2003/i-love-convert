"use client";

import { useState, useEffect } from "react";

export function useRecentTools() {
  const [recentSlugs, setRecentSlugs] = useState([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("convertix_recent_tools");
      if (saved) {
        setRecentSlugs(JSON.parse(saved));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const addRecentTool = (slug) => {
    setRecentSlugs((prev) => {
      const filtered = prev.filter((s) => s !== slug);
      const updated = [slug, ...filtered].slice(0, 6);
      localStorage.setItem("convertix_recent_tools", JSON.stringify(updated));
      return updated;
    });
  };

  return { recentSlugs, addRecentTool };
}
