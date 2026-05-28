import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata = {
  title: "Terms of Service | ILoveConvert",
  description: "Read the Terms of Service for using the ILoveConvert platform and tools.",
  alternates: {
    canonical: "https://gowthamraj2003.github.io/tools/terms-of-service/",
  }
};

export default function TermsOfService() {
  const breadcrumbs = [
    { label: "Terms of Service" }
  ];

  return (
    <div style={{ padding: "3rem 0" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        <Breadcrumbs items={breadcrumbs} />
        
        <h1 className="heading-lg" style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>Terms of Service</h1>
        <div style={{ lineHeight: "1.8", display: "flex", flexDirection: "column", gap: "1.5rem", color: "var(--text-secondary)" }}>
          <p>
            By accessing and utilizing <strong>ILoveConvert</strong>, you agree to comply with the terms of use detailed below.
          </p>

          <h2 style={{ color: "var(--text-primary)", fontWeight: "700", fontSize: "1.4rem", marginTop: "1rem" }}>1. Permitted Use</h2>
          <p>
            You are granted a non-exclusive license to use the tools on this website for both personal and professional business purposes. Because all actions execute within your browser sandbox, you must confirm your activities do not violate local network compliance standards.
          </p>

          <h2 style={{ color: "var(--text-primary)", fontWeight: "700", fontSize: "1.4rem", marginTop: "1rem" }}>2. Security Disclaimer</h2>
          <p>
            Our web platform runs serverless. This means we are unable to restore deleted content, retrieve passwords, or recover lost items because your inputs are never received by our servers. You are solely responsible for saving output conversions to your device.
          </p>

          <h2 style={{ color: "var(--text-primary)", fontWeight: "700", fontSize: "1.4rem", marginTop: "1rem" }}>3. Modifications to Services</h2>
          <p>
            ILoveConvert reserves the right to modify, remove, optimize, or replace tools within this suite at any time without prior notice.
          </p>
        </div>
      </div>
    </div>
  );
}
