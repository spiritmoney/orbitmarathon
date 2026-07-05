import Link from "next/link";
import { Heading, Body, Eyebrow } from "@/components/tokens";
import { Button } from "@/components/ui/button";
import { prizePool } from "@/lib/data/awards";

export const metadata = { title: "Awards & prizes" };

export default function AwardsPage() {
  return (
    <>
      <section className="bg-deep-blue text-white py-16">
        <div className="max-w-[1180px] mx-auto px-4 md:px-8">
          <Eyebrow variant="sun">Competition</Eyebrow>
          <Heading as="h1" size="lg" className="text-white mt-2">
            Awards & prize pool
          </Heading>
          <Body className="text-tint-blue mt-4 max-w-2xl">
            Full transparency for athletes chasing podium finishes. Total prize pool:{" "}
            <strong className="text-white">₦{prizePool.total.toLocaleString()}</strong>.
          </Body>
        </div>
      </section>

      <div className="max-w-[1180px] mx-auto px-4 md:px-8 py-12 space-y-12">
        <section>
          <Heading as="h2" size="md" className="mb-6">
            Full marathon
          </Heading>
          <div className="overflow-x-auto border border-line">
            <table className="w-full text-sm">
              <thead className="bg-paper-dim">
                <tr>
                  <th className="text-left px-4 py-3 font-bold uppercase tracking-wide text-xs text-ink/60">
                    Position
                  </th>
                  <th className="text-left px-4 py-3 font-bold uppercase tracking-wide text-xs text-ink/60">
                    Prize
                  </th>
                  <th className="text-left px-4 py-3 font-bold uppercase tracking-wide text-xs text-ink/60 hidden sm:table-cell">
                    Note
                  </th>
                </tr>
              </thead>
              <tbody>
                {prizePool.fullMarathon.map((row) => (
                  <tr key={row.position} className="border-t border-line">
                    <td className="px-4 py-3 font-semibold">{row.position}</td>
                    <td className="px-4 py-3 text-sapphire font-display text-xl">{row.prize}</td>
                    <td className="px-4 py-3 text-ink/60 hidden sm:table-cell">{row.note ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <Heading as="h2" size="md" className="mb-6">
            Category races
          </Heading>
          <div className="overflow-x-auto border border-line">
            <table className="w-full text-sm">
              <thead className="bg-paper-dim">
                <tr>
                  <th className="text-left px-4 py-3 font-bold uppercase tracking-wide text-xs text-ink/60">
                    Category
                  </th>
                  <th className="text-left px-4 py-3 font-bold uppercase tracking-wide text-xs text-ink/60">
                    Pool
                  </th>
                </tr>
              </thead>
              <tbody>
                {prizePool.categories.map((row) => (
                  <tr key={row.position} className="border-t border-line">
                    <td className="px-4 py-3 font-semibold">{row.position}</td>
                    <td className="px-4 py-3 text-sapphire font-display text-xl">{row.prize}</td>
                  </tr>
                ))}
                <tr className="border-t border-line bg-tint-blue/20">
                  <td className="px-4 py-3 font-bold">Total prize pool</td>
                  <td className="px-4 py-3 text-deep-blue font-display text-2xl">
                    ₦{prizePool.total.toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-tint-green border border-forest/20 p-6">
          <Heading as="h3" size="md" className="normal-case text-xl mb-2">
            All finishers
          </Heading>
          <Body>{prizePool.participation}</Body>
        </section>

        <Button asChild variant="primary">
          <Link href="/register">Register & purchase jersey</Link>
        </Button>
      </div>
    </>
  );
}
