import { Heading, Body } from "@/components/tokens";
import { StepProgress } from "@/components/commerce/StepProgress";
import { WaveSelector } from "@/components/commerce/WaveSelector";
import { eventInfo } from "@/lib/data/event";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Register",
  description: `Register for Orbit Marathon — free entry, mandatory official jersey (₦${eventInfo.jerseyPrice.toLocaleString()}). Choose Coastal 180, Marathon 42, or Duo Orbit.`,
  path: "/register",
});

export default async function RegisterPage({
  searchParams,
}: {
  searchParams: Promise<{ wave?: string }>;
}) {
  const params = await searchParams;

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-[1180px] mx-auto px-4 md:px-8">
        <Heading as="h1" size="lg" className="mb-2">
          Register
        </Heading>
        <Body muted className="mb-8 max-w-lg">
          Step 1 of 5 — Choose your wave. Registration is free; a mandatory official jersey (₦
          {eventInfo.jerseyPrice.toLocaleString()})
          is purchased at checkout.
        </Body>
        <StepProgress currentStep={1} />
        <WaveSelector defaultWave={params.wave} />
      </div>
    </div>
  );
}
