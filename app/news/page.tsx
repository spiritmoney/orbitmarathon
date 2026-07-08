import Link from "next/link";
import Image from "next/image";
import { Heading, Body, Eyebrow } from "@/components/tokens";
import { newsArticles } from "@/lib/data/news";

export const metadata = { title: "News" };
export const revalidate = 3600;

export default function NewsPage() {
  return (
    <>
      <section className="bg-deep-blue text-white py-16">
        <div className="max-w-[1180px] mx-auto px-4 md:px-8">
          <Eyebrow variant="sun">Press</Eyebrow>
          <Heading as="h1" size="lg" className="text-white mt-2">
            News
          </Heading>
        </div>
      </section>
      <div className="max-w-[1180px] mx-auto px-4 md:px-8 py-12 grid md:grid-cols-3 gap-6">
        {newsArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/news/${article.slug}`}
            className="block bg-white border border-line overflow-hidden hover:border-sapphire focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun"
          >
            <div className="relative aspect-[16/10] bg-paper-dim">
              <Image
                src={article.image}
                alt={article.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-6">
              <Eyebrow>{article.category}</Eyebrow>
              <Heading as="h2" size="md" className="mt-2 normal-case text-xl">
                {article.title}
              </Heading>
              <Body muted className="mt-2 text-sm">{article.excerpt}</Body>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
