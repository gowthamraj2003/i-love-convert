export const categories = [
  {
    id: "image-tools",
    name: "Image Tools",
    desc: "Compress, resize, crop, and convert images instantly in your browser.",
    icon: "Image",
    seoTitle: "Free Image Tools Online - Compress, Resize & Convert - ConvertixLab",
    seoDesc: "Access free online image tools: JPG to PNG, image compressor, resizer, crop, rotate, watermark, background remover, and image to Base64 encoder.",
    keywords: "image tools, compress image, resize image, convert jpg, png to webp, background remover"
  },
  {
    id: "vector-tools",
    name: "Vector Tools",
    desc: "Optimize, view, and convert SVG and vector formats client-side.",
    icon: "Sparkles",
    seoTitle: "Vector & SVG Tools - Optimize, View & Convert - ConvertixLab",
    seoDesc: "Free online vector utilities. Optimize SVGs, convert SVG to PNG, PNG to SVG trace, and view vector files securely without uploading to servers.",
    keywords: "svg optimizer, svg to png, png to svg, vector viewer, compress svg"
  },
  {
    id: "document-tools",
    name: "Document Tools",
    desc: "Manage, convert, and secure PDF, Word, Excel, and other document formats.",
    icon: "FileText",
    seoTitle: "Document & PDF Tools - Convert, Merge & Protect - ConvertixLab",
    seoDesc: "Fast online PDF and document tools. Merge, split, compress, lock and unlock PDFs. Convert Word, Excel, PowerPoint, and Text to PDF directly.",
    keywords: "pdf merger, split pdf, compress pdf, word to pdf, excel to pdf, encrypt pdf"
  },
  {
    id: "developer-tools",
    name: "Developer Tools",
    desc: "Format, minify, validate, and convert code, JSON, SQL, base64, and regex.",
    icon: "Code",
    seoTitle: "Developer Utilities & Code Formatters - ConvertixLab",
    seoDesc: "Essential tools for developers: JSON validators, minifiers (HTML, CSS, JS), base64/URL encoders, JWT decoders, SQL formatters, and markdown previewers.",
    keywords: "json validator, html minifier, css minifier, jwt decoder, regex tester, sql formatter"
  },
  {
    id: "text-tools",
    name: "Text Tools",
    desc: "Analyse, clean, sort, and format text files, words, and characters.",
    icon: "AlignLeft",
    seoTitle: "Text Processing Tools - Counter, Cleaner & Sorter - ConvertixLab",
    seoDesc: "Free text manipulation tools. Word and character counters, duplicate line removers, case converters, and alphabetical text sorters.",
    keywords: "word counter, remove duplicate lines, case converter, text sorter, character count"
  },
  {
    id: "color-tools",
    name: "Color Tools",
    desc: "Pick, generate, and convert colors, gradients, and palettes.",
    icon: "Palette",
    seoTitle: "Color Palette & Gradient Generators - ConvertixLab",
    seoDesc: "Create beautiful color schemes. HEX to RGB converters, visual color pickers, CSS gradient generators, and color palette generators.",
    keywords: "hex to rgb, color picker, gradient generator, palette generator, color converter"
  },
  {
    id: "web-tools",
    name: "Web Tools",
    desc: "Generate and scan QR codes and barcodes for websites and products.",
    icon: "Globe",
    seoTitle: "Web QR & Barcode Generator & Scanner - ConvertixLab",
    seoDesc: "Generate QR codes and barcodes. Scan QR codes or read barcodes instantly from images using client-side scanning algorithms.",
    keywords: "qr generator, qr scanner, barcode generator, read barcode online, scan qr code"
  }
];

export const tools = [
  // IMAGE TOOLS
  {
    slug: "jpg-to-png",
    category: "image-tools",
    name: "JPG to PNG",
    title: "Free JPG to PNG Converter Online - Fast & Lightweight",
    desc: "Convert JPG images to PNG instantly using our free online converter tool. Fast, secure, lightweight, and mobile friendly.",
    h1: "JPG to PNG Converter",
    keywords: "jpg to png, image converter, free png converter, convert jpg online, lightweight image tool",
    faqs: [
      { q: "How to convert JPG to PNG?", a: "Simply upload your JPG file, and our tool will automatically convert and provide a high-quality PNG download link instantly." },
      { q: "Is this JPG to PNG tool free?", a: "Yes, ConvertixLab provides this tool 100% free with no limits, no registration required." },
      { q: "Are uploaded images secure?", a: "Absolutely! All processing is done client-side in your browser. Your images are never sent to any server." }
    ],
    steps: [
      "Select or drag-and-drop a JPG image.",
      "Wait for the image to load in the preview area.",
      "Click the 'Convert & Download' button to save it as PNG."
    ]
  },
  {
    slug: "png-to-jpg",
    category: "image-tools",
    name: "PNG to JPG",
    title: "Convert PNG to JPG Online Free - ConvertixLab",
    desc: "Convert PNG files to JPG formats with adjustable quality compression. Fast, safe, and works directly in your browser.",
    h1: "PNG to JPG Converter",
    keywords: "png to jpg, convert png online, png converter, free jpg converter, client-side converter",
    faqs: [
      { q: "Can I adjust the quality of the output JPG?", a: "Yes, our tool provides a quality slider so you can balance file size and image clarity before downloading." },
      { q: "Why convert PNG to JPG?", a: "JPG files are usually much smaller in size, making them ideal for web pages, emails, and storage saving." },
      { q: "Is my privacy protected?", a: "Yes, files are processed on your device, ensuring maximum privacy." }
    ],
    steps: [
      "Upload your PNG file.",
      "Use the quality slider to set the output compression rate.",
      "Click 'Convert to JPG' and save the image."
    ]
  },
  {
    slug: "webp-to-png",
    category: "image-tools",
    name: "WEBP to PNG",
    title: "WEBP to PNG Converter - Free & Secure - ConvertixLab",
    desc: "Convert modern WEBP images back to standard PNG format easily in seconds. 100% client-side, zero image uploads.",
    h1: "WEBP to PNG Converter",
    keywords: "webp to png, convert webp, convertixlab webp converter, webp image to png, static convert webp",
    faqs: [
      { q: "What is WEBP?", a: "WEBP is a modern image format by Google offering superior compression, but it isn't supported by some older software." },
      { q: "Does converting WEBP to PNG reduce quality?", a: "No, PNG is a lossless format, so the original pixels are preserved exactly as they are in the source WEBP." }
    ],
    steps: [
      "Select a WEBP file.",
      "Click 'Convert to PNG' to render the image.",
      "Download the lossless PNG file."
    ]
  },
  {
    slug: "image-compressor",
    category: "image-tools",
    name: "Image Compressor",
    title: "Compress Image Online Without Quality Loss - ConvertixLab",
    desc: "Reduce image file sizes instantly. Compress JPG, PNG, or WEBP images with real-time file size comparison.",
    h1: "Online Image Compressor",
    keywords: "image compressor, compress image, reduce photo size, online photo shrinker, optimize image size",
    faqs: [
      { q: "How much file size can I save?", a: "Typically, you can reduce file sizes by 50% to 80% with little to no visible difference in quality." },
      { q: "Is there a limit on file size?", a: "Since compression is done directly in your browser using canvas, you can compress very large files without upload limits!" }
    ],
    steps: [
      "Upload any JPG, PNG, or WEBP image.",
      "Adjust the target quality level.",
      "Compare the original and compressed size in real-time, then download."
    ]
  },
  {
    slug: "image-resizer",
    category: "image-tools",
    name: "Image Resizer",
    title: "Resize Image Online - Width, Height & Aspect Ratio",
    desc: "Resize images to custom width and height. Lock aspect ratio or crop to match exact pixel dimensions.",
    h1: "Image Resizer Tool",
    keywords: "image resizer, resize image online, change image dimensions, scale photo, custom width height",
    faqs: [
      { q: "What is locking the aspect ratio?", a: "Locking the aspect ratio prevents your image from stretching or looking distorted by automatically calculating width/height ratios." }
    ],
    steps: [
      "Upload your image.",
      "Enter new pixel dimensions (width/height) or scale percentage.",
      "Decide if you want to keep the aspect ratio.",
      "Click 'Resize & Download' to save the output."
    ]
  },
  {
    slug: "crop-image",
    category: "image-tools",
    name: "Crop Image",
    title: "Crop Image Online - Free Image Cropping Tool",
    desc: "Crop images visually using an interactive cropping box. Select pre-defined ratios like 16:9, 4:3, 1:1, or crop freely.",
    h1: "Crop Image Tool",
    keywords: "crop image, crop photo online, crop tool, image trimmer, photo cropper, square crop",
    faqs: [
      { q: "Does cropping reduce image resolution?", a: "Cropping trims off the edges, so the output image will have the dimensions of your selected crop box." }
    ],
    steps: [
      "Upload an image to crop.",
      "Adjust the crop area handles to select the desired portion.",
      "Select a preset aspect ratio if needed.",
      "Click 'Crop & Download' to crop and export your file."
    ]
  },
  {
    slug: "rotate-image",
    category: "image-tools",
    name: "Rotate Image",
    title: "Rotate Image Online Free - Rotate & Flip Images",
    desc: "Rotate images 90 degrees clockwise, counter-clockwise, 180 degrees, or flip them horizontally and vertically.",
    h1: "Rotate & Flip Image",
    keywords: "rotate image, flip image, mirror photo, flip vertical, rotate photo 90 degrees",
    faqs: [
      { q: "Does rotating an image affect its quality?", a: "No, rotating or flipping is done losslessly on the canvas, keeping the details of your image intact." }
    ],
    steps: [
      "Select an image.",
      "Use the buttons to rotate (CW, CCW) or flip (Horizontal, Vertical).",
      "Click 'Save Image' to download the rotated image."
    ]
  },
  {
    slug: "watermark-image",
    category: "image-tools",
    name: "Watermark Image",
    title: "Add Watermark to Image Online - Protect Your Photos",
    desc: "Add custom text or image watermarks to your pictures. Customize opacity, size, position, and font style.",
    h1: "Add Watermark to Image",
    keywords: "watermark image, add watermark, logo watermark, protect images online, text watermark",
    faqs: [
      { q: "Can I use an image logo as a watermark?", a: "Yes, you can choose to overlay either custom text or upload a transparent PNG logo file as the watermark." }
    ],
    steps: [
      "Upload the base image.",
      "Choose 'Text' or 'Image' watermark type.",
      "Customize position, opacity, scale, and styling.",
      "Download the protected watermarked image."
    ]
  },
  {
    slug: "background-remover",
    category: "image-tools",
    name: "Background Remover",
    title: "Remove Image Background Online - Simple Color Keying",
    desc: "Erase solid color backgrounds or use chroma-keying to remove backgrounds from logos and icons client-side.",
    h1: "Background Remover (Color Keyer)",
    keywords: "remove background, transparent background, background eraser, chroma key tool, remove white background",
    faqs: [
      { q: "How does this background remover work?", a: "It uses an intelligent color-matching algorithm. Click on any color in your image, adjust the similarity threshold, and the tool will erase that color to make it transparent." },
      { q: "Is this suitable for complex portrait photos?", a: "This lightweight client-side tool is ideal for logos, graphics, signature captures, and solid backgrounds. For complex photographic hairs, specialized AI is recommended." }
    ],
    steps: [
      "Upload an image with a solid color background.",
      "Click on the color preview or directly on the image to select the color to erase.",
      "Adjust the tolerance slider to increase/decrease sensitivity.",
      "Click 'Erase & Download' to export the transparent PNG."
    ]
  },
  {
    slug: "image-to-base64",
    category: "image-tools",
    name: "Image to Base64",
    title: "Convert Image to Base64 Online - ConvertixLab",
    desc: "Convert image files directly into Base64 URI strings. Perfect for embedding images in HTML, CSS, or JSON documents.",
    h1: "Image to Base64 Converter",
    keywords: "image to base64, base64 encoder, image stringify, data uri generator, inline image css",
    faqs: [
      { q: "What is Base64 image encoding?", a: "Base64 is a text representation of your binary image, allowing you to inline images inside HTML `<img>` tags or CSS background properties." }
    ],
    steps: [
      "Select an image file.",
      "The tool immediately encodes it.",
      "Copy the raw Base64 string or the fully formatted HTML/CSS code snippet."
    ]
  },

  // VECTOR TOOLS
  {
    slug: "svg-optimizer",
    category: "vector-tools",
    name: "SVG Optimizer",
    title: "SVG Optimizer Online - Clean & Minify SVG Files",
    desc: "Optimize SVG files by stripping unused tags, namespaces, editor metadata, and empty styles. Clean and shrink SVG files.",
    h1: "SVG Optimizer",
    keywords: "svg optimizer, clean svg, minify svg, shrink vector, svg cleaner",
    faqs: [
      { q: "Why optimize SVGs?", a: "Design programs like Illustrator or Figma include extra metadata, editor info, and bloated code. Optimizing reduces file sizes by up to 60% for faster web loading." }
    ],
    steps: [
      "Paste your SVG code or upload an SVG file.",
      "Toggle optimization rules (remove comments, minify paths).",
      "Copy the optimized code or download the minified SVG."
    ]
  },
  {
    slug: "svg-to-png",
    category: "vector-tools",
    name: "SVG to PNG",
    title: "SVG to PNG Converter - Free & High Resolution",
    desc: "Convert vector SVG files to raster PNG images at any custom resolution. Excellent for logos, icons, and diagrams.",
    h1: "SVG to PNG Converter",
    keywords: "svg to png, rasterize svg, convert svg online, export svg as png, high res svg converter",
    faqs: [
      { q: "Can I scale the PNG resolution?", a: "Yes, since SVG is a vector format, you can input any width or height to export a perfectly crisp high-resolution PNG." }
    ],
    steps: [
      "Upload your SVG file.",
      "Specify your desired output width or height.",
      "Download the rasterized transparent PNG."
    ]
  },
  {
    slug: "png-to-svg",
    category: "vector-tools",
    name: "PNG to SVG",
    title: "Convert PNG to SVG Online - Image Tracer",
    desc: "Trace raster PNG/JPG files and convert them into vector SVG paths. Create scalable vector graphics from bitmap images.",
    h1: "PNG to SVG Vector Tracer",
    keywords: "png to svg, image tracer, vectorizer, trace image online, png to vector, vectorizer tool",
    faqs: [
      { q: "How does the tracing work?", a: "It scans the pixel colors of your image and groups adjacent pixels into vector path tags. It works best for logos, flat icons, and high-contrast graphics." }
    ],
    steps: [
      "Upload a PNG, JPG, or GIF.",
      "Select color threshold and detail controls.",
      "Preview the traced paths and download the final SVG file."
    ]
  },
  {
    slug: "vector-viewer",
    category: "vector-tools",
    name: "Vector Viewer",
    title: "SVG Vector Viewer - Inspect & Preview Vector Code",
    desc: "View and inspect vector SVG graphics online. Zoom, pan, inspect elements, and examine XML source code side-by-side.",
    h1: "SVG Vector Viewer",
    keywords: "svg viewer, vector viewer, inspect svg, preview svg code, view vector graphic online",
    faqs: [
      { q: "Can I view the inner code structure?", a: "Yes, our SVG viewer shows the visual graphic on one side and a fully syntax-highlighted code tree on the other." }
    ],
    steps: [
      "Upload an SVG file or paste the code.",
      "Use the interactive canvas to zoom, scale, or inspect properties.",
      "Copy elements or edit XML properties in real-time."
    ]
  },
  {
    slug: "svg-compressor",
    category: "vector-tools",
    name: "SVG Compressor",
    title: "SVG Compressor - Compress Vector Graphic Files",
    desc: "Minify vector coordinates, round decimal numbers, and compress SVG files. Speed up your site by reducing SVG code sizes.",
    h1: "SVG Compressor",
    keywords: "svg compressor, minify svg, optimize vector size, compress svg online, svg code shrinker",
    faqs: [
      { q: "What is coordinate precision?", a: "Reducing precision rounds coordinates (e.g., 20.35467 to 20.3), which makes the SVG code shorter while keeping the visual shape identical." }
    ],
    steps: [
      "Select your SVG file.",
      "Choose precision level (decimal points).",
      "Click Compress and compare file size savings."
    ]
  },

  // DOCUMENT & PDF TOOLS
  {
    slug: "pdf-to-word",
    category: "document-tools",
    name: "PDF to Word",
    title: "Convert PDF to Word Online Free - Extract Text to DOCX",
    desc: "Extract text and structural layouts from PDF documents and save them as editable Microsoft Word files.",
    h1: "PDF to Word Converter",
    keywords: "pdf to word, convert pdf to docx, extract pdf to word, pdf docx online, editable pdf",
    faqs: [
      { q: "Is the layout preserved?", a: "Our converter parses document paragraphs, headers, and text streams to preserve the reading order in the output Word file." }
    ],
    steps: [
      "Upload your PDF document.",
      "Our system extracts the text structures.",
      "Download your editable Word document."
    ]
  },
  {
    slug: "word-to-pdf",
    category: "document-tools",
    name: "Word to PDF",
    title: "Convert Word to PDF Online - Free DOCX to PDF",
    desc: "Convert Microsoft Word (.docx or .doc) documents into standard, professional PDF format right in your browser.",
    h1: "Word to PDF Converter",
    keywords: "word to pdf, convert docx to pdf, free word converter, docx to pdf client, secure docx conversion",
    faqs: [
      { q: "How does the conversion occur?", a: "It builds a preview of the Word document content and compiles it using a PDF page compiler, fully client-side for maximum speed and security." }
    ],
    steps: [
      "Choose a .docx file.",
      "Preview the parsed document text.",
      "Click 'Generate PDF' to compile and download the PDF."
    ]
  },
  {
    slug: "merge-pdf",
    category: "document-tools",
    name: "Merge PDF",
    title: "Merge PDF Files Online - Combine PDFs Free",
    desc: "Combine multiple PDF files into a single document. Re-order pages, arrange files, and merge them in seconds.",
    h1: "Merge PDF Documents",
    keywords: "merge pdf, combine pdfs, join pdf documents, pdf combiner online, merge multiple pdfs",
    faqs: [
      { q: "Is there a limit on how many PDFs I can merge?", a: "No, you can combine as many PDF files as your computer's memory supports." }
    ],
    steps: [
      "Upload two or more PDF files.",
      "Drag and drop files to sort their ordering.",
      "Click 'Merge PDFs' to download the combined document."
    ]
  },
  {
    slug: "split-pdf",
    category: "document-tools",
    name: "Split PDF",
    title: "Split PDF Online - Extract Pages from PDF",
    desc: "Divide a PDF file into individual pages, or extract specific page ranges into a brand new PDF file.",
    h1: "Split PDF File",
    keywords: "split pdf, extract pages from pdf, divide pdf, separate pdf pages, pdf page extractor",
    faqs: [
      { q: "Can I split custom ranges?", a: "Yes, you can input individual page numbers (e.g. 1, 3, 5) or page ranges (e.g. 2-6) to split the document." }
    ],
    steps: [
      "Select the PDF you want to split.",
      "Choose to extract all pages individually, or specify custom page ranges.",
      "Click 'Split PDF' to export the files."
    ]
  },
  {
    slug: "compress-pdf",
    category: "document-tools",
    name: "Compress PDF",
    title: "Compress PDF Online - Reduce PDF File Size",
    desc: "Shrink the size of your PDF files by optimizing fonts, cleaning metadata, and compressing images within the document.",
    h1: "Compress PDF Online",
    keywords: "compress pdf, reduce pdf size, shrink pdf file, optimize pdf size, thin pdf document",
    faqs: [
      { q: "Will the PDF text quality degrade?", a: "No, text remains fully vector and crystal clear. Only embedded raster images are optimized to save space." }
    ],
    steps: [
      "Upload your PDF.",
      "Choose the compression level (Low, Medium, High).",
      "Download the compressed PDF."
    ]
  },
  {
    slug: "pdf-unlock",
    category: "document-tools",
    name: "PDF Unlock",
    title: "Unlock PDF Online - Remove Password Protection",
    desc: "Remove passwords and security restrictions from locked PDF files so you can copy, edit, or print them.",
    h1: "Unlock PDF Password",
    keywords: "unlock pdf, remove pdf password, decrypted pdf, unlock secured pdf, open locked pdf",
    faqs: [
      { q: "Do I need to know the password?", a: "Yes. For security reasons, to decrypt the PDF and remove restrictions permanently, you must enter the original password." }
    ],
    steps: [
      "Select your locked PDF.",
      "Enter the file's correct opening password.",
      "Click 'Unlock' to download a version with all restrictions removed."
    ]
  },
  {
    slug: "pdf-protect",
    category: "document-tools",
    name: "PDF Protect",
    title: "Protect PDF Online - Encrypt PDF with Password",
    desc: "Add strong encryption and passwords to your PDF files to protect confidential information from unauthorized access.",
    h1: "Protect PDF with Password",
    keywords: "protect pdf, encrypt pdf, lock pdf with password, secure pdf file, restrict pdf permissions",
    faqs: [
      { q: "What level of encryption is used?", a: "The tool utilizes standard 128-bit RC4 / AES equivalent encryption formats supported by pdf-lib to safeguard your files." }
    ],
    steps: [
      "Upload the PDF you want to secure.",
      "Enter and confirm a strong password.",
      "Click 'Encrypt & Protect' to download your secure PDF."
    ]
  },
  {
    slug: "excel-to-pdf",
    category: "document-tools",
    name: "Excel to PDF",
    title: "Convert Excel to PDF Online - XLSX to PDF",
    desc: "Convert Excel sheets (.xlsx, .xls) into printable PDF formats. View columns, rows, and grid lines perfectly formatted.",
    h1: "Excel to PDF Converter",
    keywords: "excel to pdf, convert xlsx to pdf, spreadsheet to pdf, print excel to pdf, free xlsx converter",
    faqs: [
      { q: "Does it support multiple sheets?", a: "Yes, each spreadsheet tab is converted to separate pages or sections in the output PDF document." }
    ],
    steps: [
      "Select an Excel sheet file.",
      "Preview the parsed rows/columns.",
      "Click 'Convert to PDF' and download."
    ]
  },
  {
    slug: "ppt-to-pdf",
    category: "document-tools",
    name: "PPT to PDF",
    title: "Convert PPT to PDF Online - PowerPoint to PDF",
    desc: "Convert PowerPoint slide presentations (.pptx, .ppt) to PDF format. Slides are formatted correctly as PDF pages.",
    h1: "PowerPoint to PDF Converter",
    keywords: "ppt to pdf, convert pptx to pdf, powerpoint to pdf online, export slides to pdf, slide converter",
    faqs: [
      { q: "Are slide layouts and text shapes kept?", a: "Yes, slide titles, paragraphs, and lists are arranged page-by-page inside the compiled PDF document." }
    ],
    steps: [
      "Upload a PowerPoint presentation.",
      "Our parser loads presentation slides.",
      "Download your presentation as a multi-page PDF."
    ]
  },
  {
    slug: "text-to-pdf",
    category: "document-tools",
    name: "Text to PDF",
    title: "Convert Text to PDF Online - TXT to PDF Converter",
    desc: "Convert raw text (.txt) files or copy-pasted logs into clean, readable PDF documents with custom font sizes and margins.",
    h1: "Text to PDF Converter",
    keywords: "text to pdf, convert txt to pdf, notepad to pdf, save text as pdf, simple text pdf generator",
    faqs: [
      { q: "Can I adjust layout styling?", a: "Yes, you can customize the font family, font size, line spacing, and page margin margins before compilation." }
    ],
    steps: [
      "Paste text or upload a .txt file.",
      "Set page formatting (font size, margin).",
      "Click 'Generate PDF' to download the compiled PDF."
    ]
  },

  // DEVELOPER TOOLS
  {
    slug: "json-formatter",
    category: "developer-tools",
    name: "JSON Formatter",
    title: "JSON Formatter & Beautifier Online - ConvertixLab",
    desc: "Clean, indent, and format raw JSON strings. Beautify nested JSON code with customizable indent spacings.",
    h1: "JSON Formatter & Beautifier",
    keywords: "json formatter, beautify json, pretty print json, format json string, json syntax helper",
    faqs: [
      { q: "Does it validate my JSON?", a: "Yes, it formats valid JSON and alerts you of syntax errors (like missing commas or quotes) with detailed line numbers." }
    ],
    steps: [
      "Paste raw, minified, or unformatted JSON text.",
      "Select tab size (2 or 4 spaces).",
      "Click 'Format JSON' to clean it up, then copy or download."
    ]
  },
  {
    slug: "json-validator",
    category: "developer-tools",
    name: "JSON Validator",
    title: "JSON Validator Online - Check JSON Syntax Errors",
    desc: "Validate JSON code against strict specifications. Pinpoint syntax errors, missing characters, and unquoted keys instantly.",
    h1: "JSON Syntax Validator",
    keywords: "json validator, check json, validate json syntax, json linter, fix json errors",
    faqs: [
      { q: "What does it check?", a: "It checks for duplicate keys, missing braces, invalid quotes, trailing commas, and other syntax errors that break JSON files." }
    ],
    steps: [
      "Type or paste your JSON input.",
      "Click 'Validate JSON'.",
      "Check the success notification or read the syntax error diagnostics."
    ]
  },
  {
    slug: "html-minifier",
    category: "developer-tools",
    name: "HTML Minifier",
    title: "HTML Minifier Online - Compress HTML Code Size",
    desc: "Minify HTML pages by stripping comments, whitespaces, empty lines, and redundant attributes to accelerate site performance.",
    h1: "HTML Minifier",
    keywords: "html minifier, minify html, compress html code, shrink html page, web page speed optimizer",
    faqs: [
      { q: "Does it break inline Javascript or CSS?", a: "Our minifier respects script tags and style tags, stripping whitespace while preserving functional code structures." }
    ],
    steps: [
      "Enter your source HTML markup.",
      "Select options (remove comments, collapse whitespaces).",
      "Click 'Minify' and copy the optimized code."
    ]
  },
  {
    slug: "css-minifier",
    category: "developer-tools",
    name: "CSS Minifier",
    title: "CSS Minifier Online - Compress CSS Stylesheets",
    desc: "Compress CSS stylesheets. Remove comments, redundant rules, spaces, and duplicate declarations to make CSS files lighter.",
    h1: "CSS Minifier",
    keywords: "css minifier, compress css, shrink css file, minify stylesheets, site layout optimizer",
    faqs: [
      { q: "How much size is saved?", a: "Typically, CSS minification can reduce files by 20% to 50%, depending on the original formatting." }
    ],
    steps: [
      "Paste your CSS stylesheet code.",
      "Click 'Minify CSS'.",
      "Copy the compressed output code block."
    ]
  },
  {
    slug: "js-minifier",
    category: "developer-tools",
    name: "JS Minifier",
    title: "JS Minifier Online - Compress JavaScript Code",
    desc: "Minify JavaScript source files client-side. Eliminate comments, spaces, line breaks, and redundant syntax blocks.",
    h1: "JavaScript Minifier",
    keywords: "js minifier, javascript compressor, shrink js file, minify script, client-side code minification",
    faqs: [
      { q: "Is this safe for ES6 script files?", a: "Yes, our minification engine parses standard JS/ES6 code safely, stripping formatting and preserving core code." }
    ],
    steps: [
      "Paste your JavaScript source code.",
      "Click 'Minify JS' to compress the script.",
      "Copy the minified script instantly."
    ]
  },
  {
    slug: "base64-encoder",
    category: "developer-tools",
    name: "Base64 Encoder",
    title: "Base64 Encoder Online - Encode String to Base64",
    desc: "Encode strings, passwords, or plain text into standard Base64 format. Secure, client-side text encoder.",
    h1: "Base64 Encoder",
    keywords: "base64 encoder, text to base64, encode string, base64 text converter, plain text to base64",
    faqs: [
      { q: "Is encoding the same as encryption?", a: "No. Base64 is an encoding format for transport purposes, NOT encryption. Anyone can decode it easily." }
    ],
    steps: [
      "Type or paste your text input.",
      "Select character encoding (UTF-8 by default).",
      "Click 'Encode' and copy the output Base64 string."
    ]
  },
  {
    slug: "base64-decoder",
    category: "developer-tools",
    name: "Base64 Decoder",
    title: "Base64 Decoder Online - Decode Base64 to Text",
    desc: "Decode Base64 strings back into human-readable plain text instantly in your browser. Fast and secure.",
    h1: "Base64 Decoder",
    keywords: "base64 decoder, base64 to text, decode string online, string decoder, translate base64",
    faqs: [
      { q: "What happens if my Base64 string is invalid?", a: "The decoder will report a padding/syntax error, helping you locate missing characters." }
    ],
    steps: [
      "Paste your Base64 encoded string.",
      "Click 'Decode to Text'.",
      "Read or copy the decoded text output."
    ]
  },
  {
    slug: "url-encoder",
    category: "developer-tools",
    name: "URL Encoder",
    title: "URL Encoder Online - Encode URL Query Strings",
    desc: "Convert special characters inside URLs to their percent-encoded format to safely transmit parameters.",
    h1: "URL Encoder",
    keywords: "url encoder, percent encoding, url escape, encode url string, web address converter",
    faqs: [
      { q: "Why encode URLs?", a: "Web addresses can only contain standard ASCII characters. Special symbols like spaces, slashes, or query signs must be escaped." }
    ],
    steps: [
      "Paste the URL or string to encode.",
      "Click 'Encode URL'.",
      "Copy the escaped URL string."
    ]
  },
  {
    slug: "url-decoder",
    category: "developer-tools",
    name: "URL Decoder",
    title: "URL Decoder Online - Decode Percent-Encoded URLs",
    desc: "Unescape percent-encoded URLs back to plain web addresses. Decode query parameters and special URL characters.",
    h1: "URL Decoder",
    keywords: "url decoder, unescape url, decode query string, decode percent signs, url link unmask",
    faqs: [
      { q: "Can this decode UTF-8 characters?", a: "Yes, it fully supports standard UTF-8 URL parameters, restoring characters like emojis and non-English scripts." }
    ],
    steps: [
      "Paste your percent-encoded URL string.",
      "Click 'Decode URL'.",
      "Copy the unescaped clean URL link."
    ]
  },
  {
    slug: "jwt-decoder",
    category: "developer-tools",
    name: "JWT Decoder",
    title: "JWT Decoder Online - Decode JSON Web Tokens",
    desc: "Decode JSON Web Tokens (JWT) client-side. Inspect and display header parameters, claims payload, and signatures.",
    h1: "JWT Decoder & Inspector",
    keywords: "jwt decoder, decode json web token, inspect jwt token, read jwt payload, jwt token checker",
    faqs: [
      { q: "Is my JWT token uploaded to any server?", a: "Never. All JWT splitting and Base64Url decoding are done in your browser. Your authentication keys remain safe." }
    ],
    steps: [
      "Paste your JWT token string.",
      "The tool immediately splits the token parts.",
      "Inspect the decoded Header, Payload (claims), and Signature verification info."
    ]
  },
  {
    slug: "regex-tester",
    category: "developer-tools",
    name: "Regex Tester",
    title: "Regex Tester - Interactive Regular Expression Tester",
    desc: "Test regular expressions in real-time. Input match targets and verify group captures with flag modifiers.",
    h1: "Regular Expression Tester",
    keywords: "regex tester, test regex online, regex validator, javascript regex match, regex expressions",
    faqs: [
      { q: "Which regex dialect does this use?", a: "It uses JavaScript's native RegExp engine, supporting modern lookaheads, lookbehinds, and named capture groups." }
    ],
    steps: [
      "Enter your regular expression pattern (e.g. `[a-z]+`).",
      "Select flags (g, i, m, s, u, y).",
      "Enter a test string and watch matches highlight instantly."
    ]
  },
  {
    slug: "code-beautifier",
    category: "developer-tools",
    name: "Code Beautifier",
    title: "Code Beautifier - Format JS, CSS & HTML Code",
    desc: "Format and pretty-print web languages. Beautify HTML, CSS, and JS files with proper indentation.",
    h1: "Code Beautifier & Formatter",
    keywords: "code beautifier, format code, html beautifier, css formatter, pretty print code",
    faqs: [
      { q: "Can I choose indentation spacing?", a: "Yes, you can configure spaces or tabs, indentation depth, and brace styles." }
    ],
    steps: [
      "Select your code language (HTML, CSS, JS).",
      "Paste your code inside the editor area.",
      "Click 'Beautify' to format the code."
    ]
  },
  {
    slug: "xml-formatter",
    category: "developer-tools",
    name: "XML Formatter",
    title: "XML Formatter Online - Beautify XML Document Structure",
    desc: "Format XML files. Pretty print nested tags, clean namespaces, and check XML structure for tags nesting errors.",
    h1: "XML Formatter & Beautifier",
    keywords: "xml formatter, beautify xml, pretty print xml, check xml errors, xml tag cleaner",
    faqs: [
      { q: "Does it validate XML tags?", a: "Yes, it uses the browser's DOMParser to check for missing closing tags or mismatched markup." }
    ],
    steps: [
      "Paste raw XML text.",
      "Select indentation spacing.",
      "Click 'Format XML' to clean up tag indentation."
    ]
  },
  {
    slug: "sql-formatter",
    category: "developer-tools",
    name: "SQL Formatter",
    title: "SQL Formatter Online - Beautify Database Queries",
    desc: "Format SQL query statements. Capitalize SQL keywords (SELECT, INSERT, UPDATE, JOIN) and arrange statements.",
    h1: "SQL Query Formatter",
    keywords: "sql formatter, beautify sql query, format database script, select query cleaner, sql pretty printer",
    faqs: [
      { q: "What SQL dialects are supported?", a: "The formatter handles general ANSI SQL keywords, compatible with MySQL, PostgreSQL, MS SQL, and Oracle." }
    ],
    steps: [
      "Enter your raw database query.",
      "Click 'Format SQL'.",
      "Copy the beautifully structured query."
    ]
  },
  {
    slug: "markdown-previewer",
    category: "developer-tools",
    name: "Markdown Previewer",
    title: "Markdown Previewer Online - Live HTML Editor",
    desc: "Write Markdown code on one side and see the live-rendered HTML output instantly on the other side.",
    h1: "Markdown Live Previewer",
    keywords: "markdown previewer, live markdown editor, compile md to html, md preview online, read markdown files",
    faqs: [
      { q: "Does it support GitHub flavored markdown?", a: "Yes, it handles tables, check-lists, strikethroughs, and fenced code blocks." }
    ],
    steps: [
      "Write or paste markdown text in the editor panel.",
      "Look at the right panel to preview the formatted HTML output.",
      "Copy the parsed HTML code or save the Markdown."
    ]
  },

  // TEXT TOOLS
  {
    slug: "word-counter",
    category: "text-tools",
    name: "Word Counter",
    title: "Word Counter Online - Count Words, Sentences & Characters",
    desc: "Count words, letters, sentences, paragraphs, and reading times in real-time. Perfect for essays and articles.",
    h1: "Word & Character Counter",
    keywords: "word counter, count words, letter counter, sentence count, reading time calculator, text analyzer",
    faqs: [
      { q: "How is reading time calculated?", a: "It is based on an average reading speed of 200 words per minute (WPM)." }
    ],
    steps: [
      "Type or paste your content.",
      "The statistics (words, characters, reading time) update in real-time."
    ]
  },
  {
    slug: "character-counter",
    category: "text-tools",
    name: "Character Counter",
    title: "Character Counter - Letter & Spaces Counter Tool",
    desc: "Analyze character lengths with or without space counts. Helpful for social media, tweets, and metadata limits.",
    h1: "Character Counter Tool",
    keywords: "character counter, count characters, letters tracker, tweet count limit, text character limit",
    faqs: [
      { q: "What is the difference between with and without spaces?", a: "Counting with spaces includes all whitespace keys, while without spaces counts letters, numbers, and symbols only." }
    ],
    steps: [
      "Enter your text in the analyzer.",
      "Look at the statistics block for exact character calculations."
    ]
  },
  {
    slug: "remove-duplicate-lines",
    category: "text-tools",
    name: "Remove Duplicate Lines",
    title: "Remove Duplicate Lines Online - Text List Cleaner",
    desc: "Clean up lists, emails, or data tables by sorting them and stripping out duplicate rows instantly.",
    h1: "Remove Duplicate Lines",
    keywords: "remove duplicate lines, clean text list, duplicate line remover, unique lines filter, sort list online",
    faqs: [
      { q: "Is it case-sensitive?", a: "You can toggle case sensitivity and ignore blank lines before filtering duplicates." }
    ],
    steps: [
      "Paste your text list.",
      "Select options (case sensitivity, trim lines).",
      "Click 'Remove Duplicates' to clean the list."
    ]
  },
  {
    slug: "case-converter",
    category: "text-tools",
    name: "Case Converter",
    title: "Case Converter Online - Upper, Lower & Title Case",
    desc: "Change text cases instantly. Convert text to UPPERCASE, lowercase, Title Case, Sentence case, or camelCase.",
    h1: "Text Case Converter",
    keywords: "case converter, uppercase, lowercase, title case, sentence case, camelCase text converter",
    faqs: [
      { q: "What is Sentence Case?", a: "It capitalizes the first letter of each sentence and lowers everything else, mimicking standard paragraphs." }
    ],
    steps: [
      "Input your text block.",
      "Click on your desired case conversion button.",
      "Copy the transformed text."
    ]
  },
  {
    slug: "text-sorter",
    category: "text-tools",
    name: "Text Sorter",
    title: "Text Sorter Online - Sort Lines Alphabetically",
    desc: "Sort text lists alphabetically (A-Z or Z-A), numerically, by length, or randomly. Fast text organizer.",
    h1: "Online Text Sorter",
    keywords: "text sorter, sort lines, sort list alphabetically, alphabetical order tool, numerical list sort",
    faqs: [
      { q: "Can I reverse the sort order?", a: "Yes, you can toggle between ascending (A-Z) and descending (Z-A) sorting directions." }
    ],
    steps: [
      "Paste the lines of text you want to sort.",
      "Choose your sorting method (Alphabetical, Numerical, Length, Reverse).",
      "Click 'Sort Lines' to view the ordered result."
    ]
  },

  // COLOR TOOLS
  {
    slug: "hex-to-rgb",
    category: "color-tools",
    name: "HEX to RGB",
    title: "HEX to RGB Converter - Color Code Converter",
    desc: "Convert HEX color codes to RGB or RGBA formats. Inspect CSS color functions with opacity controls.",
    h1: "HEX to RGB Color Converter",
    keywords: "hex to rgb, color converter, css hex to rgb, hex code translator, rgba converter",
    faqs: [
      { q: "What are HEX and RGB?", a: "HEX is a base-16 representation of color codes (e.g. #FF5733) used in web design, while RGB represents Red, Green, Blue levels (255, 87, 51)." }
    ],
    steps: [
      "Enter a 6-digit or 3-digit HEX code.",
      "Adjust the opacity slider for RGBA.",
      "Copy the converted RGB/RGBA style rules."
    ]
  },
  {
    slug: "rgb-to-hex",
    category: "color-tools",
    name: "RGB to HEX",
    title: "RGB to HEX Converter - Convert RGB Color to HEX",
    desc: "Convert RGB color values (Red, Green, Blue) into standard hexadecimal web colors. Clean and fast color tool.",
    h1: "RGB to HEX Color Converter",
    keywords: "rgb to hex, convert rgb, rgb web color, css color translator, rgb to hex string",
    faqs: [
      { q: "What range do RGB inputs require?", a: "Values must be integers between 0 and 255 for Red, Green, and Blue." }
    ],
    steps: [
      "Input the values for R, G, and B.",
      "The tool shows a color preview.",
      "Copy the generated HEX string."
    ]
  },
  {
    slug: "color-picker",
    category: "color-tools",
    name: "Color Picker",
    title: "Color Picker Online - Visual Color Selector",
    desc: "Select colors using a visual color spectrum. Inspect HEX, RGB, HSL, and CMYK outputs instantly.",
    h1: "Visual Color Picker",
    keywords: "color picker, select color, eyedropper tool, color wheel online, hex code picker",
    faqs: [
      { q: "Does it support HSL and CMYK?", a: "Yes, our picker outputs HSL and CMYK values alongside standard HEX and RGB formats." }
    ],
    steps: [
      "Use the color gradient map to select a hue.",
      "Adjust shade and brightness.",
      "Copy any of the color format values."
    ]
  },
  {
    slug: "gradient-generator",
    category: "color-tools",
    name: "CSS Gradient Generator - Linear & Radial Gradients",
    desc: "Create beautiful CSS gradients visually. Generate linear or radial gradient background styles with multiple color stops.",
    h1: "CSS Gradient Generator",
    keywords: "gradient generator, css gradient, linear gradient, radial gradient, gradient background maker",
    faqs: [
      { q: "Can I add multiple color stops?", a: "Yes, click along the gradient slider to add as many colors as you want, and slide them to adjust ratios." }
    ],
    steps: [
      "Choose linear or radial gradient style.",
      "Add and select colors on the slider track.",
      "Adjust gradient angle or positioning.",
      "Copy the generated `background: linear-gradient(...)` CSS rule."
    ]
  },
  {
    slug: "palette-generator",
    category: "color-tools",
    name: "Color Palette Generator - Design Color Schemes",
    desc: "Generate professional color schemes. Extract complementary, triadic, monochromatic, or random palettes.",
    h1: "Color Palette Generator",
    keywords: "palette generator, color scheme generator, website color palette, matching colors creator",
    faqs: [
      { q: "What palette modes are supported?", a: "Monochromatic, Analogous, Complementary, Triadic, and Random. These ensure matching design tones." }
    ],
    steps: [
      "Select a base color or click 'Randomize'.",
      "Choose a palette generation mode.",
      "Click to copy individual HEX colors from the output scheme."
    ]
  },

  // WEB TOOLS
  {
    slug: "qr-code-generator",
    category: "web-tools",
    name: "QR Code Generator",
    title: "Free QR Code Generator Online - ConvertixLab",
    desc: "Generate high-quality QR codes for URLs, text, Wi-Fi details, emails, or phone numbers. Customize color and size.",
    h1: "Online QR Code Generator",
    keywords: "qr code generator, make qr code, free qr generator, custom qr code, url to qr code",
    faqs: [
      { q: "Do these QR codes expire?", a: "No, they are static QR codes. The encoded data is written directly into the grid, so they will work forever." }
    ],
    steps: [
      "Select data type (URL, Text, Email).",
      "Enter your content details.",
      "Adjust dot color and background color, then download the QR image."
    ]
  },
  {
    slug: "qr-scanner",
    category: "web-tools",
    name: "QR Scanner",
    title: "QR Code Scanner Online - Scan QR from Camera & Images",
    desc: "Scan and read QR codes instantly. Upload QR images or use your camera to scan codes directly in the browser.",
    h1: "QR Code Scanner",
    keywords: "qr scanner, scan qr code, read qr online, camera qr scanner, upload qr image",
    faqs: [
      { q: "Does the camera scan record video?", a: "No. The camera stream is parsed purely local in your browser to extract the QR code. No media data is saved or uploaded." }
    ],
    steps: [
      "Upload a QR image, or click 'Start Camera' and grant permissions.",
      "Point your camera at the QR code.",
      "Read or open the decoded URL text instantly."
    ]
  },
  {
    slug: "barcode-generator",
    category: "web-tools",
    name: "Barcode Generator",
    title: "Barcode Generator Online - Generate Barcodes Free",
    desc: "Generate barcodes in formats like CODE128, EAN-13, UPC-A, and Code39. Enter product IDs and download barcode images.",
    h1: "Online Barcode Generator",
    keywords: "barcode generator, create barcode online, code128 generator, ean13 barcode, product label maker",
    faqs: [
      { q: "What format should I use?", a: "CODE128 is excellent for general alphanumeric data. EAN-13 and UPC-A are standard for retail products globally." }
    ],
    steps: [
      "Select barcode standard format.",
      "Enter your alphanumeric text or product code.",
      "Download the generated barcode image."
    ]
  },
  {
    slug: "barcode-reader",
    category: "web-tools",
    name: "Barcode Reader",
    title: "Barcode Reader Online - Scan Barcodes from Images",
    desc: "Scan and decode product barcodes from images or using your device's camera. Fast and fully client-side.",
    h1: "Barcode Reader & Scanner",
    keywords: "barcode reader, scan barcode, read barcode from image, ean scanner online, barcode validator",
    faqs: [
      { q: "Can it read barcodes from a phone screen?", a: "Yes, just upload an image screenshot of the barcode, or point your webcam at it." }
    ],
    steps: [
      "Select or take a photo of a barcode.",
      "The tool analyzes and decodes the number.",
      "Copy the decoded barcode digits."
    ]
  }
];
