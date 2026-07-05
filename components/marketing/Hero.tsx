"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Eyebrow, Heading, Body, Stat } from "@/components/tokens";
import { Stagger, StaggerItem } from "@/components/motion/AnimateIn";
import { transition } from "@/lib/motion";
import type { MediaItem } from "@/lib/data/media";

interface HeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  stats: { value: string; label: string }[];
  media?: MediaItem;
}

export function Hero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  stats,
  media,
}: HeroProps) {
  const reducedMotion = useReducedMotion();
  const imageSrc = media?.type === "video" ? (media.poster ?? media.src) : media?.src;

  const textMotion = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { ...transition.base, delay: 0.05 },
      };

  return (
    <section className="relative -mt-[6.75rem] pt-[6.75rem] bg-deep-blue text-white overflow-hidden min-h-[min(92vh,880px)] flex flex-col justify-end">
      {media && imageSrc && (
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src={imageSrc}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_42%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/75 to-ink/25 md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
        </div>
      )}

      <div className="relative z-10 max-w-[1180px] mx-auto px-4 md:px-8 w-full pt-8 md:pt-12 pb-6 flex-1 flex flex-col justify-center">
        <motion.div {...textMotion} className="max-w-xl md:max-w-2xl">
          <Eyebrow variant="sun" className="mb-4">
            {eyebrow}
          </Eyebrow>
          <Heading as="h1" size="xl" className="text-white mb-5">
            {title}
          </Heading>
          <Body className="text-tint-blue max-w-md text-base leading-relaxed">
            {description}
          </Body>
          <div className="flex flex-wrap gap-3.5 mt-7">
            <Button asChild variant="primary">
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            {secondaryCta && (
              <Button asChild variant="outline">
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            )}
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-[1180px] mx-auto px-4 md:px-8 w-full pb-10">
        <Stagger
          className="flex flex-wrap gap-6 md:gap-9"
          stagger={0.08}
          trigger="mount"
        >
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <Stat value={stat.value} label={stat.label} variant="dark" />
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {media && (
        <span className="sr-only">{media.alt}</span>
      )}
    </section>
  );
}
