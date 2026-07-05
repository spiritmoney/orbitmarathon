"use client";

import Link from "next/link";
import { Body, Heading } from "@/components/tokens";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { MediaAsset } from "@/components/media/MediaAsset";
import { Button } from "@/components/ui/button";
import { AnimateIn } from "@/components/motion/AnimateIn";
import { storyHighlights } from "@/lib/data/travel";
import type { MediaItem } from "@/lib/data/media";

interface HomeStoryProps {
  media: MediaItem;
}

export function HomeStory({ media }: HomeStoryProps) {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-[1180px] mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-10 items-center">
        <AnimateIn variant="slideFromLeft" className="aspect-[4/3] relative min-h-[280px] order-2 md:order-1 rounded-sm overflow-hidden">
          <MediaAsset
            item={media}
            sizes="(max-width: 768px) 100vw, 45vw"
            showCaption
            imageClassName="object-[center_38%]"
          />
        </AnimateIn>
        <AnimateIn variant="slideFromRight" delay={0.1} className="order-1 md:order-2">
          <SectionHeader eyebrow="Our story" title="Built in Lagos" align="left" />
          <Body className="mb-6">{storyHighlights.history}</Body>
          <div className="bg-tint-green border border-forest/20 p-5 mb-6">
            <Heading as="h3" size="md" className="normal-case text-xl mb-2">
              Sustainability
            </Heading>
            <Body muted className="text-sm">{storyHighlights.sustainability}</Body>
          </div>
          <Button asChild variant="ghost">
            <Link href="/story">Read full story</Link>
          </Button>
        </AnimateIn>
      </div>
    </section>
  );
}
