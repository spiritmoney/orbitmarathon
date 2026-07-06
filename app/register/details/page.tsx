import { Heading, Body } from "@/components/tokens";
import { StepProgress } from "@/components/commerce/StepProgress";
import { DetailsForm } from "@/components/commerce/DetailsForm";

import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Athlete details",
  path: "/register/details",
  noIndex: true,
});

export default function RegisterDetailsPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-[1180px] mx-auto px-4 md:px-8">
        <Heading as="h1" size="lg" className="mb-2">Athlete details</Heading>
        <Body muted className="mb-8">Step 2 of 5 — Your contact and emergency information.</Body>
        <StepProgress currentStep={2} />
        <DetailsForm />
      </div>
    </div>
  );
}
