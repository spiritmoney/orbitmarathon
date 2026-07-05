import { Heading, Body, Eyebrow } from "@/components/tokens";
import { LeaderboardTable } from "@/components/data/LeaderboardTable";
import { leaderboardData } from "@/lib/data/leaderboard";

export const metadata = { title: "Results" };

export default function ResultsPage() {
  return (
    <>
      <section className="bg-deep-blue text-white py-16">
        <div className="max-w-[1180px] mx-auto px-4 md:px-8">
          <Eyebrow variant="sun">Leaderboard</Eyebrow>
          <Heading as="h1" size="lg" className="text-white mt-2">
            Results
          </Heading>
          <Body className="text-tint-blue mt-4 max-w-xl">
            Official results for Orbit Marathon 2026. Filter by wave or view live tracking during the event.
          </Body>
        </div>
      </section>
      <div className="max-w-[1180px] mx-auto px-4 md:px-8 py-12">
        <LeaderboardTable entries={leaderboardData} />
      </div>
    </>
  );
}
