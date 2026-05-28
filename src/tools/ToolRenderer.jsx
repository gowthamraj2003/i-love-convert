"use client";

import * as ImageTools from "./ImageTools";
import * as VectorTools from "./VectorTools";
import * as DocumentTools from "./DocumentTools";
import * as DeveloperTools from "./DeveloperTools";
import * as TextTools from "./TextTools";
import * as ColorTools from "./ColorTools";
import * as WebTools from "./WebTools";

const componentsMap = {
  // Image Tools
  "jpg-to-png": ImageTools.JpgToPng,
  "png-to-jpg": ImageTools.PngToJpg,
  "webp-to-png": ImageTools.WebpToPng,
  "image-compressor": ImageTools.ImageCompressor,
  "image-resizer": ImageTools.ImageResizer,
  "crop-image": ImageTools.CropImage,
  "rotate-image": ImageTools.RotateImage,
  "watermark-image": ImageTools.WatermarkImage,
  "background-remover": ImageTools.BackgroundRemover,
  "image-to-base64": ImageTools.ImageToBase64,

  // Vector Tools
  "svg-optimizer": VectorTools.SvgOptimizer,
  "svg-to-png": VectorTools.SvgToPng,
  "png-to-svg": VectorTools.PngToSvg,
  "vector-viewer": VectorTools.VectorViewer,
  "svg-compressor": VectorTools.SVGCompressor,

  // Document Tools
  "pdf-to-word": DocumentTools.PdfToWord,
  "word-to-pdf": DocumentTools.WordToPdf,
  "merge-pdf": DocumentTools.MergePdf,
  "split-pdf": DocumentTools.SplitPdf,
  "compress-pdf": DocumentTools.CompressPdf,
  "pdf-unlock": DocumentTools.PdfUnlock,
  "pdf-protect": DocumentTools.PdfProtect,
  "excel-to-pdf": DocumentTools.ExcelToPdf,
  "ppt-to-pdf": DocumentTools.PptToPdf,
  "text-to-pdf": DocumentTools.TextToPdf,

  // Developer Tools
  "json-formatter": DeveloperTools.JsonFormatter,
  "json-validator": DeveloperTools.JsonValidator,
  "html-minifier": DeveloperTools.HtmlMinifier,
  "css-minifier": DeveloperTools.CssMinifier,
  "js-minifier": DeveloperTools.JsMinifier,
  "base64-encoder": DeveloperTools.Base64Encoder,
  "base64-decoder": DeveloperTools.Base64Decoder,
  "url-encoder": DeveloperTools.UrlEncoder,
  "url-decoder": DeveloperTools.UrlDecoder,
  "jwt-decoder": DeveloperTools.JwtDecoder,
  "regex-tester": DeveloperTools.RegexTester,
  "code-beautifier": DeveloperTools.CodeBeautifier,
  "xml-formatter": DeveloperTools.XmlFormatter,
  "sql-formatter": DeveloperTools.SqlFormatter,
  "markdown-previewer": DeveloperTools.MarkdownPreviewer,

  // Text Tools
  "word-counter": TextTools.WordCounter,
  "character-counter": TextTools.CharacterCounter,
  "remove-duplicate-lines": TextTools.RemoveDuplicateLines,
  "case-converter": TextTools.CaseConverter,
  "text-sorter": TextTools.TextSorter,

  // Color Tools
  "hex-to-rgb": ColorTools.HexToRgb,
  "rgb-to-hex": ColorTools.RgbToHex,
  "color-picker": ColorTools.ColorPicker,
  "gradient-generator": ColorTools.GradientGenerator,
  "palette-generator": ColorTools.PaletteGenerator,

  // Web Tools
  "qr-code-generator": WebTools.QrCodeGenerator,
  "qr-scanner": WebTools.QrScanner,
  "barcode-generator": WebTools.BarcodeGenerator,
  "barcode-reader": WebTools.BarcodeReader
};

export default function ToolRenderer({ slug }) {
  const Component = componentsMap[slug];

  if (!Component) {
    return (
      <div className="glass-card" style={{ textAlign: "center", padding: "3rem 1rem" }}>
        <h3 style={{ marginBottom: "1rem" }}>Tool Not Found</h3>
        <p style={{ color: "var(--text-secondary)" }}>The requested tool "{slug}" does not exist or has been moved.</p>
      </div>
    );
  }

  return <Component />;
}
