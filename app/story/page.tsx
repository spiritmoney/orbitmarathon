import { Hero } from "@/components/marketing/Hero";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { Body } from "@/components/tokens";
import { BrandLogo } from "@/components/layout/BrandMark";
import { aboutMarathon, heroStats } from "@/lib/data/event";
import { storyHighlights } from "@/lib/data/travel";
import { storyMedia } from "@/lib/data/media";
import { VoltSlash } from "@/components/tokens";
import { MediaAsset } from "@/components/media/MediaAsset";

export const metadata = { title: "Our story" };

export default function StoryPage() {
  return (
    <>
      <Hero
        eyebrow="Orbit Ride & Gateway"
        title="The ultimate expression of the Orbit lifestyle"
        description={aboutMarathon}
        primaryCta={{ href: "/register", label: "Register & buy jersey" }}
        stats={heroStats.slice(0, 3)}
        media={storyMedia}
      />
      <VoltSlash variant="divider" />
      <div className="max-w-[1180px] mx-auto px-4 md:px-8 py-16 space-y-12">
        <section className="flex flex-col md:flex-row md:items-center gap-8 pb-8 border-b border-line">
          <BrandLogo variant="full" className="max-w-[300px]" priority />
          <Body muted className="max-w-xl">
            The flagship endurance event on the Lagos coastal circuit — delivered by Orbit Ride &
            Gateway.
          </Body>
        </section>
        <section>
          <SectionHeader title="About us" align="left" />
          <Body>{aboutMarathon}</Body>
        </section>
        <section>
          <SectionHeader title="Sustainability" align="left" />
          <Body muted>{storyHighlights.sustainability}</Body>
        </section>
        <div className="aspect-video relative max-w-2xl rounded-sm overflow-hidden">
          <MediaAsset
            item={storyMedia}
            sizes="800px"
            showCaption
            imageClassName="object-[center_38%]"
          />
        </div>
      </div>
    </>
  );
}
