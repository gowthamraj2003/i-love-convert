export const dynamic = "force-static";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      }
    ],
    sitemap: "https://gowthamraj2003.github.io/tools/sitemap.xml", // Adjust path for github hosting deployment
  };
}
