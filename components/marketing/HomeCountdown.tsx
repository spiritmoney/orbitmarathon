"use client";

import Link from "next/link";
import { Countdown } from "@/components/marketing/Countdown";
import { Body, Eyebrow } from "@/components/tokens";
import { Button } from "@/components/ui/button";
import { eventInfo } from "@/lib/data/event";

export function HomeCountdown() {
  return (
    <section className="bg-ink text-white py-10 md:py-12 border-b border-white/10">
      <div className="max-w-[1180px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div>
          <Eyebrow variant="sun" className="mb-2">
            {eventInfo.dateLabel}
          </Eyebrow>
          <Body className="text-tint-blue text-sm max-w-md">
            Free registration · Mandatory official jersey (₦{eventInfo.jerseyPrice.toLocaleString()}) ·
            Ages {eventInfo.ageMin}–{eventInfo.ageMax}
          </Body>
        </div>
        <Countdown />
        <Button asChild variant="primary" size="lg" className="shrink-0 self-start lg:self-center">
          <Link href="/register">Register & buy jersey</Link>
        </Button>
      </div>
    </section>
  );
}
