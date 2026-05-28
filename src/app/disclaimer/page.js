import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata = {
  title: "Disclaimer | ILoveConvert",
  description: "Read our disclaimer guidelines regarding tool calculations, code conversions and output accuracy.",
  alternates: {
    canonical: "https://gowthamraj2003.github.io/tools/disclaimer/",
  }
};

export default function Disclaimer() {
  const breadcrumbs = [
    { label: "Disclaimer" }
  ];

  return (
    <div style={{ padding: "3rem 0" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        <Breadcrumbs items={breadcrumbs} />
        
        <h1 className="heading-lg" style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>Disclaimer</h1>
        <div style={{ lineHeight: "1.8", display: "flex", flexDirection: "column", gap: "1.5rem", color: "var(--text-secondary)" }}>
          <p>
            The services and utility calculators on <strong>ILoveConvert</strong> are provided "as is" without warranty of any kind, either expressed or implied.
          </p>

          <h2 style={{ color: "var(--text-primary)", fontWeight: "700", fontSize: "1.4rem", marginTop: "1rem" }}>1. Tool Calculations & Output Accuracy</h2>
          <p>
            We optimize all algorithm logic for formatting (JSON, XML, SQL), vector rendering (SVG), and image compression. However, we cannot guarantee that output representations are 100% accurate for compiling, production database ingestion, or deployment. Check output content manually before running them in system configurations.
          </p>

          <h2 style={{ color: "var(--text-primary)", fontWeight: "700", fontSize: "1.4rem", marginTop: "1rem" }}>2. Limitation of Liability</h2>
          <p>
            ILoveConvert is not liable for data loss, site interruptions, system damage, or configuration issues resulting from your use of these tools.
          </p>
        </div>
      </div>
    </div>
  );
}
