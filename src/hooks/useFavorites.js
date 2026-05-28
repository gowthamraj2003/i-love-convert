"use client";

import { useState, useEffect } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("convertix_favorites");
      if (saved) {
        setFavorites(JSON.parse(saved));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const toggleFavorite = (slug) => {
    setFavorites((prev) => {
      let updated;
      if (prev.includes(slug)) {
        updated = prev.filter((s) => s !== slug);
      } else {
        updated = [...prev, slug];
      }
      localStorage.setItem("convertix_favorites", JSON.stringify(updated));
      return updated;
    });
  };

  const isFavorite = (slug) => favorites.includes(slug);

  return { favorites, toggleFavorite, isFavorite };
}
