"use client";

import Link from "next/link";
import { Bus, MapPin, Plane } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Body, Eyebrow, Heading } from "@/components/tokens";
import { CardAccent } from "@/components/tokens/CardAccent";
import { VoltSlash } from "@/components/tokens/VoltSlash";
import { Button } from "@/components/ui/button";
import { AnimateIn, Stagger, StaggerItem } from "@/components/motion/AnimateIn";
import { transition } from "@/lib/motion";
import { travelHighlights, travelHotels, travelSteps } from "@/lib/data/travel";

const stepIcons = [Plane, MapPin, Bus];

export function HomeTravel() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="py-16 md:py-24 bg-paper overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 md:px-8">
        <AnimateIn className="mb-10 md:mb-14">
          <Eyebrow>Plan your trip</Eyebrow>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mt-2">
            <Heading as="h2" size="lg" className="max-w-lg">
              Travel & stay
            </Heading>
            <Body muted className="max-w-sm md:text-right text-sm md:text-base">
              Race week in Lagos — flights, partner hotels, and shuttles sorted in three steps.
            </Body>
          </div>
        </AnimateIn>

        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-6 lg:gap-8">
          {/* Left: journey steps */}
          <AnimateIn variant="slideFromLeft" className="relative bg-deep-blue text-white p-6 md:p-8 lg:p-10 overflow-hidden">
            <VoltSlash variant="mask" className="opacity-30 right-0 w-[280px]" />
            <div className="relative z-10">
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-sun mb-6">
                Race week journey
              </p>
              <ol className="space-y-0">
                {travelSteps.map((step, i) => {
                  const Icon = stepIcons[i] ?? Plane;
                  const isLast = i === travelSteps.length - 1;
                  return (
                    <li key={step.id} className="relative flex gap-4 pb-8 last:pb-0">
                      {!isLast && (
                        <span
                          className="absolute left-[19px] top-10 bottom-0 w-px bg-white/20"
                          aria-hidden="true"
                        />
                      )}
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 border border-white/15">
                        <Icon className="h-4 w-4 text-volt" aria-hidden="true" />
                      </span>
                      <div className="pt-1">
                        <span className="font-display text-lg text-volt leading-none">
                          {step.label}
                        </span>
                        <p className="font-body font-bold text-base mt-1">{step.title}</p>
                        <p className="font-body text-sm text-tint-blue/90 mt-1 leading-relaxed">
                          {step.detail}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>
              <div className="mt-8 pt-6 border-t border-white/10">
                <Body className="text-tint-blue text-sm">{travelHighlights.guide}</Body>
              </div>
            </div>
          </AnimateIn>

          {/* Right: hotels + CTA */}
          <div className="flex flex-col gap-4">
            <AnimateIn variant="slideFromRight" delay={0.08}>
              <div className="bg-tint-yellow border border-sun/30 px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-ink/50">
                    Athlete perk
                  </p>
                  <p className="font-body text-sm font-semibold text-ink mt-0.5">
                    {travelHighlights.discount}
                  </p>
                </div>
                <Button asChild variant="primary" size="sm" className="shrink-0">
                  <Link href="/travel">Travel guide</Link>
                </Button>
              </div>
            </AnimateIn>

            <Stagger className="grid sm:grid-cols-2 gap-3 flex-1" stagger={0.06}>
              {travelHotels.map((hotel) => (
                <StaggerItem key={hotel.name}>
                  <motion.article
                    whileHover={reducedMotion ? undefined : { y: -4 }}
                    transition={transition.fast}
                    className="group relative h-full bg-white border border-line p-5 pl-6 overflow-hidden transition-[box-shadow,border-color] hover:shadow-md hover:border-volt/25"
                  >
                    <CardAccent />
                    <p className="text-[10px] font-extrabold uppercase tracking-wide text-sapphire">
                      {hotel.area}
                    </p>
                    <p className="font-body font-bold text-sm mt-1.5">{hotel.name}</p>
                    <p className="font-body text-xs text-ink/55 mt-2">{hotel.perk}</p>
                  </motion.article>
                </StaggerItem>
              ))}
            </Stagger>

            <AnimateIn delay={0.15}>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="bg-paper-dim border border-line px-5 py-4">
                  <p className="font-display text-2xl text-sapphire leading-stat">LOS</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-ink/45 mt-1">
                    Airport code
                  </p>
                  <p className="font-body text-xs text-ink/60 mt-2">
                    {travelHighlights.airportTime}
                  </p>
                </div>
                <div className="bg-paper-dim border border-line px-5 py-4">
                  <p className="font-display text-2xl text-sapphire leading-stat">04:00</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-ink/45 mt-1">
                    First shuttle
                  </p>
                  <p className="font-body text-xs text-ink/60 mt-2">
                    Race day from partner hotels
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
