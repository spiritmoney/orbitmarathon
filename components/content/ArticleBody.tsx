import { Body, Heading } from "@/components/tokens";

interface ArticleBodyProps {
  title: string;
  date: string;
  category: string;
  body: string;
}

export function ArticleBody({ title, date, category, body }: ArticleBodyProps) {
  const paragraphs = body.split("\n\n");

  return (
    <article className="max-w-3xl">
      <p className="text-[11px] font-bold uppercase tracking-widest text-sapphire mb-2">
        {category}
      </p>
      <Heading as="h1" size="lg" className="normal-case">
        {title}
      </Heading>
      <time className="block mt-3 text-sm text-ink/50 font-semibold uppercase">
        {new Date(date).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </time>
      <div className="mt-8 space-y-4">
        {paragraphs.map((p, i) => (
          <Body key={i}>{p}</Body>
        ))}
      </div>
    </article>
  );
}
