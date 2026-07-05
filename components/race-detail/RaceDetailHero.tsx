"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Heading, Body, Eyebrow } from "@/components/tokens";
import { Button } from "@/components/ui/button";
import { transition } from "@/lib/motion";
import type { Race } from "@/lib/data/races";

export function RaceDetailHero({ race }: { race: Race }) {
  const reducedMotion = useReducedMotion();

  return (
    <section className="bg-deep-blue text-white py-16 md:py-20 overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 md:px-8">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition.base}
        >
          <Eyebrow variant="sun">{race.tag}</Eyebrow>
          <Heading as="h1" size="lg" className="text-white mt-2">
            {race.name}
          </Heading>
          <Body className="text-tint-blue mt-4 max-w-2xl">{race.description}</Body>
          <motion.div
            className="mt-6 flex gap-3"
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition.base, delay: 0.12 }}
          >
            <Button asChild variant="primary">
              <Link href={`/register?wave=${race.id}`}>Register for this wave</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/the-race/course-map">View course map</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
