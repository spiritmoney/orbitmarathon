import { Heading, Body, Eyebrow } from "@/components/tokens";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { travelHighlights, travelHotels, travelSteps } from "@/lib/data/travel";

export const metadata = { title: "Travel & stay" };

export default function TravelPage() {
  return (
    <>
      <section className="bg-deep-blue text-white py-16">
        <div className="max-w-[1180px] mx-auto px-4 md:px-8">
          <Eyebrow variant="sun">Plan your trip</Eyebrow>
          <Heading as="h1" size="lg" className="text-white mt-2">
            Travel & stay
          </Heading>
          <Body className="text-tint-blue mt-4 max-w-xl">
            Getting to Lagos, partner hotels, and local guides for race week.
          </Body>
        </div>
      </section>
      <div className="max-w-[1180px] mx-auto px-4 md:px-8 py-12 space-y-12">
        <section>
          <SectionHeader title="Race week journey" align="left" />
          <ol className="space-y-6">
            {travelSteps.map((step) => (
              <li key={step.id} className="flex gap-4 border-b border-line pb-6 last:border-0">
                <span className="font-display text-3xl text-sapphire leading-none shrink-0">
                  {step.label}
                </span>
                <div>
                  <p className="font-body font-bold">{step.title}</p>
                  <Body muted className="mt-1 text-sm">{step.detail}</Body>
                </div>
              </li>
            ))}
          </ol>
        </section>
        <section>
          <SectionHeader title="Accommodation partners" align="left" />
          <Body muted className="text-sm mb-6">{travelHighlights.discount}</Body>
          <div className="grid md:grid-cols-2 gap-4">
            {travelHotels.map((hotel) => (
              <div key={hotel.name} className="bg-white border border-line p-5">
                <p className="text-[10px] font-extrabold uppercase tracking-wide text-sapphire">
                  {hotel.area}
                </p>
                <p className="font-bold text-sm mt-1">{hotel.name}</p>
                <p className="text-xs text-ink/60 mt-1">{hotel.perk}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <SectionHeader title="Local guide" align="left" />
          <Body muted>{travelHighlights.guide}</Body>
        </section>
      </div>
    </>
  );
}
