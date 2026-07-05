import { Hero } from "@/components/marketing/Hero";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { Body } from "@/components/tokens";
import { homeStats } from "@/lib/data/races";
import { storyHighlights } from "@/lib/data/travel";
import { storyMedia } from "@/lib/data/media";
import { VoltSlash } from "@/components/tokens";
import { MediaAsset } from "@/components/media/MediaAsset";

export const metadata = { title: "Our story" };

export default function StoryPage() {
  return (
    <>
      <Hero
        eyebrow="Since 2023"
        title="Do not be left out of history"
        description="Orbit Marathon began as a bold idea: what if cyclists and marathoners shared one course, one community, one finish line on the Lagos coast?"
        primaryCta={{ href: "/register", label: "Join us" }}
        stats={homeStats.slice(0, 3)}
        media={storyMedia}
      />
      <VoltSlash variant="divider" />
      <div className="max-w-[1180px] mx-auto px-4 md:px-8 py-16 space-y-12">
        <section>
          <SectionHeader title="Our history" align="left" />
          <Body>{storyHighlights.history}</Body>
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
