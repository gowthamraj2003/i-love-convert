"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "../hooks/useTheme";
import { categories } from "../data/tools";
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Search, 
  ChevronDown, 
  Heart,
  Wrench
} from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close menus on page change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        {/* Logo */}
        <Link href="/" className="logo">
          <Wrench size={26} color="var(--accent-primary)" />
          ILove<span>Convert</span>
        </Link>

        {/* Desktop Links */}
        <div className="nav-links">
          <Link 
            href="/" 
            className={`nav-link ${pathname === "/" ? "active" : ""}`}
          >
            Home
          </Link>

          {/* Categories Dropdown */}
          <div 
            className="dropdown-wrapper" 
            style={{ position: "relative" }}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button 
              className="nav-link dropdown-toggle" 
              onClick={toggleDropdown}
              style={{
                background: "none",
                border: "none",
                display: "flex",
                alignItems: "center",
                gap: "0.25rem",
                cursor: "pointer"
              }}
            >
              Categories <ChevronDown size={16} />
            </button>
            
            {dropdownOpen && (
              <div 
                className="dropdown-menu animate-fade-in"
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "0",
                  backgroundColor: "var(--bg-surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--border-radius)",
                  boxShadow: "var(--shadow-lg)",
                  padding: "0.75rem 0",
                  minWidth: "200px",
                  zIndex: 1000,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.25rem"
                }}
              >
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/category/${cat.id}/`}
                    className="dropdown-item"
                    style={{
                      padding: "0.5rem 1.25rem",
                      fontSize: "0.9rem",
                      color: "var(--text-secondary)",
                      display: "block",
                      transition: "all 0.15s ease"
                    }}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link 
            href="/favorites/" 
            className={`nav-link ${pathname === "/favorites/" ? "active" : ""}`}
            style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
          >
            <Heart size={16} /> Favorites
          </Link>

          <Link 
            href="/about/" 
            className={`nav-link ${pathname === "/about/" ? "active" : ""}`}
          >
            About
          </Link>

          {/* Theme Toggle */}
          {mounted && (
            <button 
              onClick={toggleTheme} 
              className="theme-toggle-btn" 
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}

          {/* Mobile Menu Icon */}
          <button 
            className="mobile-toggle" 
            onClick={toggleMobileMenu}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--text-primary)"
            }}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* CSS Rules for Desktop and Mobile Navbar adjustment */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .nav-links {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
        .dropdown-item:hover {
          background-color: var(--accent-light);
          color: var(--accent) !important;
        }
      `}</style>

      {/* Mobile Drawer Navigation */}
      <div 
        className={`mobile-menu-overlay ${mobileMenuOpen ? "open" : ""}`}
        onClick={toggleMobileMenu}
      />
      <div className={`sidebar ${mobileMenuOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <span className="logo" style={{ fontSize: "1.2rem" }}>
            <Wrench size={22} color="var(--accent-primary)" />
            ILove<span>Convert</span>
          </span>
          <button 
            onClick={toggleMobileMenu}
            style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-primary)" }}
          >
            <X size={24} />
          </button>
        </div>

        <div className="sidebar-nav">
          <Link href="/" className="sidebar-link">Home</Link>
          
          <div style={{ padding: "0.5rem 0" }}>
            <p style={{ fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.5rem" }}>
              Categories
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", paddingLeft: "0.5rem" }}>
              {categories.map((cat) => (
                <Link key={cat.id} href={`/category/${cat.id}/`} className="sidebar-link" style={{ fontSize: "0.95rem", padding: "0.25rem 0", border: "none" }}>
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/favorites/" className="sidebar-link" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Heart size={18} /> Bookmarks
          </Link>
          <Link href="/about/" className="sidebar-link">About Us</Link>
          <Link href="/contact/" className="sidebar-link">Contact</Link>
        </div>

        <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>Dark Mode</span>
          {mounted && (
            <button 
              onClick={toggleTheme} 
              className="theme-toggle-btn" 
              style={{ width: "44px", height: "44px" }}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
