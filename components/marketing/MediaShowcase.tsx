"use client";

import Link from "next/link";
import { Eyebrow, Heading, Body } from "@/components/tokens";
import { MediaSlideshow } from "@/components/media/MediaSlideshow";
import { Button } from "@/components/ui/button";
import type { MediaItem } from "@/lib/data/media";

interface MediaShowcaseProps {
  items: MediaItem[];
}

export function MediaShowcase({ items }: MediaShowcaseProps) {
  return (
    <section
      className="relative min-h-[100svh] md:min-h-[820px] max-h-[960px] overflow-hidden"
      aria-label="In motion — Lagos, stadium, and cycling highlights"
    >
      <MediaSlideshow items={items} fullBleed />

      {/* Top scrim + header */}
      <div
        className="absolute inset-x-0 top-0 z-20 pointer-events-none bg-gradient-to-b from-black/75 from-0% via-black/40 via-35% to-transparent to-70% pt-16 md:pt-20 pb-20 md:pb-28"
        aria-hidden="false"
      >
        <div className="max-w-[1180px] mx-auto px-4 md:px-8 pointer-events-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-10">
            <div>
              <Eyebrow variant="sun" className="mb-3">
                In motion
              </Eyebrow>
              <Heading as="h2" size="lg" className="text-white">
                Ride the coast
              </Heading>
              <Body className="text-white/75 mt-3 max-w-md text-sm md:text-base">
                Lagos, the stadium, and the peloton — images and clips from the
                Orbit Marathon course.
              </Body>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Button asChild variant="primary">
                <Link href="/register">Register now</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/the-race/course-map">View course</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
