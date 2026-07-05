import Link from "next/link";
import { AnimateIn } from "@/components/motion/AnimateIn";
import { Body, Eyebrow, Heading } from "@/components/tokens";
import { Button } from "@/components/ui/button";
import { prizeHighlights, prizePool } from "@/lib/data/awards";

export function PrizePoolSummary() {
  return (
    <section className="py-16 md:py-20 bg-deep-blue text-white">
      <div className="max-w-[1180px] mx-auto px-4 md:px-8">
        <AnimateIn>
          <div className="mb-11">
            <Eyebrow variant="sun" className="mb-2">Awards</Eyebrow>
            <Heading as="h2" size="lg" className="text-white">
              ₦50 million prize pool
            </Heading>
            <Body className="mt-3 max-w-lg text-tint-blue">
              Transparent payouts for elite competition across marathon and category races.
            </Body>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.08} className="grid grid-cols-3 gap-4 md:gap-8 mt-10 mb-8">
          {prizeHighlights.map((item) => (
            <div key={item.label} className="border border-white/15 p-4 md:p-6 text-center">
              <p className="font-display text-2xl md:text-4xl text-volt">{item.value}</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-tint-blue mt-2">
                {item.label}
              </p>
            </div>
          ))}
        </AnimateIn>

        <AnimateIn delay={0.12}>
          <Body className="text-tint-blue text-sm max-w-2xl mb-6">
            {prizePool.participation}. All figures subject to final race committee approval.
          </Body>
          <Button asChild variant="primary">
            <Link href="/awards">View full breakdown</Link>
          </Button>
        </AnimateIn>
      </div>
    </section>
  );
}
