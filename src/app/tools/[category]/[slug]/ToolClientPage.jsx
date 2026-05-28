"use client";

import { useEffect, useState } from "react";
import { useRecentTools } from "../../../../hooks/useRecentTools";
import { useFavorites } from "../../../../hooks/useFavorites";
import ToolRenderer from "../../../../tools/ToolRenderer";
import FAQAccordion from "../../../../components/FAQAccordion";
import AdSense from "../../../../components/AdSense";
import { Heart, Share2, Copy, Check } from "lucide-react";

export default function ToolClientPage({ tool, categoryName }) {
  const { addRecentTool } = useRecentTools();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [shareCopied, setShareCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    addRecentTool(tool.slug);
  }, [tool.slug]);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2000);
    }
  };

  const favorited = mounted && isFavorite(tool.slug);

  return (
    <div className="tool-grid">
      {/* Main Tool Area */}
      <div>
        <div 
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1.5rem",
            flexWrap: "wrap",
            gap: "1rem"
          }}
        >
          <div>
            <h1 className="heading-lg" style={{ margin: 0, fontSize: "2.25rem" }}>{tool.h1 || tool.name}</h1>
            <p style={{ color: "var(--text-secondary)", marginTop: "0.25rem" }}>{tool.desc}</p>
          </div>
          
          {mounted && (
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button 
                onClick={() => toggleFavorite(tool.slug)} 
                className="btn btn-secondary"
                style={{ padding: "0.5rem 1rem", fontSize: "0.85rem", gap: "0.25rem" }}
              >
                <Heart size={16} fill={favorited ? "var(--error)" : "none"} color={favorited ? "var(--error)" : "currentColor"} />
                <span>{favorited ? "Bookmarked" : "Bookmark"}</span>
              </button>
              <button 
                onClick={handleShare} 
                className="btn btn-secondary"
                style={{ padding: "0.5rem 1rem", fontSize: "0.85rem", gap: "0.25rem" }}
              >
                {shareCopied ? <Check size={16} color="var(--success)" /> : <Share2 size={16} />}
                <span>{shareCopied ? "Link Copied!" : "Share"}</span>
              </button>
            </div>
          )}
        </div>

        {/* AdSense Top */}
        <AdSense slot="tool-top" />

        {/* Dynamic Tool Interface */}
        <div style={{ marginBottom: "3rem" }}>
          <ToolRenderer slug={tool.slug} />
        </div>

        {/* How to use & Features */}
        <section className="glass-card" style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "1rem" }}>How to use {tool.name}</h2>
          <ol style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem", color: "var(--text-secondary)" }}>
            {tool.steps.map((step, idx) => (
              <li key={idx} style={{ fontSize: "0.95rem" }}>{step}</li>
            ))}
          </ol>

          <h3 style={{ fontSize: "1.1rem", fontWeight: "700", marginTop: "2rem", marginBottom: "0.75rem" }}>Key Features</h3>
          <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem", color: "var(--text-secondary)", listStyleType: "disc" }}>
            <li style={{ fontSize: "0.95rem" }}><strong>100% Client-Side:</strong> Processed locally on your device; files are never uploaded.</li>
            <li style={{ fontSize: "0.95rem" }}><strong>Ultra Fast:</strong> Local conversions without server queues.</li>
            <li style={{ fontSize: "0.95rem" }}><strong>Responsive design:</strong> Works on desktop, tablet, and mobile browsers.</li>
          </ul>
        </section>

        {/* FAQ Section */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "700" }}>Frequently Asked Questions</h2>
          <FAQAccordion faqs={tool.faqs} />
        </section>
      </div>

      {/* Sidebar Slots / Ad Slots */}
      <div>
        <AdSense slot="sidebar-box-1" style={{ minHeight: "250px" }} />
        <div className="glass-card" style={{ marginTop: "1.5rem" }}>
          <h3 style={{ fontSize: "1.05rem", fontWeight: "700", marginBottom: "0.75rem" }}>Why ILoveConvert?</h3>
          <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
            ILoveConvert builds secure, serverless tools that operate completely on-device. No data leaks, no accounts, and no subscriptions. Clean, lightweight web productivity.
          </p>
        </div>
        <AdSense slot="sidebar-box-2" style={{ minHeight: "250px", marginTop: "1.5rem" }} />
      </div>
    </div>
  );
}
