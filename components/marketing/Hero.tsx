"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Eyebrow, Heading, Body, Stat } from "@/components/tokens";
import { VoltSlash } from "@/components/tokens/VoltSlash";
import { MediaAsset } from "@/components/media/MediaAsset";
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

  const textMotion = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { ...transition.base, delay: 0.05 },
      };

  const mediaMotion = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, x: 28, scale: 0.98 },
        animate: { opacity: 1, x: 0, scale: 1 },
        transition: { ...transition.slow, delay: 0.15 },
      };

  return (
    <section className="relative bg-deep-blue text-white overflow-hidden pt-16 md:pt-24 pb-0">
      <VoltSlash variant="mask" />
      <div className="relative z-10 max-w-[1180px] mx-auto px-4 md:px-8 grid md:grid-cols-[1fr_1.35fr] gap-6 md:gap-8 items-end">
        <motion.div {...textMotion}>
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

        {media && (
          <motion.div
            className="relative w-full aspect-[4/3] min-h-[360px] sm:min-h-[400px] md:aspect-auto md:min-h-[520px] lg:min-h-[600px] md:h-[min(72vh,640px)] mb-6 md:mb-0 rounded-sm overflow-hidden border border-white/10 shadow-2xl shadow-ink/30"
            {...mediaMotion}
          >
            <MediaAsset
              item={media}
              priority
              autoplay={media.type === "video"}
              sizes="(max-width: 768px) 100vw, 58vw"
              showCaption
            />
          </motion.div>
        )}
      </div>
      <div className="relative z-10 max-w-[1180px] mx-auto px-4 md:px-8">
        <Stagger
          className="flex flex-wrap gap-6 md:gap-9 mt-12 md:mt-14 pb-10"
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
    </section>
  );
}
