"use client";

import { useState } from "react";
import { Copy, Trash, Check } from "lucide-react";
import * as helpers from "../utils/toolHelpers";

const BaseTextTool = ({ title, placeholder, onProcess, options = null }) => {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const handleProcess = () => {
    setOutput(onProcess(text));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setText("");
    setOutput("");
  };

  return (
    <div className="glass-card">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={placeholder}
        style={{ width: "100%", height: "150px", padding: "0.5rem", border: "1px solid var(--border)", borderRadius: "6px", backgroundColor: "var(--bg-surface)", marginBottom: "1rem", fontSize: "0.95rem" }}
      />

      {options && <div style={{ marginBottom: "1.5rem" }}>{options(text, setText)}</div>}

      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginBottom: "1.5rem" }}>
        <button onClick={handleClear} className="btn btn-secondary" disabled={!text}>
          Clear
        </button>
        <button onClick={handleProcess} className="btn btn-primary" disabled={!text}>
          Apply Action
        </button>
      </div>

      {output && (
        <div>
          <label style={{ fontWeight: 600, fontSize: "0.9rem", display: "block", marginBottom: "0.5rem" }}>Result Output</label>
          <textarea
            readOnly
            value={output}
            style={{ width: "100%", height: "150px", padding: "0.5rem", border: "1px solid var(--border)", borderRadius: "6px", backgroundColor: "var(--bg-base)", resize: "none", marginBottom: "1rem", fontSize: "0.95rem" }}
          />
          <div style={{ textAlign: "center" }}>
            <button onClick={handleCopy} className="btn btn-primary">
              {copied ? <Check size={16} /> : <Copy size={16} />} {copied ? "Copied!" : "Copy Result"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// 41. Word Counter
export function WordCounter() {
  const [val, setVal] = useState("");

  const words = helpers.countWords(val);
  const chars = helpers.countCharacters(val, true);
  const charsNoSpace = helpers.countCharacters(val, false);
  const lines = helpers.countLines(val);
  const readingTime = Math.ceil(words / 200); // 200 WPM average

  return (
    <div className="glass-card">
      <textarea
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder="Type or paste paragraphs to analyze counts..."
        style={{ width: "100%", height: "150px", padding: "0.5rem", border: "1px solid var(--border)", borderRadius: "6px", backgroundColor: "var(--bg-surface)", marginBottom: "1.5rem", fontSize: "0.95rem" }}
      />
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "1rem", textAlign: "center" }}>
        {[
          { label: "Words", val: words },
          { label: "Characters", val: chars },
          { label: "Chars (No Space)", val: charsNoSpace },
          { label: "Lines", val: lines },
          { label: "Reading Time", val: `~${readingTime} min` }
        ].map((item, idx) => (
          <div key={idx} style={{ padding: "0.75rem", border: "1px solid var(--border)", borderRadius: "8px", backgroundColor: "var(--bg-base)" }}>
            <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "0.25rem" }}>{item.label}</div>
            <div style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--accent)" }}>{item.val}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 42. Character Counter
export function CharacterCounter() {
  return <WordCounter />; // Functionality is integrated into the analyzer above
}

// 43. Remove Duplicate Lines
export function RemoveDuplicateLines() {
  const [caseSensitive, setCaseSensitive] = useState(true);
  const [ignoreEmpty, setIgnoreEmpty] = useState(true);

  return (
    <BaseTextTool
      title="Remove Duplicate Lines"
      placeholder="Paste items with repeating lines...\nItem A\nItem B\nItem A"
      onProcess={(input) => helpers.removeDuplicates(input, caseSensitive, ignoreEmpty)}
      options={() => (
        <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center" }}>
          <label style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", cursor: "pointer", fontSize: "0.9rem" }}>
            <input type="checkbox" checked={caseSensitive} onChange={(e) => setCaseSensitive(e.target.checked)} />
            Case Sensitive
          </label>
          <label style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", cursor: "pointer", fontSize: "0.9rem" }}>
            <input type="checkbox" checked={ignoreEmpty} onChange={(e) => setIgnoreEmpty(e.target.checked)} />
            Ignore Empty Lines
          </label>
        </div>
      )}
    />
  );
}

// 44. Case Converter
export function CaseConverter() {
  const [mode, setMode] = useState("upper");

  return (
    <BaseTextTool
      title="Case Converter"
      placeholder="Type text to convert case..."
      onProcess={(input) => helpers.convertCase(input, mode)}
      options={() => (
        <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", flexWrap: "wrap" }}>
          {["upper", "lower", "title", "sentence", "camel"].map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`btn ${mode === m ? "btn-primary" : "btn-secondary"}`}
              style={{ padding: "0.4rem 0.8rem", fontSize: "0.8rem" }}
            >
              {m.toUpperCase() === "CAMEL" ? "camelCase" : m.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    />
  );
}

// 45. Text Sorter
export function TextSorter() {
  const [order, setOrder] = useState("asc");
  const [type, setType] = useState("alpha");

  return (
    <BaseTextTool
      title="Text Sorter"
      placeholder="Paste lines of list to sort...\nOrange\nApple\nBanana"
      onProcess={(input) => helpers.sortLines(input, order, type)}
      options={() => (
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <div>
            <label style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginRight: "0.5rem" }}>Method</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              style={{ padding: "0.25rem 0.5rem", border: "1px solid var(--border)", borderRadius: "4px", backgroundColor: "var(--bg-surface)" }}
            >
              <option value="alpha">Alphabetical</option>
              <option value="numeric">Numerical</option>
              <option value="length">Line Length</option>
            </select>
          </div>
          <div>
            <label style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginRight: "0.5rem" }}>Direction</label>
            <select
              value={order}
              onChange={(e) => setOrder(e.target.value)}
              style={{ padding: "0.25rem 0.5rem", border: "1px solid var(--border)", borderRadius: "4px", backgroundColor: "var(--bg-surface)" }}
            >
              <option value="asc">A to Z (Ascending)</option>
              <option value="desc">Z to A (Descending)</option>
            </select>
          </div>
        </div>
      )}
    />
  );
}
