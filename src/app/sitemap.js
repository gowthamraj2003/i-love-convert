import { categories, tools } from "../data/tools";

export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = "https://gowthamraj2003.github.io/tools"; // Adjust base path for github hosting deployment

  // Core Static Pages
  const staticPages = [
    "",
    "/about/",
    "/contact/",
    "/privacy-policy/",
    "/terms-of-service/",
    "/disclaimer/",
    "/favorites/",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Category Pages
  const categoryPages = categories.map((cat) => ({
    url: `${baseUrl}/category/${cat.id}/`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Tool Pages
  const toolPages = tools.map((tool) => ({
    url: `${baseUrl}/tools/${tool.category}/${tool.slug}/`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticPages, ...categoryPages, ...toolPages];
}
