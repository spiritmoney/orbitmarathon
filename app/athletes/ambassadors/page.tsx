import Link from "next/link";
import { Heading, Body, Eyebrow } from "@/components/tokens";
import { ambassadors } from "@/lib/data/partners";

export const metadata = { title: "Ambassadors" };

export default function AmbassadorsPage() {
  return (
    <>
      <section className="bg-deep-blue text-white py-16">
        <div className="max-w-[1180px] mx-auto px-4 md:px-8">
          <Eyebrow variant="sun">Athletes</Eyebrow>
          <Heading as="h1" size="lg" className="text-white mt-2">
            Ambassadors
          </Heading>
          <Body className="text-tint-blue mt-4 max-w-xl">
            Elite athletes who represent Orbit Marathon across cycling, running, and duathlon.
          </Body>
        </div>
      </section>
      <div className="max-w-[1180px] mx-auto px-4 md:px-8 py-12 grid md:grid-cols-3 gap-6">
        {ambassadors.map((a) => (
          <article key={a.name} className="bg-white border border-line p-6">
            <p className="text-[10px] font-extrabold uppercase tracking-wide text-sapphire">
              {a.discipline}
            </p>
            <Heading as="h2" size="md" className="mt-2 normal-case text-2xl">
              {a.name}
            </Heading>
            <Body muted className="mt-2 text-sm">{a.bio}</Body>
          </article>
        ))}
      </div>
      <div className="max-w-[1180px] mx-auto px-4 md:px-8 pb-12">
        <Link href="/athletes/training-hub" className="text-sapphire font-bold text-sm uppercase hover:text-deep-blue">
          Visit training hub →
        </Link>
      </div>
    </>
  );
}
