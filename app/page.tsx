import { Hero } from "@/components/marketing/Hero";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { CardGrid } from "@/components/marketing/CardGrid";
import { OfficialPartnership } from "@/components/marketing/OfficialPartnership";
import { PartnerStrip } from "@/components/marketing/PartnerStrip";
import { NewsTeaser } from "@/components/marketing/NewsTeaser";
import { MediaShowcase } from "@/components/marketing/MediaShowcase";
import { HomeSpectatorGallery } from "@/components/marketing/HomeSpectatorGallery";
import { HomeStory } from "@/components/marketing/HomeStory";
import { HomeCoursePreview } from "@/components/marketing/HomeCoursePreview";
import { HomeTravel } from "@/components/marketing/HomeTravel";
import { HomeFAQ } from "@/components/marketing/HomeFAQ";
import { HomeCountdown } from "@/components/marketing/HomeCountdown";
import { PrizePoolSummary } from "@/components/marketing/PrizePoolSummary";
import { RegisterCTA } from "@/components/marketing/RegisterCTA";
import { AnimateIn } from "@/components/motion/AnimateIn";
import { createPageMetadata } from "@/lib/seo";
import { eventInfo, heroStats } from "@/lib/data/event";
import { races } from "@/lib/data/races";
import { newsArticles } from "@/lib/data/news";
import {
  heroMedia,
  slideshowMedia,
  storyMedia,
  courseMedia,
} from "@/lib/data/media";

export const metadata = createPageMetadata({
  path: "/",
  description:
    "Orbit Marathon in Lagos — free registration, ₦50M prizes, Coastal 180, Marathon 42 & Duo Orbit. 5–7 September 2026, Oniru Stadium to Teslim Balogun Stadium. Spectators welcome.",
});

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow={`${eventInfo.dateLabel} · ${eventInfo.parentBrand}`}
        title={
          <>
            The Orbit
            <br />
            <em className="text-sun not-italic">lifestyle</em> in motion
          </>
        }
        description="More than a race — a lifestyle event from Orbit Ride & Gateway. Push your limits, join the community, and showcase the Nigerian drive for excellence on the Lagos coastal circuit."
        primaryCta={{ href: "/register", label: "Register & buy jersey" }}
        secondaryCta={{ href: "/awards", label: "View prize pool" }}
        stats={heroStats}
        media={heroMedia}
      />

      <HomeCountdown />

      <section className="py-16 md:py-20 bg-paper-dim">
        <div className="max-w-[1180px] mx-auto px-4 md:px-8">
          <AnimateIn>
            <SectionHeader
              eyebrow="Three waves"
              title="Choose your orbit"
              description="Coastal 180, Marathon 42, or Duo Orbit relay — one finish line, three ways to earn it."
            />
          </AnimateIn>
          <CardGrid races={races} />
        </div>
      </section>

      <MediaShowcase items={slideshowMedia} />

      <HomeSpectatorGallery />

      <PrizePoolSummary />

      <div id="course">
        <HomeCoursePreview media={courseMedia} />
      </div>

      <HomeStory media={storyMedia} />

      <HomeTravel />

      <PartnerStrip />

      <NewsTeaser articles={newsArticles} />

      <HomeFAQ />

      <RegisterCTA />

      <OfficialPartnership />
    </>
  );
}
