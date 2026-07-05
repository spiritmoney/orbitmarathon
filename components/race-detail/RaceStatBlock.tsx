"use client";

import { AnimateIn, Stagger, StaggerItem } from "@/components/motion/AnimateIn";
import { Stat } from "@/components/tokens";
import type { Race } from "@/lib/data/races";

export function RaceStatBlock({ race }: { race: Race }) {
  const stats = [
    { value: race.distance.replace(/\s.*/, ""), label: race.distance.includes("km") ? "Kilometres" : "Total" },
    { value: race.elevation.replace(/[^0-9,]+.*/, "").replace(",", ""), label: "Elevation (m)" },
    { value: race.cutoff.split(" ")[0], label: "Hour cutoff" },
    { value: `₦${(race.price / 1000).toFixed(0)}K`, label: "Entry from" },
  ];

  return (
    <AnimateIn>
      <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-line">
        {stats.map((s) => (
          <StaggerItem key={s.label}>
            <Stat value={s.value} label={s.label} variant="light" />
          </StaggerItem>
        ))}
      </Stagger>
    </AnimateIn>
  );
}
