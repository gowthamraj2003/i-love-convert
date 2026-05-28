import { tools, categories } from "../../../../data/tools";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import ToolClientPage from "./ToolClientPage";
import Link from "next/link";

export async function generateStaticParams() {
  return tools.map((tool) => ({
    category: tool.category,
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { category: catId, slug } = await params;
  const tool = tools.find((t) => t.slug === slug && t.category === catId);
  if (!tool) return {};

  return {
    title: tool.title,
    description: tool.seoDesc || tool.desc,
    keywords: tool.keywords.split(", "),
    alternates: {
      canonical: `https://gowthamraj2003.github.io/tools/tools/${catId}/${slug}/`,
    }
  };
}

export default async function ToolPage({ params }) {
  const { category: catId, slug } = await params;
  const tool = tools.find((t) => t.slug === slug && t.category === catId);
  const category = categories.find((c) => c.id === catId);

  if (!tool || !category) {
    return (
      <div className="container" style={{ padding: "4rem 0", textAlign: "center" }}>
        <h2>Tool Not Found</h2>
        <p style={{ color: "var(--text-secondary)" }}>The requested path does not map to a valid tool.</p>
        <Link href="/" className="btn btn-primary" style={{ marginTop: "1rem" }}>Go Home</Link>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: category.name, url: `/category/${category.id}/` },
    { label: tool.name }
  ];

  // Compile FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": tool.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  // Compile Breadcrumb List Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://gowthamraj2003.github.io/tools/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": category.name,
        "item": `https://gowthamraj2003.github.io/tools/category/${category.id}/`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": tool.name,
        "item": `https://gowthamraj2003.github.io/tools/tools/${category.id}/${tool.slug}/`
      }
    ]
  };

  return (
    <div style={{ padding: "2rem 0" }}>
      <div className="container">
        <Breadcrumbs items={breadcrumbItems} />
        
        <ToolClientPage tool={tool} categoryName={category.name} />

        {/* FAQ Schema Injections */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        
        {/* Breadcrumb Schema Injections */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </div>
    </div>
  );
}
