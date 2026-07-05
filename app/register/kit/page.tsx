import { Heading, Body } from "@/components/tokens";
import { StepProgress } from "@/components/commerce/StepProgress";
import { KitForm } from "@/components/commerce/KitForm";

export const metadata = { title: "Kit & add-ons" };

export default function RegisterKitPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-[1180px] mx-auto px-4 md:px-8">
        <Heading as="h1" size="lg" className="mb-2">Kit & add-ons</Heading>
        <Body muted className="mb-8">
          Step 3 of 5 — Select your mandatory official jersey size (₦10,000) and optional add-ons.
        </Body>
        <StepProgress currentStep={3} />
        <KitForm />
      </div>
    </div>
  );
}
