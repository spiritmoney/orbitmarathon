import Link from "next/link";
import { Heading, Body, Eyebrow } from "@/components/tokens";
import { ElevationChart } from "@/components/race-detail/AidStationList";
import { Button } from "@/components/ui/button";
import { races } from "@/lib/data/races";

export const metadata = { title: "Course map" };

export default function CourseMapPage() {
  return (
    <>
      <section className="bg-deep-blue text-white py-16">
        <div className="max-w-[1180px] mx-auto px-4 md:px-8">
          <Eyebrow variant="sun">Course</Eyebrow>
          <Heading as="h1" size="lg" className="text-white mt-2">
            Course map & elevation
          </Heading>
          <Body className="text-tint-blue mt-4 max-w-2xl">
            Lagos coastal circuit from Victoria Island through Epe, finishing at Teslim Balogun Stadium.
          </Body>
        </div>
      </section>
      <div className="max-w-[1180px] mx-auto px-4 md:px-8 py-12 space-y-12">
        <div className="bg-deep-blue aspect-[16/9] relative flex items-center justify-center overflow-hidden">
          <div
            className="absolute top-0 right-0 bottom-0 w-1/2 bg-gradient-to-br from-forest to-volt opacity-90"
            style={{ clipPath: "polygon(35% 0, 100% 0, 100% 100%, 0 100%)" }}
            aria-hidden="true"
          />
          <p className="relative z-10 font-display text-3xl uppercase text-white">
            Interactive course map
          </p>
        </div>
        {races.map((race) => (
          <div key={race.id}>
            <Heading as="h2" size="md" className="mb-4">{race.name}</Heading>
            <ElevationChart race={race} />
          </div>
        ))}
        <Button asChild variant="primary">
          <Link href="/register">Register for a wave</Link>
        </Button>
      </div>
    </>
  );
}
