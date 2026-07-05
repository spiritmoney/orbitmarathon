import Link from "next/link";
import { Heading, Body, Eyebrow } from "@/components/tokens";
import { partners } from "@/lib/data/partners";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Partners" };

export default function PartnersPage() {
  return (
    <>
      <section className="bg-deep-blue text-white py-16">
        <div className="max-w-[1180px] mx-auto px-4 md:px-8">
          <Eyebrow variant="sun">Sponsors</Eyebrow>
          <Heading as="h1" size="lg" className="text-white mt-2">
            Partners
          </Heading>
          <Body className="text-tint-blue mt-4 max-w-xl">
            Orbit Marathon is powered by partners who share our commitment to endurance sport in Africa.
          </Body>
        </div>
      </section>
      <div className="max-w-[1180px] mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {partners.map((p) => (
            <div key={p.name} className="bg-white border border-line p-6 flex justify-between items-center">
              <span className="font-display text-2xl uppercase">{p.name}</span>
              <span className="text-[10px] font-extrabold uppercase tracking-wide text-sapphire">
                {p.tier}
              </span>
            </div>
          ))}
        </div>
        <Button asChild variant="primary">
          <Link href="/partners/become-a-partner">Become a partner</Link>
        </Button>
      </div>
    </>
  );
}
