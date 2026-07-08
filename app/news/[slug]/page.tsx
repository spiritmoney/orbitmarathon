import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/content/ArticleBody";
import { getArticleBySlug, newsArticles } from "@/lib/data/news";
import { createPageMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return newsArticles.map((a) => ({ slug: a.slug }));
}

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "News" };
  return createPageMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/news/${slug}`,
    type: "article",
    image: article.image,
  });
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <div className="max-w-[1180px] mx-auto px-4 md:px-8 py-12">
      <ArticleBody
        title={article.title}
        date={article.date}
        category={article.category}
        body={article.body}
        image={article.image}
        imageAlt={article.imageAlt}
      />
    </div>
  );
}
