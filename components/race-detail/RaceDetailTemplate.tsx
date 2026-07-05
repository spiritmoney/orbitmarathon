import { notFound } from "next/navigation";
import { Heading } from "@/components/tokens";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimateIn } from "@/components/motion/AnimateIn";
import { RaceDetailHero } from "./RaceDetailHero";
import { RaceStatBlock } from "./RaceStatBlock";
import { AidStationList, ElevationChart } from "./AidStationList";
import { StickyRegisterCTA } from "./StickyRegisterCTA";
import { getRaceBySlug } from "@/lib/data/races";

interface RaceDetailTemplateProps {
  slug: string;
}

export function RaceDetailTemplate({ slug }: RaceDetailTemplateProps) {
  const race = getRaceBySlug(slug);
  if (!race) notFound();

  return (
    <>
      <RaceDetailHero race={race} />

      <div className="max-w-[1180px] mx-auto px-4 md:px-8 py-12">
        <RaceStatBlock race={race} />

        <AnimateIn className="grid md:grid-cols-2 gap-10 mt-12">
          <div>
            <Heading as="h2" size="md" className="mb-4">
              Elevation
            </Heading>
            <ElevationChart race={race} />
          </div>
          <AidStationList race={race} />
        </AnimateIn>

        <AnimateIn delay={0.08} className="mt-12">
          <Heading as="h2" size="md" className="mb-4">
            Rules & requirements
          </Heading>
          <Accordion type="single" collapsible className="bg-white border border-line px-4">
            {race.rules.map((rule, i) => (
              <AccordionItem key={rule.title} value={`rule-${i}`}>
                <AccordionTrigger>{rule.title}</AccordionTrigger>
                <AccordionContent>{rule.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimateIn>

        <AnimateIn delay={0.1} className="mt-12 bg-tint-green p-6">
          <Heading as="h2" size="md" className="mb-2">
            Highlights
          </Heading>
          <ul className="list-disc list-inside space-y-1">
            {race.highlights.map((h) => (
              <li key={h} className="font-body text-sm text-ink/80">
                {h}
              </li>
            ))}
          </ul>
        </AnimateIn>
      </div>

      <StickyRegisterCTA race={race} />
    </>
  );
}
