import { Heading, Body } from "@/components/tokens";
import { StepProgress } from "@/components/commerce/StepProgress";
import { PaymentForm } from "@/components/commerce/PaymentForm";

export const metadata = { title: "Payment" };

export default function RegisterPaymentPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-[1180px] mx-auto px-4 md:px-8">
        <Heading as="h1" size="lg" className="mb-2">Payment</Heading>
        <Body muted className="mb-8">
          Step 4 of 5 — Pay for your required jersey. Registration is free; checkout via Paystack,
          Flutterwave, or Orbit Gateway.
        </Body>
        <StepProgress currentStep={4} />
        <PaymentForm />
      </div>
    </div>
  );
}
