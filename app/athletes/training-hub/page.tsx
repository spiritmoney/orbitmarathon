import Link from "next/link";
import { Heading, Body, Eyebrow } from "@/components/tokens";
import { trainingArticles } from "@/lib/data/training";

export const metadata = { title: "Training hub" };
export const revalidate = 3600;

export default function TrainingHubPage() {
  return (
    <>
      <section className="bg-deep-blue text-white py-16">
        <div className="max-w-[1180px] mx-auto px-4 md:px-8">
          <Eyebrow variant="sun">Prepare</Eyebrow>
          <Heading as="h1" size="lg" className="text-white mt-2">
            Training hub
          </Heading>
          <Body className="text-tint-blue mt-4 max-w-xl">
            Downloadable PDF training plans and coach guides for every wave. Ages 18–50.
          </Body>
        </div>
      </section>
      <div className="max-w-[1180px] mx-auto px-4 md:px-8 py-12 grid md:grid-cols-3 gap-6">
        {trainingArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/athletes/training-hub/${article.slug}`}
            className="block bg-white border border-line p-6 hover:border-sapphire focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun"
          >
            <Eyebrow>{article.category}</Eyebrow>
            <Heading as="h2" size="md" className="mt-2 normal-case text-xl">
              {article.title}
            </Heading>
            <Body muted className="mt-2 text-sm">{article.excerpt}</Body>
            <span className="block mt-3 text-xs text-ink/40">{article.readTime} read</span>
            {article.pdfPath && (
              <span className="block mt-1 text-xs font-bold uppercase text-sapphire">
                PDF plan available
              </span>
            )}
          </Link>
        ))}
      </div>
    </>
  );
}
