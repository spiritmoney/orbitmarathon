"use client";

import Image from "next/image";
import Link from "next/link";
import { Music, PartyPopper, Route, Trophy } from "lucide-react";
import { Body, Heading } from "@/components/tokens";
import { CardAccent } from "@/components/tokens/CardAccent";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { Button } from "@/components/ui/button";
import { AnimateIn, Stagger, StaggerItem } from "@/components/motion/AnimateIn";
import { eventInfo } from "@/lib/data/event";
import {
  spectatorGallery,
  spectatorHighlights,
  spectatorIntro,
} from "@/lib/data/spectator";
import { cn } from "@/lib/utils";

const highlightIcons = [Trophy, Route, PartyPopper, Music];

const layoutClasses: Record<
  (typeof spectatorGallery)[number]["layout"],
  string
> = {
  tall: "md:row-span-2 md:col-span-1 min-h-[220px] md:min-h-0",
  wide: "md:col-span-2 min-h-[200px]",
  square: "min-h-[200px]",
};

export function HomeSpectatorGallery() {
  return (
    <section className="py-16 md:py-24 bg-white border-y border-line">
      <div className="max-w-[1180px] mx-auto px-4 md:px-8">
        <AnimateIn>
          <SectionHeader
            eyebrow={spectatorIntro.eyebrow}
            title={spectatorIntro.title}
            description={spectatorIntro.description}
            align="left"
          />
        </AnimateIn>

        <Stagger
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10 md:mb-14"
          stagger={0.06}
        >
          {spectatorGallery.map((item) => (
            <StaggerItem
              key={item.id}
              className={cn(
                "group relative overflow-hidden rounded-sm bg-paper-dim border border-line",
                layoutClasses[item.layout],
              )}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-transparent"
                aria-hidden="true"
              />
              <p className="absolute bottom-0 left-0 right-0 z-10 px-3 py-3 text-[11px] font-bold uppercase tracking-wide text-white">
                {item.caption}
              </p>
            </StaggerItem>
          ))}
        </Stagger>

        <Stagger className="grid sm:grid-cols-2 gap-4 mb-10" stagger={0.05}>
          {spectatorHighlights.map((item, index) => {
            const Icon = highlightIcons[index] ?? PartyPopper;
            return (
              <StaggerItem key={item.title}>
                <article className="group relative h-full bg-paper-dim border border-line p-5 pl-6 overflow-hidden transition-[border-color,box-shadow] hover:border-volt/25 hover:shadow-md">
                  <CardAccent />
                  <div className="flex gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-deep-blue/10 text-deep-blue">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <Heading as="h3" size="md" className="normal-case text-lg">
                        {item.title}
                      </Heading>
                      <Body muted className="mt-2 text-sm leading-relaxed">
                        {item.description}
                      </Body>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>

        <AnimateIn delay={0.1}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-deep-blue text-white p-6 md:p-8 rounded-sm">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-sun mb-2">
                Open to everyone
              </p>
              <Body className="text-tint-blue text-sm md:text-base max-w-xl">
                Spectating is free. Race weekend runs {eventInfo.dateLabel} along the{" "}
                {eventInfo.routeLabel} route. Questions? Message us on WhatsApp.
              </Body>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Button asChild variant="primary">
                <Link href="/register">Register to compete</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href={eventInfo.whatsappLink} target="_blank" rel="noopener noreferrer">
                  Ask about race weekend
                </Link>
              </Button>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
