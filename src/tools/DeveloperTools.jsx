"use client";

import { useState } from "react";
import { Copy, Check, Play, AlertTriangle } from "lucide-react";
import * as helpers from "../utils/toolHelpers";

const BaseDevTool = ({ title, inputPlaceholder, onProcess, outputLabel = "Output Output", showLanguageSelect = false }) => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [lang, setLang] = useState("html");

  const handleProcess = () => {
    setError("");
    try {
      const result = onProcess(input, lang);
      setOutput(result);
    } catch (e) {
      setError(e.message || "An error occurred during processing.");
      setOutput("");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-card">
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.5rem" }}>
        {showLanguageSelect && (
          <div style={{ maxWidth: "200px" }}>
            <label style={{ fontSize: "0.85rem", fontWeight: "600", display: "block", marginBottom: "0.25rem" }}>Language</label>
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              style={{ width: "100%", padding: "0.5rem", border: "1px solid var(--border)", borderRadius: "6px", backgroundColor: "var(--bg-surface)" }}
            >
              <option value="html">HTML</option>
              <option value="css">CSS</option>
              <option value="javascript">JavaScript</option>
            </select>
          </div>
        )}
        <div>
          <label style={{ fontWeight: 600, fontSize: "0.9rem", display: "block", marginBottom: "0.5rem" }}>Input Source Code</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={inputPlaceholder}
            style={{ width: "100%", height: "150px", padding: "0.5rem", border: "1px solid var(--border)", borderRadius: "6px", backgroundColor: "var(--bg-surface)", fontFamily: "monospace", fontSize: "0.85rem" }}
          />
        </div>
      </div>

      <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        <button onClick={handleProcess} className="btn btn-primary" disabled={!input}>
          Process Code
        </button>
      </div>

      {error && (
        <div style={{ padding: "0.75rem", backgroundColor: "var(--error-light)", border: "1px solid var(--error)", borderRadius: "6px", color: "var(--error)", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem" }}>
          <AlertTriangle size={16} /> {error}
        </div>
      )}

      {output && (
        <div>
          <label style={{ fontWeight: 600, fontSize: "0.9rem", display: "block", marginBottom: "0.5rem" }}>{outputLabel}</label>
          <textarea
            readOnly
            value={output}
            style={{ width: "100%", height: "150px", padding: "0.5rem", border: "1px solid var(--border)", borderRadius: "6px", backgroundColor: "var(--bg-base)", fontFamily: "monospace", fontSize: "0.85rem", resize: "none", marginBottom: "1rem" }}
          />
          <div style={{ textAlign: "center" }}>
            <button onClick={handleCopy} className="btn btn-primary">
              {copied ? <Check size={16} /> : <Copy size={16} />} {copied ? "Copied!" : "Copy Output"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// 26. JSON Formatter
export function JsonFormatter() {
  return (
    <BaseDevTool
      title="JSON Formatter"
      inputPlaceholder='{"name":"ConvertixLab","features":["fast","clean"]}'
      onProcess={(input) => {
        const parsed = JSON.parse(input);
        return JSON.stringify(parsed, null, 2);
      }}
      outputLabel="Beautified JSON"
    />
  );
}

// 27. JSON Validator
export function JsonValidator() {
  const [val, setVal] = useState("");
  const [status, setStatus] = useState(null);

  const validate = () => {
    try {
      JSON.parse(val);
      setStatus({ success: true, message: "Valid JSON! Structure matches RFC 8259 Specifications." });
    } catch (e) {
      setStatus({ success: false, message: `Invalid JSON Structure: ${e.message}` });
    }
  };

  return (
    <div className="glass-card">
      <textarea
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder='Paste JSON content to validate...'
        style={{ width: "100%", height: "150px", padding: "0.5rem", border: "1px solid var(--border)", borderRadius: "6px", backgroundColor: "var(--bg-surface)", fontFamily: "monospace", fontSize: "0.85rem", marginBottom: "1rem" }}
      />
      <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        <button onClick={validate} className="btn btn-primary" disabled={!val}>
          Validate JSON
        </button>
      </div>

      {status && (
        <div 
          style={{
            padding: "1rem", 
            borderRadius: "6px", 
            border: `1px solid ${status.success ? "var(--success)" : "var(--error)"}`,
            backgroundColor: status.success ? "var(--success-light)" : "var(--error-light)",
            color: status.success ? "var(--success)" : "var(--error)",
            fontSize: "0.95rem"
          }}
        >
          {status.message}
        </div>
      )}
    </div>
  );
}

// 28. HTML Minifier
export function HtmlMinifier() {
  return (
    <BaseDevTool
      title="HTML Minifier"
      inputPlaceholder="<!-- Comment -->\n<div class='container'>\n  <p>Hello World</p>\n</div>"
      onProcess={(input) => helpers.minifyHTML(input)}
      outputLabel="Minified HTML Code"
    />
  );
}

// 29. CSS Minifier
export function CssMinifier() {
  return (
    <BaseDevTool
      title="CSS Minifier"
      inputPlaceholder="/* Stylesheet */\nbody {\n  background-color: white;\n  margin: 0;\n}"
      onProcess={(input) => helpers.minifyCSS(input)}
      outputLabel="Minified CSS"
    />
  );
}

// 30. JS Minifier
export function JsMinifier() {
  return (
    <BaseDevTool
      title="JS Minifier"
      inputPlaceholder="function hello() {\n  const message = 'Hello World';\n  console.log(message);\n}"
      onProcess={(input) => helpers.minifyJS(input)}
      outputLabel="Minified Javascript"
    />
  );
}

// 31. Base64 Encoder
export function Base64Encoder() {
  return (
    <BaseDevTool
      title="Base64 Encoder"
      inputPlaceholder="Type text to encode to Base64..."
      onProcess={(input) => btoa(unescape(encodeURIComponent(input)))}
      outputLabel="Encoded Base64 String"
    />
  );
}

// 32. Base64 Decoder
export function Base64Decoder() {
  return (
    <BaseDevTool
      title="Base64 Decoder"
      inputPlaceholder="Paste Base64 string to decode..."
      onProcess={(input) => decodeURIComponent(escape(atob(input)))}
      outputLabel="Decoded Text"
    />
  );
}

// 33. URL Encoder
export function UrlEncoder() {
  return (
    <BaseDevTool
      title="URL Encoder"
      inputPlaceholder="https://example.com/search?query=hello world"
      onProcess={(input) => encodeURIComponent(input)}
      outputLabel="Percent-Encoded URL String"
    />
  );
}

// 34. URL Decoder
export function UrlDecoder() {
  return (
    <BaseDevTool
      title="URL Decoder"
      inputPlaceholder="https%3A%2F%2Fexample.com%2Fsearch%3Fquery%3Dhello%20world"
      onProcess={(input) => decodeURIComponent(input)}
      outputLabel="Decoded URL"
    />
  );
}

// 35. JWT Decoder
export function JwtDecoder() {
  return (
    <BaseDevTool
      title="JWT Decoder"
      inputPlaceholder="Paste JSON Web Token string here..."
      onProcess={(input) => {
        const parts = input.split(".");
        if (parts.length !== 3) {
          throw new Error("Invalid JWT layout. A token consists of header, payload, and signature split by '.'");
        }
        const header = JSON.parse(decodeURIComponent(escape(atob(parts[0].replace(/-/g, "+").replace(/_/g, "/")))));
        const payload = JSON.parse(decodeURIComponent(escape(atob(parts[1].replace(/-/g, "+").replace(/_/g, "/")))));
        return JSON.stringify({ Header: header, Payload: payload }, null, 2);
      }}
      outputLabel="Decoded JWT claims"
    />
  );
}

// 36. Regex Tester
export function RegexTester() {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("g");
  const [text, setText] = useState("");
  const [matches, setMatches] = useState([]);

  const testRegex = () => {
    if (!pattern) return;
    try {
      const regex = new RegExp(pattern, flags);
      const items = [];
      let match;
      if (flags.includes("g")) {
        while ((match = regex.exec(text)) !== null) {
          items.push({ text: match[0], index: match.index });
          if (match.index === regex.lastIndex) regex.lastIndex++; // Prevent infinite loops on empty matches
        }
      } else {
        match = regex.exec(text);
        if (match) items.push({ text: match[0], index: match.index });
      }
      setMatches(items);
    } catch (e) {
      alert("Invalid Regular Expression syntax.");
    }
  };

  return (
    <div className="glass-card">
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
        <div>
          <label style={{ fontSize: "0.85rem", fontWeight: "600", display: "block", marginBottom: "0.25rem" }}>RegEx Pattern</label>
          <input 
            type="text" 
            value={pattern} 
            onChange={(e) => setPattern(e.target.value)} 
            placeholder="e.g. [a-zA-Z]+"
            style={{ width: "100%", padding: "0.5rem", border: "1px solid var(--border)", borderRadius: "6px", backgroundColor: "var(--bg-surface)" }} 
          />
        </div>
        <div>
          <label style={{ fontSize: "0.85rem", fontWeight: "600", display: "block", marginBottom: "0.25rem" }}>Flags</label>
          <input 
            type="text" 
            value={flags} 
            onChange={(e) => setFlags(e.target.value)} 
            placeholder="g, i, m"
            style={{ width: "100%", padding: "0.5rem", border: "1px solid var(--border)", borderRadius: "6px", backgroundColor: "var(--bg-surface)" }} 
          />
        </div>
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type test strings here to match against pattern..."
        style={{ width: "100%", height: "100px", padding: "0.5rem", border: "1px solid var(--border)", borderRadius: "6px", backgroundColor: "var(--bg-surface)", marginBottom: "1rem" }}
      />

      <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        <button onClick={testRegex} className="btn btn-primary" disabled={!pattern}>
          Test Matches
        </button>
      </div>

      {matches.length > 0 && (
        <div style={{ padding: "1rem", border: "1px solid var(--border)", borderRadius: "8px", backgroundColor: "var(--bg-base)" }}>
          <h4 style={{ marginBottom: "0.5rem", fontWeight: "700" }}>Matches Found ({matches.length})</h4>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {matches.map((m, idx) => (
              <span key={idx} style={{ padding: "0.25rem 0.5rem", border: "1px solid var(--border)", borderRadius: "4px", backgroundColor: "var(--accent-light)", fontSize: "0.85rem" }}>
                "{m.text}" (Index: {m.index})
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// 37. Code Beautifier
export function CodeBeautifier() {
  return (
    <BaseDevTool
      title="Code Beautifier"
      inputPlaceholder="body{margin:0;padding:0;} div{color:blue;}"
      showLanguageSelect={true}
      onProcess={(input, lang) => {
        if (lang === "css") {
          return input.replace(/\{/g, " {\n  ").replace(/\;/g, ";\n  ").replace(/\s*\}\s*/g, "\n}\n\n").replace(/\s*;\s*$/g, ";").trim();
        } else if (lang === "html") {
          return helpers.formatXML(input);
        } else {
          return input.replace(/;/g, ";\n").replace(/{/g, " {\n  ").replace(/}/g, "\n}").trim();
        }
      }}
      outputLabel="Formatted Code"
    />
  );
}

// 38. XML Formatter
export function XmlFormatter() {
  return (
    <BaseDevTool
      title="XML Formatter"
      inputPlaceholder="<root><child name='value'/></root>"
      onProcess={(input) => helpers.formatXML(input)}
      outputLabel="Formatted XML Structure"
    />
  );
}

// 39. SQL Formatter
export function SqlFormatter() {
  return (
    <BaseDevTool
      title="SQL Formatter"
      inputPlaceholder="select * from users where id=1 group by role"
      onProcess={(input) => helpers.formatSQL(input)}
      outputLabel="Structured SQL Query"
    />
  );
}

// 40. Markdown Previewer
export function MarkdownPreviewer() {
  const [md, setMd] = useState("# Markdown Title\n\nWrite some **bold text** or *italics*.\n\n- Bullet item 1\n- Bullet item 2\n\n```js\nconst site = 'ConvertixLab';\n```");
  
  // Custom simple markdown to HTML parser helper
  const parseMarkdown = (raw) => {
    if (!raw) return "";
    let html = raw
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/^\- (.*$)/gim, '<li>$1</li>')
      .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*)\*/gim, '<em>$1</em>')
      .replace(/\`\`\`([\s\S]*?)\`\`\`/gm, '<pre style="background:var(--bg-base);padding:0.75rem;border-radius:6px;overflow:auto;margin:1rem 0;"><code>$1</code></pre>')
      .replace(/\`(.*?)\`/g, '<code>$1</code>')
      .replace(/\n/g, '<br/>');
    return html;
  };

  return (
    <div className="glass-card" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}>
        <div>
          <label style={{ fontWeight: 600, fontSize: "0.9rem", display: "block", marginBottom: "0.5rem" }}>Editor</label>
          <textarea
            value={md}
            onChange={(e) => setMd(e.target.value)}
            style={{ width: "100%", height: "200px", padding: "0.5rem", border: "1px solid var(--border)", borderRadius: "6px", backgroundColor: "var(--bg-surface)", fontFamily: "monospace", fontSize: "0.85rem" }}
          />
        </div>
        <div>
          <label style={{ fontWeight: 600, fontSize: "0.9rem", display: "block", marginBottom: "0.5rem" }}>Live Preview</label>
          <div 
            style={{
              padding: "1rem", 
              border: "1px solid var(--border)", 
              borderRadius: "6px", 
              minHeight: "200px", 
              backgroundColor: "#ffffff", 
              color: "#000000",
              overflow: "auto"
            }} 
            dangerouslySetInnerHTML={{ __html: parseMarkdown(md) }} 
          />
        </div>
      </div>
    </div>
  );
}
