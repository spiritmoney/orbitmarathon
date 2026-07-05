import Link from "next/link";
import Image from "next/image";
import { Heading, Body, Eyebrow } from "@/components/tokens";
import { OfficialPartnership } from "@/components/marketing/OfficialPartnership";
import { partners, governmentPartnership } from "@/lib/data/partners";
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
            {governmentPartnership.statement}
          </Body>
        </div>
      </section>

      <OfficialPartnership />

      <div className="max-w-[1180px] mx-auto px-4 md:px-8 py-12">
        <Heading as="h2" size="md" className="mb-6">
          All partners
        </Heading>
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {partners.map((p) => (
            <div
              key={p.name}
              className="bg-white border border-line p-6 flex justify-between items-center gap-4"
            >
              <div className="flex items-center gap-4 min-w-0">
                {p.logo ? (
                  <div className="relative h-10 w-28 shrink-0">
                    <Image
                      src={p.logo}
                      alt={p.logoAlt ?? p.name}
                      fill
                      className="object-contain object-left"
                      sizes="112px"
                    />
                  </div>
                ) : (
                  <span className="font-display text-xl md:text-2xl uppercase truncate">
                    {p.name}
                  </span>
                )}
                {p.logo && (
                  <span className="font-body text-sm font-bold text-ink truncate hidden sm:block">
                    {p.name}
                  </span>
                )}
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-wide text-sapphire shrink-0">
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
