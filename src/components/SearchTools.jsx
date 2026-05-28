"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { tools } from "../data/tools";
import { Search, X, ArrowRight } from "lucide-react";

export default function SearchTools({ placeholder = "Search 50+ free online tools..." }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const filtered = tools.filter(
      (tool) =>
        tool.name.toLowerCase().includes(query.toLowerCase()) ||
        tool.desc.toLowerCase().includes(query.toLowerCase()) ||
        tool.keywords.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 8); // limit to 8 results

    setResults(filtered);
  }, [query]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (tool) => {
    setQuery("");
    setIsOpen(false);
    router.push(`/tools/${tool.category}/${tool.slug}/`);
  };

  return (
    <div 
      ref={containerRef} 
      className="search-container"
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto"
      }}
    >
      <div 
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "var(--bg-surface)",
          border: "1px solid var(--border)",
          borderRadius: "var(--border-radius-lg)",
          padding: "0.5rem 1rem",
          boxShadow: "var(--shadow-md)",
          transition: "all 0.2s ease",
          position: "relative",
          zIndex: 10
        }}
        onClick={() => setIsOpen(true)}
      >
        <Search size={20} style={{ color: "var(--text-muted)", marginRight: "0.75rem" }} />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          placeholder={placeholder}
          style={{
            border: "none",
            background: "none",
            outline: "none",
            width: "100%",
            fontSize: "1.05rem",
            color: "var(--text-primary)"
          }}
        />
        {query && (
          <button 
            onClick={() => setQuery("")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--text-secondary)",
              padding: "0.25rem"
            }}
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Autocomplete Results */}
      {isOpen && results.length > 0 && (
        <div 
          className="search-results animate-fade-in"
          style={{
            position: "absolute",
            top: "110%",
            left: 0,
            right: 0,
            backgroundColor: "var(--bg-surface)",
            border: "1px solid var(--border)",
            borderRadius: "var(--border-radius-lg)",
            boxShadow: "var(--shadow-lg)",
            zIndex: 100,
            maxHeight: "350px",
            overflowY: "auto",
            padding: "0.5rem 0"
          }}
        >
          {results.map((tool) => (
            <button
              key={tool.slug}
              onClick={() => handleSelect(tool)}
              style={{
                width: "100%",
                background: "none",
                border: "none",
                textAlign: "left",
                padding: "0.75rem 1.25rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
                borderBottom: "1px solid var(--border)",
                transition: "all 0.15s ease"
              }}
              className="search-result-item"
            >
              <div>
                <div style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--text-primary)" }}>{tool.name}</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.15rem" }}>{tool.desc}</div>
              </div>
              <ArrowRight size={14} style={{ color: "var(--accent)" }} />
            </button>
          ))}
        </div>
      )}

      {/* If open, query entered, but no results */}
      {isOpen && query && results.length === 0 && (
        <div 
          style={{
            position: "absolute",
            top: "110%",
            left: 0,
            right: 0,
            backgroundColor: "var(--bg-surface)",
            border: "1px solid var(--border)",
            borderRadius: "var(--border-radius-lg)",
            boxShadow: "var(--shadow-lg)",
            zIndex: 100,
            padding: "1.5rem",
            textAlign: "center",
            color: "var(--text-muted)",
            fontSize: "0.95rem"
          }}
        >
          No tools found matching "{query}"
        </div>
      )}

      <style jsx global>{`
        .search-result-item:hover {
          background-color: var(--accent-light) !important;
        }
        .search-result-item:last-child {
          border-bottom: none !important;
        }
      `}</style>
    </div>
  );
}
