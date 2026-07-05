import Link from "next/link";
import { Heading, Body, Eyebrow } from "@/components/tokens";
import { CourseMapViewer } from "@/components/race-detail/CourseMapViewer";
import { ElevationProfile } from "@/components/race-detail/ElevationProfile";
import { AidStationList } from "@/components/race-detail/AidStationList";
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
            Interactive maps for all three waves. Download GPX files, explore aid stations, and
            review elevation profiles for the Lagos coastal circuit.
          </Body>
        </div>
      </section>

      <div className="max-w-[1180px] mx-auto px-4 md:px-8 py-12 space-y-16">
        <CourseMapViewer />

        {races.map((race) => (
          <section key={race.id} className="space-y-6">
            <Heading as="h2" size="md">
              {race.name} · {race.distance}
            </Heading>
            <div className="grid md:grid-cols-2 gap-10">
              <ElevationProfile race={race} />
              <AidStationList race={race} />
            </div>
          </section>
        ))}

        <Button asChild variant="primary">
          <Link href="/register">Register & buy jersey</Link>
        </Button>
      </div>
    </>
  );
}
