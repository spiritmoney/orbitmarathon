import Link from "next/link";
import { Heading, Body, Eyebrow } from "@/components/tokens";
import { CardGrid } from "@/components/marketing/CardGrid";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { Button } from "@/components/ui/button";
import { races } from "@/lib/data/races";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "The Race",
  description:
    "Coastal 180, Marathon 42, and Duo Orbit — three waves on one Lagos coastal circuit from Oniru Stadium to Teslim Balogun Stadium.",
  path: "/the-race",
});

export default function TheRacePage() {
  return (
    <>
      <section className="bg-deep-blue text-white py-16 md:py-20">
        <div className="max-w-[1180px] mx-auto px-4 md:px-8">
          <Eyebrow variant="sun">The event</Eyebrow>
          <Heading as="h1" size="lg" className="text-white mt-2">
            Three waves, one finish line
          </Heading>
          <Body className="text-tint-blue mt-4 max-w-2xl">
            Orbit Marathon pairs a 180km ride with a 42.2km run across a single closed coastal circuit in Lagos, built for athletes who train for both disciplines.
          </Body>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-[1180px] mx-auto px-4 md:px-8">
          <SectionHeader title="Choose your wave" align="left" />
          <CardGrid races={races} />
          <div className="mt-10">
            <Button asChild variant="dark">
              <Link href="/the-race/course-map">View course map & elevation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
