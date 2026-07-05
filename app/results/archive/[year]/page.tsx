import Link from "next/link";
import { notFound } from "next/navigation";
import { Heading, Body, Eyebrow } from "@/components/tokens";
import { LeaderboardTable } from "@/components/data/LeaderboardTable";
import { archiveYears, getArchiveResults } from "@/lib/data/leaderboard";

export async function generateStaticParams() {
  return archiveYears.map((year) => ({ year: String(year) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const { year } = await params;
  return { title: `${year} Results Archive` };
}

export const revalidate = 3600;

export default async function ArchivePage({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const { year } = await params;
  const yearNum = parseInt(year, 10);
  if (!archiveYears.includes(yearNum)) notFound();

  return (
    <>
      <section className="bg-deep-blue text-white py-16">
        <div className="max-w-[1180px] mx-auto px-4 md:px-8">
          <Eyebrow variant="sun">Archive</Eyebrow>
          <Heading as="h1" size="lg" className="text-white mt-2">
            {year} results
          </Heading>
        </div>
      </section>
      <div className="max-w-[1180px] mx-auto px-4 md:px-8 py-12">
        <div className="flex gap-3 mb-8">
          {archiveYears.map((y) => (
            <Link
              key={y}
              href={`/results/archive/${y}`}
              className="text-sm font-bold uppercase text-sapphire hover:text-deep-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun"
            >
              {y}
            </Link>
          ))}
        </div>
        <LeaderboardTable entries={getArchiveResults(yearNum)} />
      </div>
    </>
  );
}
