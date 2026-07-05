import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/content/ArticleBody";
import { getTrainingBySlug, trainingArticles } from "@/lib/data/training";

export async function generateStaticParams() {
  return trainingArticles.map((a) => ({ slug: a.slug }));
}

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getTrainingBySlug(slug);
  return { title: article?.title ?? "Training" };
}

export default async function TrainingArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getTrainingBySlug(slug);
  if (!article) notFound();

  return (
    <div className="max-w-[1180px] mx-auto px-4 md:px-8 py-12">
      <ArticleBody
        title={article.title}
        date="2026-06-01"
        category={article.category}
        body={article.body}
      />
    </div>
  );
}
