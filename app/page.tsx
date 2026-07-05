import { Hero } from "@/components/marketing/Hero";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { CardGrid } from "@/components/marketing/CardGrid";
import { PartnerStrip } from "@/components/marketing/PartnerStrip";
import { NewsTeaser } from "@/components/marketing/NewsTeaser";
import { MediaShowcase } from "@/components/marketing/MediaShowcase";
import { HomeStory } from "@/components/marketing/HomeStory";
import { HomeCoursePreview } from "@/components/marketing/HomeCoursePreview";
import { HomeTravel } from "@/components/marketing/HomeTravel";
import { HomeFAQ } from "@/components/marketing/HomeFAQ";
import { RegisterCTA } from "@/components/marketing/RegisterCTA";
import { AnimateIn } from "@/components/motion/AnimateIn";
import { VoltSlash } from "@/components/tokens";
import { homeStats, races } from "@/lib/data/races";
import { newsArticles } from "@/lib/data/news";
import {
  heroMedia,
  slideshowMedia,
  storyMedia,
  courseMedia,
} from "@/lib/data/media";

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="05 — 12 October · Lagos Coastal Circuit"
        title={
          <>
            Outrun
            <br />
            the <em className="text-sun not-italic">horizon</em>
          </>
        }
        description="One course, two disciplines, zero limits. Orbit Marathon fuses road cycling and marathon endurance into a single continuous event for riders and runners chasing the same finish line."
        primaryCta={{ href: "/register", label: "Register now" }}
        secondaryCta={{ href: "#course", label: "Explore the course" }}
        stats={homeStats}
        media={heroMedia}
      />

      <VoltSlash variant="divider" />

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

      <div id="course">
        <HomeCoursePreview media={courseMedia} />
      </div>

      <HomeStory media={storyMedia} />

      <HomeTravel />

      <PartnerStrip />

      <NewsTeaser articles={newsArticles} />

      <HomeFAQ />

      <RegisterCTA />
    </>
  );
}
