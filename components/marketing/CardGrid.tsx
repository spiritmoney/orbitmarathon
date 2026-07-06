"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Heading, Body, CardAccent } from "@/components/tokens";
import { AnimateIn, Stagger, StaggerItem } from "@/components/motion/AnimateIn";
import type { Race } from "@/lib/data/races";

interface WaveCardProps {
  race: Race;
}

function WaveCard({ race }: WaveCardProps) {
  const reducedMotion = useReducedMotion();
  const Wrapper = reducedMotion ? "div" : motion.div;

  return (
    <Wrapper
      {...(!reducedMotion && {
        whileHover: { y: -6 },
        transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
      })}
      className="h-full"
    >
      <Link
        href={`/the-race/${race.slug}`}
        className="group block h-full bg-white border border-line relative overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun transition-[box-shadow,border-color] hover:shadow-md hover:border-volt/25"
      >
        <CardAccent />
        <div className="p-6 pl-7">
          <span className="inline-block text-[10px] font-extrabold uppercase tracking-wide px-2 py-1 rounded-sm bg-paper-dim text-deep-blue mb-3.5">
            {race.tag}
          </span>
          <Heading as="h3" size="md" className="normal-case">
            {race.name}
          </Heading>
          <Body muted className="mt-2.5 text-sm">
            {race.description}
          </Body>
          <div className="flex justify-between mt-5 pt-4 border-t border-dashed border-line text-[11px] font-semibold uppercase tracking-wide text-ink/50">
            <span>{race.distance}</span>
            <span>{race.elevation}</span>
          </div>
        </div>
      </Link>
    </Wrapper>
  );
}

interface CardGridProps {
  races: Race[];
}

export function CardGrid({ races }: CardGridProps) {
  return (
    <Stagger className="grid md:grid-cols-3 gap-6">
      {races.map((race) => (
        <StaggerItem key={race.id}>
          <WaveCard race={race} />
        </StaggerItem>
      ))}
    </Stagger>
  );
}
