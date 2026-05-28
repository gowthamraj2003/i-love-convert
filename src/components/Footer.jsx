import Link from "next/link";
import { categories } from "../data/tools";
import { Wrench, Mail, ShieldAlert } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Logo & About Column */}
          <div className="footer-info">
            <Link href="/" className="logo">
              <Wrench size={24} color="var(--accent-primary)" />
              ILove<span>Convert</span>
            </Link>
            <p>
              Your ultra-fast, premium client-side multi-tools platform. Convert, format, edit, compress, and analyze text, images, and documents securely inside your browser.
            </p>
            <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
              <Link href="mailto:support@iloveconvert.com" aria-label="Email Support" style={{ color: "var(--text-secondary)" }} className="footer-link">
                <Mail size={20} />
              </Link>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository" style={{ color: "var(--text-secondary)" }} className="footer-link">
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Categories Column */}
          <div>
            <h3 className="footer-heading">Categories</h3>
            <ul className="footer-links">
              {categories.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <Link href={`/category/${cat.id}/`} className="footer-link">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Categories Column */}
          <div>
            <h3 className="footer-heading">More Categories</h3>
            <ul className="footer-links">
              {categories.slice(5).map((cat) => (
                <li key={cat.id}>
                  <Link href={`/category/${cat.id}/`} className="footer-link">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Pages Column */}
          <div>
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-links">
              <li>
                <Link href="/about/" className="footer-link">About Us</Link>
              </li>
              <li>
                <Link href="/contact/" className="footer-link">Contact Support</Link>
              </li>
              <li>
                <Link href="/privacy-policy/" className="footer-link">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-of-service/" className="footer-link">Terms of Service</Link>
              </li>
              <li>
                <Link href="/disclaimer/" className="footer-link">Disclaimer</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} ILoveConvert. Built for high performance and extreme security. No files are stored on our servers.</p>
          <div className="footer-bottom-links">
            <Link href="/sitemap.xml" className="footer-link" style={{ fontSize: "0.8rem" }}>Sitemap</Link>
            <span style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>•</span>
            <span style={{ fontSize: "0.8rem", display: "flex", alignItems: "center", gap: "0.25rem" }}>
              <ShieldAlert size={12} /> SSL Secured
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
