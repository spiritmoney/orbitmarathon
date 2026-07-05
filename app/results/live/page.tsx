import { Heading, Body, Eyebrow } from "@/components/tokens";
import { LeaderboardTable } from "@/components/data/LeaderboardTable";
import { LiveTrackerMap } from "@/components/data/LiveTrackerMap";
import { leaderboardData } from "@/lib/data/leaderboard";

export const metadata = { title: "Live tracker" };

export default function LiveResultsPage() {
  return (
    <>
      <section className="bg-deep-blue text-white py-16">
        <div className="max-w-[1180px] mx-auto px-4 md:px-8">
          <Eyebrow variant="sun">Live</Eyebrow>
          <Heading as="h1" size="lg" className="text-white mt-2">
            Live tracker
          </Heading>
          <Body className="text-tint-blue mt-4">
            Real-time positions updated every 30 seconds during race day.
          </Body>
        </div>
      </section>
      <div className="max-w-[1180px] mx-auto px-4 md:px-8 py-12 space-y-8">
        <LiveTrackerMap />
        <LeaderboardTable entries={leaderboardData} live />
      </div>
    </>
  );
}
