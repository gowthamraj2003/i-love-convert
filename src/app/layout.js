import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  metadataBase: new URL("https://gowthamraj2003.github.io/tools"),
  title: "ILoveConvert - Free Online Multi-Tools & File Converters",
  description: "Convert, format, edit, compress, and analyze text, images, and documents securely in your browser. Fast, free, and lightweight developer and creator tools.",
  keywords: ["online tools", "image converter", "pdf tools", "code formatter", "base64 encoder", "color picker", "qr generator"],
  authors: [{ name: "ILoveConvert" }],
  creator: "ILoveConvert",
  publisher: "ILoveConvert",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gowthamraj2003.github.io/tools",
    title: "ILoveConvert - Free Online Multi-Tools & File Converters",
    description: "Convert, format, edit, compress, and analyze text, images, and documents securely inside your browser.",
    siteName: "ILoveConvert",
  },
  twitter: {
    card: "summary_large_image",
    title: "ILoveConvert - Free Online Multi-Tools & File Converters",
    description: "Convert, format, edit, compress, and analyze text, images, and documents securely inside your browser.",
  }
};

const themeScript = `
  (function() {
    try {
      var saved = localStorage.getItem('theme');
      var system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      var theme = saved || system;
      document.documentElement.setAttribute('data-theme', theme);
    } catch (e) {}
  })();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
