"use client";

import Link from "next/link";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { MediaAsset } from "@/components/media/MediaAsset";
import { Button } from "@/components/ui/button";
import { AnimateIn } from "@/components/motion/AnimateIn";
import { eventInfo } from "@/lib/data/event";
import type { MediaItem } from "@/lib/data/media";

interface HomeCoursePreviewProps {
  media: MediaItem;
}

export function HomeCoursePreview({ media }: HomeCoursePreviewProps) {
  return (
    <section className="py-16 md:py-20 bg-paper-dim">
      <div className="max-w-[1180px] mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-10 items-center">
        <AnimateIn variant="fadeUp">
          <SectionHeader
            eyebrow="The course"
            title="One circuit, two disciplines"
            description={`Closed coastal roads on the ${eventInfo.routeLabel} route.`}
            align="left"
          />
          <ul className="space-y-2 mb-6">
            {["180km ride leg · 1,340m gain", "42.2km run leg · flat stadium finish", "8 aid stations · live elevation data"].map(
              (line) => (
                <li key={line} className="flex items-center gap-2 text-sm font-body text-ink/80">
                  <span className="w-1.5 h-1.5 bg-volt shrink-0" aria-hidden="true" />
                  {line}
                </li>
              ),
            )}
          </ul>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="dark">
              <Link href="/the-race/course-map">Course map & elevation</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/the-race">All waves</Link>
            </Button>
          </div>
        </AnimateIn>
        <AnimateIn variant="scaleIn" delay={0.12} className="aspect-video relative min-h-[220px]">
          <MediaAsset item={media} sizes="(max-width: 768px) 100vw, 45vw" showCaption />
        </AnimateIn>
      </div>
    </section>
  );
}
