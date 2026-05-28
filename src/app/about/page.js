import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata = {
  title: "About Us | ILoveConvert",
  description: "Learn more about ILoveConvert, a modern collection of 50+ free, client-side web tools designed for maximum security and performance.",
  alternates: {
    canonical: "https://gowthamraj2003.github.io/tools/about/",
  }
};

export default function About() {
  const breadcrumbs = [
    { label: "About Us" }
  ];

  return (
    <div style={{ padding: "3rem 0" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        <Breadcrumbs items={breadcrumbs} />
        
        <h1 className="heading-lg" style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>About ILoveConvert</h1>
        <div style={{ lineHeight: "1.8", display: "flex", flexDirection: "column", gap: "1.5rem", color: "var(--text-secondary)" }}>
          <p>
            Welcome to <strong>ILoveConvert</strong>, a premium multi-tool station created specifically to solve everyday development, conversion, text formatting, and design workflows securely and instantly.
          </p>
          
          <h2 style={{ color: "var(--text-primary)", fontWeight: "700", fontSize: "1.5rem", marginTop: "1rem" }}>Our Core Architecture</h2>
          <p>
            Traditional utility websites require uploading files to remote servers. This introduces queue latency, consumes bandwidth, and exposes sensitive details (such as personal images, private text segments, or passwords) to potential third-party logging.
          </p>
          <p>
            ILoveConvert is engineered around a <strong>100% Client-Side Engine</strong>. By leveraging HTML5 canvas drawing APIs, modern browser Web Cryptography tokens, and custom format parsers, we run conversion logic directly inside your local browser sandbox. Your files never touch a network host, keeping your data confidential.
          </p>

          <h2 style={{ color: "var(--text-primary)", fontWeight: "700", fontSize: "1.5rem", marginTop: "1rem" }}>Why Choose Us?</h2>
          <ul style={{ paddingLeft: "1.25rem", listStyleType: "disc", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <li><strong>Zero Account Registry:</strong> Start using any converter instantly. No signups, email entries, or API limit keys.</li>
            <li><strong>Fast Processing speeds:</strong> Running tasks locally on your GPU/CPU eliminates queue wait times.</li>
            <li><strong>Responsive Interface:</strong> Designed from scratch to render layouts elegantly on desktop screens and smartphones.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
