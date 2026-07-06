import type { MetadataRoute } from "next";
import { newsArticles } from "@/lib/data/news";
import { products } from "@/lib/data/shop";
import { trainingArticles } from "@/lib/data/training";
import { siteUrl } from "@/lib/seo";

const staticRoutes = [
  "",
  "/the-race",
  "/the-race/coastal-180",
  "/the-race/marathon-42",
  "/the-race/duo-orbit",
  "/the-race/course-map",
  "/register",
  "/awards",
  "/partners",
  "/partners/become-a-partner",
  "/story",
  "/travel",
  "/faq",
  "/contact",
  "/news",
  "/shop",
  "/results",
  "/results/live",
  "/athletes/ambassadors",
  "/athletes/training-hub",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/the-race") || path === "/register" ? 0.9 : 0.7,
  }));

  const news = newsArticles.map((article) => ({
    url: `${siteUrl}/news/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const training = trainingArticles.map((article) => ({
    url: `${siteUrl}/athletes/training-hub/${article.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const shop = products.map((product) => ({
    url: `${siteUrl}/shop/${product.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const results = ["2025", "2024", "2023"].map((year) => ({
    url: `${siteUrl}/results/archive/${year}`,
    lastModified,
    changeFrequency: "yearly" as const,
    priority: 0.4,
  }));

  return [...pages, ...news, ...training, ...shop, ...results];
}
