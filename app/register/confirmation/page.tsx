import { Heading, Body } from "@/components/tokens";
import { StepProgress } from "@/components/commerce/StepProgress";
import { ConfirmationView } from "@/components/commerce/ConfirmationView";

export const metadata = { title: "Confirmation" };

export default function RegisterConfirmationPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-[1180px] mx-auto px-4 md:px-8">
        <Heading as="h1" size="lg" className="mb-2">Confirmation</Heading>
        <Body muted className="mb-8">Step 5 of 5 — You are in.</Body>
        <StepProgress currentStep={5} />
        <ConfirmationView />
      </div>
    </div>
  );
}
