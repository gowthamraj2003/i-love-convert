import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata = {
  title: "Privacy Policy | ILoveConvert",
  description: "Read our privacy policy. Learn how ILoveConvert processes images, documents, and code completely client-side without storing files.",
  alternates: {
    canonical: "https://gowthamraj2003.github.io/tools/privacy-policy/",
  }
};

export default function PrivacyPolicy() {
  const breadcrumbs = [
    { label: "Privacy Policy" }
  ];

  return (
    <div style={{ padding: "3rem 0" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        <Breadcrumbs items={breadcrumbs} />
        
        <h1 className="heading-lg" style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>Privacy Policy</h1>
        <div style={{ lineHeight: "1.8", display: "flex", flexDirection: "column", gap: "1.5rem", color: "var(--text-secondary)" }}>
          <p>
            At <strong>ILoveConvert</strong>, we prioritize the privacy and security of our users. This policy outlines how data is handled across all of our tools.
          </p>

          <h2 style={{ color: "var(--text-primary)", fontWeight: "700", fontSize: "1.4rem", marginTop: "1rem" }}>1. Zero Data Collection Architecture</h2>
          <p>
            We do not run backend databases or file storage systems to process your documents, graphics, vector layouts, or scripts. All operations are run entirely inside your browser's memory using HTML5 canvas buffers, CSS, and javascript modules. Your files are never uploaded to our servers, keeping them fully private.
          </p>

          <h2 style={{ color: "var(--text-primary)", fontWeight: "700", fontSize: "1.4rem", marginTop: "1rem" }}>2. Local Storage Usage</h2>
          <p>
            We use browser standard cookies and LocalStorage resources to improve user experience. Specifically:
          </p>
          <ul style={{ paddingLeft: "1.25rem", listStyleType: "disc", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <li>Storing your dark/light theme options (`data-theme`).</li>
            <li>Tracking your bookmarks list (`favorites`).</li>
            <li>Displaying your recently used tools list to allow fast navigation.</li>
          </ul>

          <h2 style={{ color: "var(--text-primary)", fontWeight: "700", fontSize: "1.4rem", marginTop: "1rem" }}>3. Third-Party Advertisements</h2>
          <p>
            We use Google AdSense placements to display contextual banners. These ad brokers may set cookies or inspect browser headers to serve personalized banners. Check your browser preferences to disable ad cookies.
          </p>
        </div>
      </div>
    </div>
  );
}
