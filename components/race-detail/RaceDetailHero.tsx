"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Heading, Body, Eyebrow } from "@/components/tokens";
import { Button } from "@/components/ui/button";
import { transition } from "@/lib/motion";
import type { Race } from "@/lib/data/races";

export function RaceDetailHero({ race }: { race: Race }) {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative bg-deep-blue text-white py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={race.heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/30" />
      </div>

      <div className="relative z-10 max-w-[1180px] mx-auto px-4 md:px-8">
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
      <span className="sr-only">{race.heroImageAlt}</span>
    </section>
  );
}
