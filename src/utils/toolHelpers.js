// Text Utilities
export const countWords = (text) => {
  if (!text) return 0;
  const cleanText = text.trim().replace(/\s+/g, " ");
  return cleanText === "" ? 0 : cleanText.split(" ").length;
};

export const countCharacters = (text, includeSpaces = true) => {
  if (!text) return 0;
  return includeSpaces ? text.length : text.replace(/\s/g, "").length;
};

export const countLines = (text) => {
  if (!text) return 0;
  return text.split(/\r?\n/).length;
};

export const removeDuplicates = (text, caseSensitive = true, ignoreEmpty = true) => {
  if (!text) return "";
  let lines = text.split(/\r?\n/);
  const seen = new Set();
  const result = [];

  for (let line of lines) {
    if (ignoreEmpty && line.trim() === "") {
      result.push(line);
      continue;
    }
    const matchKey = caseSensitive ? line : line.toLowerCase();
    if (!seen.has(matchKey)) {
      seen.add(matchKey);
      result.push(line);
    }
  }
  return result.join("\n");
};

export const sortLines = (text, order = "asc", type = "alpha") => {
  if (!text) return "";
  let lines = text.split(/\r?\n/);
  
  lines.sort((a, b) => {
    if (type === "numeric") {
      const numA = parseFloat(a) || 0;
      const numB = parseFloat(b) || 0;
      return order === "asc" ? numA - numB : numB - numA;
    } else if (type === "length") {
      return order === "asc" ? a.length - b.length : b.length - a.length;
    } else { // alphabetical
      return order === "asc" ? a.localeCompare(b) : b.localeCompare(a);
    }
  });

  return lines.join("\n");
};

export const convertCase = (text, mode) => {
  if (!text) return "";
  switch(mode) {
    case "upper": return text.toUpperCase();
    case "lower": return text.toLowerCase();
    case "title":
      return text.replace(/\b\w/g, (char) => char.toUpperCase());
    case "sentence":
      return text.toLowerCase().replace(/(^\s*|[.!?]\s+)([a-z])/g, (m, g1, g2) => g1 + g2.toUpperCase());
    case "camel":
      return text
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
        .replace(/^\w/, (c) => c.toLowerCase());
    default: return text;
  }
};

// Color Utilities
export const hexToRgb = (hex) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const fullHex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

export const rgbToHex = (r, g, b) => {
  const clamp = (val) => Math.max(0, Math.min(255, val));
  return "#" + ((1 << 24) + (clamp(r) << 16) + (clamp(g) << 8) + clamp(b)).toString(16).slice(1).toUpperCase();
};

export const generateRandomPalette = (mode = "random", baseHex = "#3b82f6") => {
  const base = hexToRgb(baseHex) || { r: 59, g: 130, b: 246 };
  
  const hsv = rgbToHsv(base.r, base.g, base.b);
  let colors = [];

  switch(mode) {
    case "monochromatic":
      colors = [
        hsvToHex(hsv.h, Math.max(0.1, hsv.s - 0.4), Math.min(1, hsv.v + 0.3)),
        hsvToHex(hsv.h, Math.max(0.1, hsv.s - 0.2), Math.min(1, hsv.v + 0.15)),
        baseHex,
        hsvToHex(hsv.h, Math.min(1, hsv.s + 0.15), Math.max(0.1, hsv.v - 0.15)),
        hsvToHex(hsv.h, Math.min(1, hsv.s + 0.3), Math.max(0.1, hsv.v - 0.3))
      ];
      break;
    case "analogous":
      colors = [
        hsvToHex((hsv.h + 330) % 360, hsv.s, hsv.v),
        hsvToHex((hsv.h + 345) % 360, hsv.s, hsv.v),
        baseHex,
        hsvToHex((hsv.h + 15) % 360, hsv.s, hsv.v),
        hsvToHex((hsv.h + 30) % 360, hsv.s, hsv.v)
      ];
      break;
    case "complementary":
      colors = [
        baseHex,
        hsvToHex(hsv.h, hsv.s * 0.7, Math.min(1, hsv.v + 0.2)),
        hsvToHex(hsv.h, Math.min(1, hsv.s + 0.2), hsv.v * 0.7),
        hsvToHex((hsv.h + 180) % 360, hsv.s, hsv.v),
        hsvToHex((hsv.h + 180) % 360, hsv.s * 0.8, Math.max(0.2, hsv.v - 0.2))
      ];
      break;
    case "triadic":
      colors = [
        baseHex,
        hsvToHex(hsv.h, hsv.s * 0.8, Math.min(1, hsv.v + 0.2)),
        hsvToHex((hsv.h + 120) % 360, hsv.s, hsv.v),
        hsvToHex((hsv.h + 240) % 360, hsv.s, hsv.v),
        hsvToHex((hsv.h + 120) % 360, hsv.s * 0.8, Math.max(0.2, hsv.v - 0.2))
      ];
      break;
    default: // random
      for (let i = 0; i < 5; i++) {
        colors.push(rgbToHex(
          Math.floor(Math.random() * 256),
          Math.floor(Math.random() * 256),
          Math.floor(Math.random() * 256)
        ));
      }
  }
  return colors;
};

// Help helper color HSV translations
function rgbToHsv(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, v = max;
  const d = max - min;
  s = max === 0 ? 0 : d / max;

  if (max === min) {
    h = 0;
  } else {
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return { h: Math.round(h * 360), s: Math.round(s * 100) / 100, v: Math.round(v * 100) / 100 };
}

function hsvToHex(h, s, v) {
  let r, g, b;
  const i = Math.floor((h / 360) * 6);
  const f = (h / 360) * 6 - i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);

  switch (i % 6) {
    case 0: r = v; g = t; b = p; break;
    case 1: r = q; g = v; b = p; break;
    case 2: r = p; g = v; b = t; break;
    case 3: r = p; g = q; b = v; break;
    case 4: r = t; g = p; b = v; break;
    case 5: r = v; g = p; b = q; break;
  }
  return rgbToHex(Math.round(r * 255), Math.round(g * 255), Math.round(b * 255));
}

// Developer Code Utilities
export const minifyHTML = (html) => {
  if (!html) return "";
  return html
    .replace(/<!--[\s\S]*?-->/g, "") // remove comments
    .replace(/\s+/g, " ")            // collapse whitespaces
    .replace(/>\s+</g, "><")         // remove space between tags
    .trim();
};

export const minifyCSS = (css) => {
  if (!css) return "";
  return css
    .replace(/\/\*[\s\S]*?\*\//g, "") // remove comments
    .replace(/\s+/g, " ")             // collapse multiple spaces
    .replace(/\s*([\{\}:;\,])\s*/g, "$1") // remove spaces around symbols
    .replace(/;}/g, "}")              // remove unnecessary semicolons
    .trim();
};

export const minifyJS = (js) => {
  if (!js) return "";
  return js
    .replace(/\/\*[\s\S]*?\*\//g, "")  // multiline comments
    .replace(/\/\/[^\n]*\n/g, "")      // singleline comments
    .replace(/\s+/g, " ")             // collapse whitespaces
    .replace(/\s*([=\+\-\*\/\{\}\(\)\[\];,\?:\!])\s*/g, "$1") // spaces around syntax
    .trim();
};

export const formatXML = (xml, indent = "  ") => {
  let formatted = "";
  let reg = /(>)(<)(\/*)/g;
  let xmlString = xml.replace(reg, "$1\r\n$2$3");
  let pad = 0;
  
  xmlString.split("\r\n").forEach((node) => {
    let indentLevel = 0;
    if (node.match(/.+<\/\w[^>]*>$/)) {
      indentLevel = 0;
    } else if (node.match(/^<\/\w/)) {
      if (pad !== 0) pad -= 1;
    } else if (node.match(/^<\w[^>]*[^\/]>.*$/)) {
      indentLevel = 1;
    } else {
      indentLevel = 0;
    }

    let padding = "";
    for (let i = 0; i < pad; i++) {
      padding += indent;
    }

    formatted += padding + node + "\r\n";
    pad += indentLevel;
  });

  return formatted.trim();
};

export const formatSQL = (sql) => {
  if (!sql) return "";
  const keywords = [
    "SELECT", "FROM", "WHERE", "JOIN", "LEFT JOIN", "RIGHT JOIN", 
    "INNER JOIN", "ON", "AND", "OR", "GROUP BY", "ORDER BY", 
    "HAVING", "LIMIT", "INSERT INTO", "VALUES", "UPDATE", "SET", "DELETE"
  ];
  let formatted = sql.trim().replace(/\s+/g, " ");
  
  keywords.forEach((kw) => {
    const regex = new RegExp(`\\b${kw}\\b`, "gi");
    formatted = formatted.replace(regex, `\n${kw}`);
  });

  return formatted.split("\n").map(line => line.trim()).filter(line => line).join("\n");
};
