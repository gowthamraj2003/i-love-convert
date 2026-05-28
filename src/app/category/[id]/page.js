import { categories, tools } from "../../../data/tools";
import ToolCard from "../../../components/ToolCard";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Link from "next/link";
import AdSense from "../../../components/AdSense";

export async function generateStaticParams() {
  return categories.map((cat) => ({
    id: cat.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const category = categories.find((c) => c.id === id);
  if (!category) return {};

  return {
    title: category.seoTitle,
    description: category.seoDesc,
    keywords: category.keywords.split(", "),
    alternates: {
      canonical: `https://gowthamraj2003.github.io/tools/category/${id}/`,
    }
  };
}

export default async function CategoryPage({ params }) {
  const { id } = await params;
  const category = categories.find((c) => c.id === id);
  
  if (!category) {
    return (
      <div className="container" style={{ padding: "4rem 0", textAlign: "center" }}>
        <h2>Category Not Found</h2>
        <Link href="/" className="btn btn-primary" style={{ marginTop: "1rem" }}>Go Home</Link>
      </div>
    );
  }

  // Filter tools belonging to this category
  const categoryTools = tools.filter((t) => t.category === id);

  // Filter related categories
  const relatedCategories = categories.filter((c) => c.id !== id).slice(0, 3);

  const breadcrumbItems = [
    { label: category.name }
  ];

  return (
    <div style={{ padding: "3rem 0" }}>
      <div className="container">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Category Header */}
        <header style={{ marginBottom: "3rem" }}>
          <h1 className="heading-lg" style={{ fontSize: "2.5rem" }}>{category.name}</h1>
          <p className="subtitle" style={{ fontSize: "1.1rem", margin: "0.5rem 0 0 0" }}>
            {category.desc}
          </p>
        </header>

        {/* AdSense Slot */}
        <AdSense slot="category-top" />

        {/* Tools Grid */}
        <section style={{ marginBottom: "4rem" }}>
          <div className="grid-cols-3">
            {categoryTools.map((tool, idx) => (
              <span key={tool.slug} style={{ display: "contents" }}>
                <ToolCard tool={tool} />
                {(idx + 1) % 5 === 0 && (
                  <AdSense slot={`category-grid-${idx}`} className="grid-blend" />
                )}
              </span>
            ))}
          </div>
        </section>

        {/* Related Categories */}
        <section style={{ borderTop: "1px solid var(--border)", paddingTop: "3rem" }}>
          <h3 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "1.5rem" }}>Other Tool Categories</h3>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {relatedCategories.map((c) => (
              <Link 
                href={`/category/${c.id}/`} 
                key={c.id}
                className="btn btn-secondary"
                style={{ fontSize: "0.9rem", padding: "0.5rem 1rem" }}
              >
                {c.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
