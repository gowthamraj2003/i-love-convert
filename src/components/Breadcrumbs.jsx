import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs({ items }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
        <Home size={14} />
        <span>Home</span>
      </Link>
      
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <span key={idx} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <ChevronRight size={14} className="separator" style={{ color: "var(--text-muted)" }} />
            {isLast ? (
              <span className="current" style={{ fontWeight: 600 }}>{item.label}</span>
            ) : (
              <Link href={item.href || "#"}>{item.label}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
