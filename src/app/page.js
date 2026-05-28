"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { tools, categories } from "../data/tools";
import SearchTools from "../components/SearchTools";
import ToolCard from "../components/ToolCard";
import FAQAccordion from "../components/FAQAccordion";
import { useRecentTools } from "../hooks/useRecentTools";
import { 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Smartphone, 
  Star,
  Image,
  Sparkles,
  FileText,
  Code,
  AlignLeft,
  Palette,
  Globe,
  Clock
} from "lucide-react";

// Icon Map
const iconMap = {
  Image: <Image size={24} />,
  Sparkles: <Sparkles size={24} />,
  FileText: <FileText size={24} />,
  Code: <Code size={24} />,
  AlignLeft: <AlignLeft size={24} />,
  Palette: <Palette size={24} />,
  Globe: <Globe size={24} />
};

export default function Home() {
  const { recentSlugs } = useRecentTools();
  const [recentTools, setRecentTools] = useState([]);

  // Popular Tools Selection
  const popularSlugs = ["jpg-to-png", "merge-pdf", "json-formatter", "qr-code-generator", "image-compressor", "word-counter"];
  const popularTools = tools.filter(t => popularSlugs.includes(t.slug));

  useEffect(() => {
    if (recentSlugs.length > 0) {
      setRecentTools(tools.filter(t => recentSlugs.includes(t.slug)));
    } else {
      setRecentTools([]);
    }
  }, [recentSlugs]);

  const generalFaqs = [
    { q: "What is ILoveConvert?", a: "ILoveConvert is a modern web-based hub providing 50+ free, secure, and ultra-fast converters and tools for creators and developers." },
    { q: "Are my uploaded files safe?", a: "100%! All file transformations (compressing, resizing, formats, encodings) are performed client-side inside your browser canvas. Your files are never sent to any server." },
    { q: "Does ILoveConvert support offline use?", a: "Yes, many of our tools operate completely offline once the site has loaded in your browser." },
    { q: "Is registration required?", a: "No. ILoveConvert is completely open and free with no email registration, captcha limits, or hidden fees." }
  ];

  return (
    <div style={{ padding: "4rem 0" }}>
      {/* Hero Section */}
      <section className="container text-center" style={{ marginBottom: "4rem" }}>
        <h1 className="h1-hero animate-slide-up" style={{ margin: "0 auto 1.5rem auto", maxWidth: "800px" }}>
          The Ultimate Hub of <span>50+ Free Web Tools</span>
        </h1>
        <p className="subtitle animate-slide-up" style={{ margin: "0 auto 2.5rem auto" }}>
          Convert images, secure PDFs, format code, design color palettes, and encode datasets. Safe, fast, and 100% processed in your browser.
        </p>
        <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <SearchTools />
        </div>
      </section>

      {/* Recently Used Tools */}
      {recentTools.length > 0 && (
        <section className="container" style={{ marginBottom: "4rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
            <Clock size={22} color="var(--accent)" />
            <h2 className="heading-lg" style={{ margin: 0 }}>Recently Used Tools</h2>
          </div>
          <div className="grid-cols-3">
            {recentTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </section>
      )}

      {/* Categories Grid */}
      <section className="container" style={{ marginBottom: "5rem" }}>
        <h2 className="heading-lg text-center" style={{ marginBottom: "2.5rem" }}>Browse Tools by Category</h2>
        <div className="grid-cols-3">
          {categories.map((cat) => (
            <Link 
              href={`/category/${cat.id}/`} 
              key={cat.id} 
              className="glass-card"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                textDecoration: "none"
              }}
            >
              <div 
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "10px",
                  backgroundColor: "var(--accent-light)",
                  color: "var(--accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                {iconMap[cat.icon] || <Cpu size={24} />}
              </div>
              <div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "0.25rem", color: "var(--text-primary)" }}>{cat.name}</h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>{cat.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Tools */}
      <section className="container" style={{ marginBottom: "5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "2rem", justifyContent: "center" }}>
          <Star size={24} color="#f59e0b" fill="#f59e0b" />
          <h2 className="heading-lg" style={{ margin: 0 }}>Popular Tools</h2>
        </div>
        <div className="grid-cols-3">
          {popularTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section style={{ backgroundColor: "var(--bg-surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "5rem 0", marginBottom: "5rem" }}>
        <div className="container">
          <h2 className="heading-lg text-center" style={{ marginBottom: "3.5rem" }}>Designed for Extreme Speed & Security</h2>
          <div className="grid-cols-2" style={{ gap: "2rem" }}>
            {[
              {
                icon: <ShieldCheck size={28} color="var(--accent)" />,
                title: "100% Secure Client-Side Execution",
                desc: "Your data privacy is our absolute priority. Unlike other online converters, all processing happens locally inside your browser cache. No uploads, no server data collection."
              },
              {
                icon: <Zap size={28} color="var(--accent)" />,
                title: "Ultra-Fast Operations",
                desc: "Built with clean React, standard JS canvas and optimized WebAssembly decoders. Experience near-instant results without waiting for upload queues or slow remote servers."
              },
              {
                icon: <Cpu size={28} color="var(--accent)" />,
                title: "Lightweight Codebase",
                desc: "Zero bloated framework components or heavy modules. The entire web architecture is optimized for fast load scores and smooth navigation."
              },
              {
                icon: <Smartphone size={28} color="var(--accent)" />,
                title: "Fully Responsive UI",
                desc: "Every card, toolbar, converter panel, and button is styled with CSS to automatically adapt to screen sizes, from mobile layouts to 4K displays."
              }
            ].map((f, i) => (
              <div key={i} style={{ display: "flex", gap: "1.25rem" }}>
                <div style={{ flexShrink: 0 }}>{f.icon}</div>
                <div>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: "700", marginBottom: "0.5rem" }}>{f.title}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container" style={{ marginBottom: "5rem", maxWidth: "800px" }}>
        <h2 className="heading-lg text-center">Frequently Asked Questions</h2>
        <p className="text-center" style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
          Have questions about how our platform secures and converts your files? Read below.
        </p>
        <FAQAccordion faqs={generalFaqs} />
      </section>

      {/* SEO Section */}
      <section className="container seo-section">
        <div className="seo-content">
          <h2>ILoveConvert: Premium Online Web Utilities</h2>
          <p>
            ILoveConvert is a free, modern web utility suite tailored for web designers, software engineers, and digital content creators. It provides direct browser utilities that solve daily workflows without needing local software installations or subscription accounts.
          </p>
          <h3>How does client-side file conversion work?</h3>
          <p>
            Traditional utility websites require you to upload images or documents to their backend servers. At ILoveConvert, our code uses HTML5 Canvas APIs, standard JS file parsers, and custom crypto engines directly inside your browser container. When you drag and drop a JPG to convert it to PNG, or paste JSON code to format it, the task runs instantly on your own machine. Your data never leaves your computer, ensuring total privacy.
          </p>
        </div>
      </section>

      {/* JSON-LD Schema markup for local SEO indexation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "ILoveConvert",
            "url": "https://gowthamraj2003.github.io/tools",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://gowthamraj2003.github.io/tools/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
    </div>
  );
}
